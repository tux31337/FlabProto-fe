'use client';

import { Button } from '@/app/_component/button/Button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function OAuthLoginButtonList() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const loginWithKakao = async() => {
    try {
      // 카카오 로그인 URL을 받아옴
      const response = await axios.get(`${baseUrl}/api/auth/test2`);
      const url  = response.data.data;
      console.log(url);
      // 받아온 URL로 리다이렉트
      window.location.href = url;
    } catch (error) {
      console.error('카카오 로그인 URL 요청 실패:', error);
    }
  };

  return (
    <div className="flex justify-center w-full items-center">
      <Button
        onClick={loginWithKakao}
        className="bg-[url('/img/kakao_login_medium_wide.png')] w-[300px] h-[45px] bg-no-repeat bg-cover"
      ></Button>
    </div>
  );
}
