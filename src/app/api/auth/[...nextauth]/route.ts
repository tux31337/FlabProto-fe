import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// NextAuth 타입 확장
declare module 'next-auth' {
  interface User {
    id: string;
    name?: string;
    email?: string;
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    refreshTokenExpiresIn?: number;
  }

  interface Session {
    user: User;
    error?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    name?: string;
    email?: string;
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    refreshTokenExpiresIn?: number;
    error?: string;
  }
}

// 사용자 인증 처리 함수
async function handleAuthentication(endpoint: string, payload: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.error(`인증 실패: ${response.status}`);
      return null;
    }

    const responseData = await response.json();
    // API 응답 구조에 맞게 수정 (data 필드 내부의 값을 사용)
    const data = responseData.data || responseData;

    console.log('로그인 응답 데이터:', responseData);
    return {
      id: data.userId || data.user_id,
      name: data.name,
      email: data.email,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      refreshTokenExpiresIn: data.refresh_token_expires_in,
    };
  } catch (error) {
    console.error('인증 오류:', error);
    return null;
  }
}

// 토큰 갱신 함수
async function refreshAccessToken(token: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken: token.refreshToken }),
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error(`토큰 갱신 실패: ${response.status}`);
    }

    const data = await response.json();

    // 만료 시간 계산 함수
    const calculateExpiryTime = (expiresIn: number) => {
      // 이미 타임스탬프 형식(밀리초)인지 확인
      return expiresIn > Date.now() + 1000000
        ? expiresIn // 이미 미래의 타임스탬프라면 그대로 사용
        : Date.now() + expiresIn * 1000; // 그렇지 않으면 현재 시간 + 초 단위 만료 시간
    };

    // 새로운 토큰 정보로 업데이트
    return {
      ...token,
      accessToken: data.access_token,
      expiresIn:
        typeof data.expires_in === 'number'
          ? calculateExpiryTime(data.expires_in)
          : Date.now() + 30 * 60 * 1000, // 기본값 30분
      refreshToken: data.refresh_token || token.refreshToken,
      refreshTokenExpiresIn:
        typeof data.refresh_token_expires_in === 'number'
          ? calculateExpiryTime(data.refresh_token_expires_in)
          : Date.now() + 7 * 24 * 60 * 60 * 1000, // 기본값 7일
      error: undefined, // 오류 상태 초기화
    };
  } catch (error) {
    console.error('토큰 갱신 오류:', error);
    return { ...token, error: 'RefreshTokenError' };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        kakaoCode: { label: 'Kakao Code', type: 'text' },
        isKakaoCallback: { label: 'Is Kakao Callback', type: 'text' },
      },

      async authorize(credentials) {
        // 카카오 로그인 처리
        if (credentials?.isKakaoCallback === 'true' && credentials.kakaoCode) {
          return handleAuthentication('/api/auth/kakao', {
            code: credentials.kakaoCode,
          });
        }

        // 일반 이메일/비밀번호 로그인 처리
        if (credentials?.email && credentials?.password) {
          return handleAuthentication('/api/auth/login', {
            email: credentials.email,
            password: credentials.password,
          });
        }

        return null; // 인증 실패
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30일
    updateAge: 24 * 60 * 60, // 24시간마다 세션 갱신
  },

  callbacks: {
    // 리다이렉트 콜백
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },

    // JWT 콜백: 토큰 생성 및 갱신 처리
    async jwt({ token, user }) {
      // 1. 초기 로그인 시: 사용자 정보로 토큰 설정
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expiresIn: user.expiresIn,
          refreshTokenExpiresIn: user.refreshTokenExpiresIn,
        };
      }

      // 2. 액세스 토큰이 아직 유효한 경우
      if (token.expiresIn && Date.now() < token.expiresIn) {
        console.log(
          '액세스 토큰 유효함, 만료일:',
          new Date(token.expiresIn).toISOString()
        );
        return token;
      }

      console.log(
        '액세스 토큰 만료됨. 현재:',
        new Date().toISOString(),
        '만료일:',
        token.expiresIn ? new Date(token.expiresIn).toISOString() : '없음'
      );

      // 3. 액세스 토큰 만료 + 리프레시 토큰 유효
      if (
        token.refreshToken &&
        token.refreshTokenExpiresIn &&
        Date.now() < token.refreshTokenExpiresIn
      ) {
        console.log(
          '리프레시 토큰 유효함, 만료일:',
          new Date(token.refreshTokenExpiresIn).toISOString()
        );
        return refreshAccessToken(token);
      }

      console.log(
        '리프레시 토큰 만료됨 또는 없음. 현재:',
        new Date().toISOString(),
        '만료일:',
        token.refreshTokenExpiresIn
          ? new Date(token.refreshTokenExpiresIn).toISOString()
          : '없음'
      );

      // 4. 리프레시 토큰도 만료된 경우
      console.log('리프레시 토큰 만료: 재로그인 필요');
      return { ...token, error: 'RefreshTokenExpired' };
    },

    // 세션 콜백: JWT 토큰에서 세션 생성
    async session({ session, token }) {
      // JWT 토큰의 정보를 세션에 복사
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        expiresIn: token.expiresIn,
        refreshTokenExpiresIn: token.refreshTokenExpiresIn,
      };

      // 오류 상태가 있으면 세션에도 추가
      if (token.error) {
        session.error = token.error;
      }

      return session;
    },
  },

  pages: {
    signIn: '/login',
    error: '/error',
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
