import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // 정적 파일(_next) 및 API 요청 제외
  // matcher에서 제외되지 않은 요청이 middleware를 통과한 후 실행됨.
  // 특정 요청을 middleware가 가로채지 않도록 하기 위한 추가적인 필터링 역할.
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
  if (!token && req.nextUrl.pathname !== '/login') {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

//  matcher를 사용하면 middleware 실행 자체를 차단할 수 있음
export const config = {
  matcher: ['/((?!_next|api).*)'], // _next, api 경로 제외
};
