"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import axios from "axios";
import { usePathname } from "next/navigation"; // App Router 사용시

// API 기본 설정
const api = axios.create({
  baseURL: "http://localhost:8080/api", // 백엔드 서버 주소
  withCredentials: true, // 쿠키를 요청에 포함
});

// 인터페이스 정의
interface User {
  id: string;
  name: string;
  email: string;
  // 기타 사용자 속성
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  checkAuthStatus: () => Promise<void>;
  logout: () => Promise<void>;
  api: typeof api;
}

interface AuthProviderProps {
  children: ReactNode;
}

// 토큰 갱신 인터셉터
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 오류이고 재시도하지 않은 요청인 경우 토큰 갱신 시도
    alert(error.response?.status);
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 토큰 갱신 요청
        await api.post("/auth/refresh");
        // 원래 요청 재시도
        return api(originalRequest);
      } catch (refreshError) {
        // 토큰 갱신 실패 시 로그인 페이지로 리다이렉트
        // window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// 인증 컨텍스트 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null); // 사용자 정보 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태

  // 현재 경로 가져오기
  const pathname = usePathname(); // App Router
  // const { pathname } = useRouter(); // Pages Router 사용시

  // 인증 체크를 건너뛸 경로들 (공개 페이지)
  const publicPaths = [
    "/login",
    "/signup",
    "/register",
    "/login-success",
    "/auth/kakao",
  ];
  const isPublicPath = publicPaths.some((path) => pathname?.startsWith(path));

  // 인증 상태 확인 함수
  const checkAuthStatus = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.get<User>("/auth/userInfo"); // 사용자 정보 요청
      setUser(response.data);
    } catch (error) {
      console.error("Authentication check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // 로그아웃 함수
  const logout = async (): Promise<void> => {
    try {
      await api.post("/auth/logout"); // 로그아웃 API 호출
      setUser(null);
      window.location.href = "/login"; // 로그아웃 후 로그인 페이지로 이동
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // 공개 경로가 아닐 때만 인증 체크 실행
  useEffect(() => {
    if (!isPublicPath) {
      checkAuthStatus();
    } else {
      // 공개 경로일 경우 로딩 상태만 해제
      setLoading(false);
    }
  }, [pathname, isPublicPath]);

  // 컨텍스트 값 제공
  const value: AuthContextType = {
    user,
    loading,
    checkAuthStatus,
    logout,
    api,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 인증 컨텍스트 훅
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { api };
