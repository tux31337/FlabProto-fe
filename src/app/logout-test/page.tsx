'use client';

import { useSession } from 'next-auth/react';
import LogoutButton from '@/app/_component/logout/LogoutButton';

export default function LogoutTestPage() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold">로그아웃 테스트</h1>
        
        <div className="mb-6 p-4 bg-gray-100 rounded-md">
          <h2 className="mb-2 text-lg font-semibold">세션 상태</h2>
          {status === 'loading' ? (
            <p>로딩 중...</p>
          ) : status === 'authenticated' ? (
            <div>
              <p className="text-green-600 font-medium">인증됨</p>
              <p>사용자: {session?.user?.name || '이름 없음'}</p>
              <p>이메일: {session?.user?.email || '이메일 없음'}</p>
            </div>
          ) : (
            <p className="text-red-600 font-medium">인증되지 않음</p>
          )}
        </div>
        
        {status === 'authenticated' && (
          <div className="flex justify-center">
            <LogoutButton variant="primary" />
          </div>
        )}

        {status === 'unauthenticated' && (
          <div className="flex justify-center">
            <a 
              href="/login" 
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              로그인 페이지로 이동
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
