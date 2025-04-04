"use client";
import { useEffect, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

// 실제 콜백 로직을 처리하는 컴포넌트
function KakaoCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleKakaoLogin = async () => {
      if (!code) {
        setErrorMessage("카카오 인증 코드가 없습니다.");
        setTimeout(() => router.push("/login?error=nocode"), 2000);
        return;
      }

      try {
        // NextAuth의 signIn 함수를 사용하여 credentials 방식으로 로그인
        const result = await signIn("credentials", {
          // 리다이렉트 방지
          redirect: false,
          // 카카오 인증 코드를 credential로 전달
          kakaoCode: code,
          // 이 필드는 NextAuth가 이 요청을 카카오 콜백으로 인식하게 함
          isKakaoCallback: "true",
        });

        if (result?.error) {
          // 에러 메시지 파싱 시도
          try {
            const errorData = JSON.parse(result.error);
            const message = errorData.message || "로그인에 실패했습니다.";
            setErrorMessage(message);

            // 에러 코드에 따른 추가 처리
            if (errorData.code === "DUPLICATE_RESOURCE") {
              // 다른 로그인 방식으로 이미 가입된 계정
              setTimeout(() => router.push("/login?error=duplicate"), 2000);
            } else {
              setTimeout(
                () =>
                  router.push(`/login?error=${errorData.code.toLowerCase()}`),
                2000
              );
            }
          } catch {
            // JSON 파싱 실패 시 기본 에러 메시지 사용
            setErrorMessage(
              result.error || "인증 처리 중 오류가 발생했습니다."
            );
            setTimeout(() => router.push("/login?error=auth"), 2000);
          }
        } else {
          // 성공 시 홈으로 리다이렉트
          router.push("/");
        }
      } catch (error) {
        console.error("Error during Kakao login:", error);
        setErrorMessage("로그인 처리 중 오류가 발생했습니다.");
        setTimeout(() => router.push("/login?error=unknown"), 2000);
      }
    };

    handleKakaoLogin();
  }, [code, router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {errorMessage ? (
        <div className="text-red-500 mb-4 text-center">
          <p className="text-xl font-semibold">로그인 실패</p>
          <p>{errorMessage}</p>
          <p className="text-sm mt-2">잠시 후 로그인 페이지로 이동합니다...</p>
        </div>
      ) : (
        <div className="text-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              로딩 중...
            </span>
          </div>
          <p className="mt-4">카카오 로그인 처리 중...</p>
        </div>
      )}
    </div>
  );
}

// 기본 로딩 컴포넌트
function LoadingComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          로딩 중...
        </span>
      </div>
      <p className="ml-3">로그인 준비 중...</p>
    </div>
  );
}

// 주 컴포넌트
export default function KakaoCallback() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <KakaoCallbackContent />
    </Suspense>
  );
}
