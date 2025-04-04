import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// NextAuth 타입 확장
declare module "next-auth" {
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

declare module "next-auth/jwt" {
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const responseData = await response.json();

    if (!response.ok || responseData.status === "error") {
      console.error(`인증 실패: ${response.status}`);
      console.error("에러 메시지:", responseData.message);
      console.error("에러 상세:", responseData.error);
      return null;
    }

    const data = responseData.data || responseData;

    return {
      id: data.user_id || "1",
      name: data.name || "User",
      email: data.email || "",
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      refreshTokenExpiresIn: data.refresh_token_expires_in,
    };
  } catch (error) {
    console.error("인증 오류:", error);
    return null;
  }
}

// 토큰 갱신 함수
async function refreshAccessToken(token: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: token.refreshToken }),
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error(`토큰 갱신 실패: ${response.status}`);
    }

    const data = await response.json();

    // 만료 시간 계산 함수
    const calculateExpiryTime = (expiresIn: number) => {
      return expiresIn * 1000 > Date.now()
        ? expiresIn
        : Date.now() + expiresIn * 1000;
    };

    // 새로운 토큰 정보로 업데이트
    return {
      ...token,
      accessToken: data.access_token,
      expiresIn:
        typeof data.expires_in === "number"
          ? calculateExpiryTime(data.expires_in)
          : Date.now() + 30 * 60 * 1000, // 기본값 30분
      refreshToken: data.refresh_token || token.refreshToken,
      refreshTokenExpiresIn:
        typeof data.refresh_token_expires_in === "number"
          ? calculateExpiryTime(data.refresh_token_expires_in)
          : Date.now() + 7 * 24 * 60 * 60 * 1000, // 기본값 7일
      error: undefined, // 오류 상태 초기화
    };
  } catch (error) {
    console.error("토큰 갱신 오류:", error);
    return { ...token, error: "RefreshTokenError" };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        kakaoCode: { label: "Kakao Code", type: "text" },
        isKakaoCallback: { label: "Is Kakao Callback", type: "text" },
      },

      async authorize(credentials) {
        // 카카오 로그인 처리
        if (credentials?.isKakaoCallback === "true" && credentials.kakaoCode) {
          return handleAuthentication("/api/auth/kakao", {
            code: credentials.kakaoCode,
          });
        }

        // 일반 이메일/비밀번호 로그인 처리
        if (credentials?.email && credentials?.password) {
          return handleAuthentication("/api/auth/login", {
            email: credentials.email,
            password: credentials.password,
          });
        }

        return null; // 인증 실패
      },
    }),
  ],

  session: {
    strategy: "jwt",
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
        return token;
      }

      // 3. 액세스 토큰 만료 + 리프레시 토큰 유효
      if (
        token.refreshToken &&
        token.refreshTokenExpiresIn &&
        Date.now() < token.refreshTokenExpiresIn
      ) {
        return refreshAccessToken(token);
      }

      // 4. 리프레시 토큰도 만료된 경우
      console.log("리프레시 토큰 만료: 재로그인 필요");
      return { ...token, error: "RefreshTokenExpired" };
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
    signIn: "/login",
    error: "/error",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
