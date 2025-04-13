'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function KakaoCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    const handleKakaoCallback = async () => {
      if (!code) {
        console.error('카카오 인증 코드가 없습니다.');
        router.push('/login');
        return;
      }

      try {
        // 카카오 인증 코드로 로그인 처리
        const response = await axios.post('/api/auth/callback/kakao', {
          code,
          isKakaoCallback: 'true'
        });

        if (response.data) {
          // 로그인 성공 시 메인 페이지로 이동
          router.push('/');
        } else {
          throw new Error('로그인 실패');
        }
      } catch (error) {
        console.error('카카오 로그인 처리 중 오류 발생:', error);
        router.push('/login');
      }
    };

    handleKakaoCallback();
  }, [code, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">카카오 로그인 처리 중...</h1>
        <p>잠시만 기다려주세요.</p>
      </div>
    </div>
  );
} 