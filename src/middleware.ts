import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// 인증 없이 접근 가능한 경로 목록
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

// 경로가 publicPaths에 포함되는지 확인하는 함수
const isPublicPath = (path: string) => {
  return publicPaths.some((publicPath) => path.startsWith(publicPath));
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
    cookieName: "next-auth.session-token",
  });

  console.log('sstokentokenssssesion', token);

  // 공개 경로인 경우 접근 허용
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // JWT 토큰 확인

  console.log('token', token);

  // 토큰이 없는 경우 (로그인되지 않은 경우) 로그인 페이지로 리다이렉트
  if (!token) {
    // 현재 URL을 callbackUrl로 저장하여 로그인 후 돌아올 수 있게 함
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  // 인증된 사용자는 정상적으로 접근 허용
  return NextResponse.next();
}

// 모든 경로에 미들웨어 적용
export const config = {
  matcher: '/((?!api/auth).*)',
};
