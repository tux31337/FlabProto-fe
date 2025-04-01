import GoogleButton from "./GoogleButton";
import KakaoButton from "./KakaoButton";

export default function OAuthLoginButtonList() {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-4">
      <KakaoButton />
      <GoogleButton />
    </div>
  );
}
