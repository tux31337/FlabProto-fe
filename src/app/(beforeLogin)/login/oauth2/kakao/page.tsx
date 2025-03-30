'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { signIn } from 'next-auth/react';

export default function KakaoCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    const handleKakaoLogin = async () => {
      if (!code) {
        router.push('/login?error=nocode');
        return;
      }

      try {
        // NextAuth의 signIn 함수를 사용하여 credentials 방식으로 로그인
        // 여기서는 특별한 provider인 "kakao-callback"을 사용
        const result = await signIn('credentials', {
          // 리다이렉트 방지
          redirect: false,
          // 카카오 인증 코드를 credential로 전달
          kakaoCode: code,
          // 이 필드는 NextAuth가 이 요청을 카카오 콜백으로 인식하게 함
          isKakaoCallback: 'true',
        });

        if (result?.error) {
          console.error('Login error:', result.error);
          router.push('/login?error=auth');
        } else {
          // 성공 시 홈으로 리다이렉트
          router.push('/');
        }
      } catch (error) {
        console.error('Error during Kakao login:', error);
        router.push('/login?error=unknown');
      }
    };

    handleKakaoLogin();
  }, [code, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      로그인 처리 중...
    </div>
  );
}
