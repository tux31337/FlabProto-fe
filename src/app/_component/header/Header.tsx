'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import LogoutButton from '@/app/_component/logout/LogoutButton';

export default function Header({ initialSession }: { initialSession?: boolean } = {}) {
  const { data: session, status } = useSession();
  // 로딩 중일 때는 서버에서 전달받은 초기 세션 사용, 그 외에는 클라이언트 상태 사용
  const isAuthenticated = status === 'loading' ? initialSession : status === 'authenticated';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* 로고 */}
        <Link href="/" className="font-bold text-xl">
          FlabProto
        </Link>

        {/* 네비게이션 링크 */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            홈
          </Link>
          {isAuthenticated && (
            <>
              <Link href="/dashboard" className="hover:text-blue-600 transition-colors">
                대시보드
              </Link>
              <Link href="/profile" className="hover:text-blue-600 transition-colors">
                프로필
              </Link>
            </>
          )}
        </nav>

        {/* 사용자 메뉴 */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <span className="text-sm font-medium">
                  {session?.user?.name || session?.user?.email}
                </span>
              </div>
              <LogoutButton showIcon />
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
