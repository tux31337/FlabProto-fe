"use client";
import { Button } from "@/app/_component/button/Button";
import { useState } from "react";
import OAuthScript from "./OAuthScript";

export default function KakaoButton() {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleKakaoLoad = () => {
    setIsKakaoLoaded(true);
  };

  const loginWithKakao = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK is not loaded yet");
      return;
    }

    window.Kakao.Auth.authorize({
      redirectUri: `${baseUrl}/login/oauth2/kakao`,
    });
  };

  return (
    <>
      <OAuthScript onLoad={handleKakaoLoad} />
      <Button
        onClick={loginWithKakao}
        disabled={!isKakaoLoaded}
        className="bg-[url('/img/kakao_login_medium_wide.png')] w-[300px] h-[45px] bg-no-repeat bg-cover"
      ></Button>
    </>
  );
}
