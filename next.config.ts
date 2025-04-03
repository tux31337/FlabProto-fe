import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // 타입스크립트 오류를 경고로 처리하고 빌드 계속
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint 오류를 경고로 처리하고 빌드 계속
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
