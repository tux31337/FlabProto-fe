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
          try {
            // 백엔드에 카카오 인증 코드 전송
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/api/auth/kakao`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: credentials.kakaoCode }),
                credentials: 'include',
              }
            );

            if (!response.ok) {
              console.error('카카오 인증 실패:', response.status);
              return null;
            }

            const data = await response.json();
            console.log('카카오 인증 응답:', data);

            // 백엔드 응답에서 사용자 정보 추출
            return {
              id: data.userId || '1',
              name: data.name || 'Kakao User',
              email: data.email || 'kakao@example.com',
              accessToken: data.accessToken || data.access_token,
              refreshToken: data.refreshToken || data.refresh_token,
              expiresIn: data.expires_in,
              refreshTokenExpiresIn: data.refreshTokenExpiresIn,
            };
          } catch (error) {
            console.error('카카오 로그인 오류:', error);
            return null;
          }
        }

        // 일반 이메일/비밀번호 로그인 처리
        if (credentials?.email && credentials?.password) {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: credentials.email,
                  password: credentials.password,
                }),
                credentials: 'include',
              }
            );

            if (!response.ok) {
              console.error('로그인 실패:', response.status);
              return null;
            }

            const data = await response.json();
            console.log('로그인 응답:', data);

            // 백엔드 응답에서 사용자 정보 추출
            return {
              id: data.userId || '1',
              name: data.name || 'User',
              email: data.email || credentials.email,
              accessToken: data.accessToken || data.access_token,
              refreshToken: data.refreshToken || data.refresh_token,
              expiresIn: data.expiresIn,
              refreshTokenExpiresIn: data.refreshTokenExpiresIn,
            };
          } catch (error) {
            console.error('로그인 오류:', error);
            return null;
          }
        }

        return null; // 인증 실패
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30일 (초 단위)
  },

  callbacks: {
    // 리다이렉트 콜백: 로그인 후 리다이렉트 처리
    async redirect({ url, baseUrl }) {
      if (!url.startsWith(baseUrl)) {
        return baseUrl;
      }
      return url;
    },

    // JWT 콜백: 토큰 생성 및 갱신 처리
    async jwt({ token, user }) {
      // 1. 초기 로그인 시: 사용자 정보로 토큰 설정
      if (user) {
        console.log('로그인 성공: JWT 토큰 초기 설정');
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

      // 2. 액세스 토큰이 아직 유효한 경우: 그대로 사용
      if (token.expiresIn && Date.now() < token.expiresIn) {
        return token;
      }

      // 3. 액세스 토큰 만료 + 리프레시 토큰 유효: 토큰 갱신
      if (
        token.refreshToken &&
        token.refreshTokenExpiresIn &&
        Date.now() < token.refreshTokenExpiresIn
      ) {
        console.log('액세스 토큰 만료됨, 리프레시 토큰 유효함');
        console.log('현재 시간:', Date.now());
        console.log('액세스 토큰 만료 시간:', token.expiresIn);
        console.log('리프레시 토큰 만료 시간:', token.refreshTokenExpiresIn);

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

          console.log(
            '이게 새로우웅우우운 토큰인데 시간이 업데이트가 안되는것인가',
            data
          );

          console.log('ususususususer', user);
          console.log('totototototken', token);
          // 새로운 토큰 정보로 업데이트
          return {
            ...token,
            id: token.id,
            accessToken: data.accessToken || data.access_token,
            expiresIn: data.expires_in,
            refreshToken:
              data.refreshToken || data.refresh_token || token.refreshToken,
            refreshTokenExpiresIn:
              data.refreshTokenExpiresIn || token.refreshTokenExpiresIn,
            error: undefined, // 이전 오류 상태 초기화
          };
        } catch (error) {
          console.error('토큰 갱신 오류:', error);
          return { ...token, error: 'RefreshTokenError' };
        }
      }

      // 4. 리프레시 토큰도 만료된 경우: 오류 상태 설정
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

  // 개발 환경에서만 디버그 모드 활성화
  debug: process.env.NODE_ENV === 'development',

  // JWT 암호화에 사용할 비밀 키
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
