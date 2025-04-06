import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(request: Request) {
  try {
    // 현재 세션 정보 가져오기
    const session = await getServerSession(authOptions);

    // 세션이 없으면 이미 로그아웃된 상태
    if (!session) {
      return NextResponse.json({ 
        status: 'success', 
        message: '이미 로그아웃된 상태입니다.' 
      });
    }

    // 백엔드 로그아웃 API 호출 (액세스 토큰과 리프레시 토큰 무효화)
    if (session.user.accessToken) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.user.accessToken}`
            },
            body: JSON.stringify({
              refreshToken: session.user.refreshToken
            })
          }
        );

        if (!response.ok) {
          console.error(`백엔드 로그아웃 실패: ${response.status}`);
          // 오류가 발생해도 계속 진행 (프론트엔드 세션은 삭제)
        }
      } catch (error) {
        console.error('백엔드 로그아웃 API 호출 오류:', error);
        // 오류가 발생해도 계속 진행 (프론트엔드 세션은 삭제)
      }
    }

    // 성공 응답
    return NextResponse.json({ 
      status: 'success', 
      message: '로그아웃 성공' 
    });
  } catch (error) {
    console.error('로그아웃 처리 중 오류:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: '로그아웃 처리 중 오류가 발생했습니다.' 
      },
      { status: 500 }
    );
  }
}
