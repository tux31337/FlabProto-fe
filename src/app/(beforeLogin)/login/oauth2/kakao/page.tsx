'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function KakaoCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (code) {
      fetch(`${apiUrl}/api/auth/kakao`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          // 받은 JWT 토큰 저장
          localStorage.setItem('token', data.token);
          router.push('/'); // 홈으로 리다이렉트
        })
        .catch((error) => console.error('Error:', error));
    }
  }, [code, router]);

  return <p>로그인 처리 중...</p>;
}
