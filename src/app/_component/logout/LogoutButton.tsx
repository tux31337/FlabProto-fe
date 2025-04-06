'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/app/_component/button/Button';
import { useState } from 'react';
import { Logout as LogoutIcon } from '@/icons/generals/Logout';

interface LogoutButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  showIcon?: boolean;
  redirectUrl?: string;
}

export default function LogoutButton({
  className = '',
  variant = 'ghost',
  showIcon = true,
  redirectUrl = '/login',
}: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      // 서버측 로그아웃 처리 (백엔드에 세션 무효화 요청)
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error('백엔드 로그아웃 요청 실패:', error);
        // 백엔드 로그아웃이 실패해도 프론트엔드 로그아웃은 계속 진행
      }

      // 클라이언트측 로그아웃 처리 (NextAuth 세션 제거)
      await signOut({
        redirect: true,
        callbackUrl: redirectUrl,
      });
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={isLoading}
      className={className}
      variant={'outline'}
    >
      {isLoading ? (
        '로그아웃 중...'
      ) : (
        <>
          {showIcon && <LogoutIcon className="w-4 h-4 mr-2" />}
          로그아웃
        </>
      )}
    </Button>
  );
}
