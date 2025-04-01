import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

/**
 * Next.js 미들웨어
 * 모든 페이지 요청 전에 실행되어 인증 상태를 확인합니다.
 */
export async function middleware(req: NextRequest) {
  // 현재 URL 경로
  const pathname = req.nextUrl.pathname;

  // 인증 없이 접근 가능한 공개 경로 목록
  const publicPaths = [
    '/_next',
    '/api',
    '/img',
    '/static',
    '/login',
    '/error',
    '/login/oauth2/kakao',
    '/favicon.ico',
  ];

  // 공개 경로는 인증 검사 없이 통과
  if (
    publicPaths.some((path) => pathname.startsWith(path) || pathname === path)
  ) {
    return NextResponse.next();
  }

  try {
    // NextAuth에서 JWT 토큰 가져오기
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });

    // 토큰 디버깅 로그
    console.log(`토큰 정보 (${pathname}):`, {
      hasToken: !!token,
      tokenContent: token ? JSON.stringify(token) : 'null',
      cookiesHeader: req.headers.get('cookie') || 'no cookies',
      now: new Date().toISOString(),
    });

    // 토큰이 없는 경우: 로그인 페이지로 리다이렉트
    if (!token) {
      console.log(
        `인증되지 않은 접근: ${pathname} → 로그인 페이지로 리다이렉트`
      );
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('callbackUrl', req.url);
      return NextResponse.redirect(loginUrl);
    }

    // 토큰이 있으면 페이지 접근 허용
    return NextResponse.next();
  } catch (error) {
    // 오류 처리: 로그인 페이지로 리다이렉트
    console.error('미들웨어 오류:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

// 미들웨어가 적용될 경로 패턴 설정
export const config = {
  matcher: ['/((?!_next|api|static|img|favicon.ico).*)'],
};
