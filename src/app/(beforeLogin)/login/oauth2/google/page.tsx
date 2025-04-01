"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function GooglePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  console.log("code", code);

  return (
    <div className="flex justify-center items-center h-screen">
      로그인 처리 중...
    </div>
  );
}
