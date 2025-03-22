/**
 * Next.js API Route: [...nextauth]/route.ts
 *
 * 이 파일은 Next.js의 App Router에서 NextAuth.js 인증 API 엔드포인트를 설정합니다.
 * 파일 경로 [...]는 동적 경로 세그먼트로, NextAuth가 여러 엔드포인트(/api/auth/signin, /api/auth/callback 등)를 처리할 수 있게 합니다.
 *
 * 실행 시점:
 * 1. 사용자가 로그인 페이지에서 로그인 폼을 제출할 때
 * 2. 세션 검증이 필요할 때 (페이지 로드, 보호된 라우트 접근 시)
 * 3. 로그아웃 요청 시
 */

import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface User {
    refreshToken?: string; // JWT를 위한 token 속성 추가
    accessToken?: string;
    expiredAt?: number;
  }

  interface Session {
    user: User;
  }
}

/**
 * NextAuth 설정 객체
 * 인증 관련 모든 설정을 포함하며, 미들웨어나 다른 컴포넌트에서 재사용할 수 있습니다.
 */
export const authOptions: AuthOptions = {
  /**
   * 인증 제공자 설정
   * 여러 인증 방식(OAuth, Email, Credentials 등)을 배열로 설정할 수 있습니다.
   * 현재는 이메일/비밀번호 기반의 Credentials 제공자만 사용합니다.
   */
  providers: [
    CredentialsProvider({
      // 제공자 이름 (UI에 표시됨)
      name: 'Credentials',

      // 로그인 폼에서 수집할 필드 정의
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      /**
       * authorize 함수: 사용자 인증 로직
       * 실행 시점: 사용자가 로그인 폼을 제출할 때 자동으로 호출됩니다.
       *
       * @param credentials - 로그인 폼에서 제출된 사용자 입력값
       * @returns 인증 성공 시 사용자 객체, 실패 시 null
       *
       * 참고: 실제 환경에서는 데이터베이스 조회나 외부 API 호출로 사용자를 검증해야 합니다.
       */
      async authorize(credentials) {
        console.log('credentials', credentials);

        // 하드코딩된 사용자 정보로 인증 (데모용)
        if (
          credentials?.email === 'user@example.com' &&
          credentials?.password === 'password'
        ) {
          return {
            id: '1',
            name: 'User',
            email: 'user@example.com',
          }; // 인증 성공 시 반환할 사용자 정보
        }
        return null; // 인증 실패
      },
    }),
  ],

  /**
   * 세션 설정
   * 세션 관리 방식과 유효 기간을 정의합니다.
   */
  session: {
    strategy: 'jwt',
  },

  /**
   * 콜백 함수들
   * NextAuth의 다양한 이벤트에 대한 핸들러를 정의합니다.
   */
  callbacks: {
    /**
     * redirect 콜백: 인증 후 리다이렉트 처리
     * 실행 시점: 로그인 성공/실패 후, 로그아웃 후 등 리다이렉트가 필요할 때
     *
     * @param url - 리다이렉트할 URL
     * @param baseUrl - 애플리케이션 기본 URL
     * @returns 최종 리다이렉트 URL
     */
    async redirect({ url, baseUrl }) {
      // 외부 URL로의 리다이렉트 방지 (보안 목적)
      if (!url.startsWith(baseUrl)) {
        return baseUrl + '/login'; // 로그인 페이지로 리다이렉트
      }
      return url;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.expiredAt;
      }

      if (user.expiredAt) {
        if (Date.now() < user.expiredAt) {
          return token;
        }
      }

      // 토큰 갱신로직 필요.
      return token;
    },

    // 필요에 따라 session, jwt 등의 추가 콜백을 구현할 수 있습니다.
  },

  /**
   * 커스텀 페이지 경로
   * NextAuth 기본 페이지 대신 사용할 커스텀 페이지 경로를 지정합니다.
   */
  pages: {
    signIn: '/login', // 로그인 페이지 경로
    error: '/error', // 인증 오류 페이지 경로
  },

  /**
   * JWT 암호화에 사용할 비밀 키
   * 환경 변수에서 가져오며, 반드시 안전하게 관리해야 합니다.
   */
  secret: process.env.NEXTAUTH_SECRET,
};

/**
 * Next.js App Router API 핸들러
 * GET과 POST 요청을 모두 처리하는 NextAuth 핸들러를 생성합니다.
 *
 * 실행 시점:
 * - GET: 세션 정보 조회, 로그인 페이지 접근, 콜백 처리 등
 * - POST: 로그인 요청, 로그아웃 요청 등
 */
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
