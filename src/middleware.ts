import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// 인증 없이 접근 가능한 경로 목록
const publicPaths = [
  "/_next",
  "/api",
  "/img",
  "/static",
  "/login",
  "/error",
  "/login/oauth2/kakao",
  "/favicon.ico",
];

// 경로가 publicPaths에 포함되는지 확인하는 함수
const isPublicPath = (path: string) => {
  return publicPaths.some((publicPath) => path.startsWith(publicPath));
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 공개 경로인 경우 접근 허용
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // JWT 토큰 확인
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("token", token);

  // 1. 토큰이 없는 경우 (로그인되지 않은 경우) 로그인 페이지로 리다이렉트
  if (!token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  // 2. 토큰 에러 확인 (리프레시 토큰 만료 등)
  if (token.error) {
    console.log("토큰 에러 감지:", token.error);
    const url = new URL("/login", request.url);
    url.searchParams.set("error", token.error as string);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  // 3. 액세스 토큰 만료 확인
  if (token.expiresIn && Date.now() >= token.expiresIn) {
    // refreshToken이 없거나 만료된 경우
    if (
      !token.refreshToken ||
      (token.refreshTokenExpiresIn && Date.now() >= token.refreshTokenExpiresIn)
    ) {
      console.log("리프레시 토큰 만료 또는 없음");
      const url = new URL("/login", request.url);
      url.searchParams.set("error", "RefreshTokenExpired");
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    // 리프레시 토큰이 유효하면 next-auth가 자동으로 토큰을 갱신하므로
    // 여기서는 추가 처리가 필요 없음
    console.log("액세스 토큰 만료, 자동 갱신 예정");
  }

  // 인증된 사용자는 정상적으로 접근 허용
  return NextResponse.next();
}

// 미들웨어 적용 경로 설정 (auth 관련 API 경로 제외)
export const config = {
  matcher: "/((?!api/auth).*)",
};
