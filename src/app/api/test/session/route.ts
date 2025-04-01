import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    // 쿠키 정보 확인 (보안상 민감한 정보는 제외하고 출력)
    const cookiesData = {
      hasCookies: true,
      // 실제 서비스에서는 이렇게 쿠키 정보를 노출하지 마세요 (테스트용으로만 사용)
      cookieCount: 'cookies would be here',
    };
    
    return NextResponse.json({
      authenticated: !!session,
      session,
      cookies: cookiesData,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      error: "세션 정보를 가져오는 중 오류가 발생했습니다.",
      message: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}
