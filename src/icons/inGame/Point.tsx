export enum PointSize {
  md = '22',
  lg = '36',
}

export type PointProps = {
  size?: PointSize;
  className?: string;
};
export const Point = ({ size = PointSize.md, className = '' }: PointProps) => {
  return (
    <>
      {size === PointSize.md && (
        <svg
          className={className}
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2419_14420)">
            <path
              d="M4.61474 17.8852C1.08844 14.3589 1.08844 8.64161 4.61474 5.11531C8.14104 1.58902 13.8583 1.58902 17.3846 5.11531C20.9109 8.64161 20.9109 14.3589 17.3846 17.8852C13.8583 21.4115 8.14104 21.4115 4.61474 17.8852Z"
              fill="#E9B522"
            />
            <path
              d="M10.9995 22.3C16.9548 22.3 21.7998 17.4551 21.7998 11.4997C21.7998 5.54443 16.9548 0.700012 10.9995 0.700012C5.04422 0.700012 0.199263 5.54497 0.199263 11.4997C0.199263 17.4545 5.04422 22.3 10.9995 22.3ZM10.9995 2.47063C15.9783 2.47063 20.0292 6.521 20.0292 11.5003C20.0292 16.4796 15.9783 20.5299 10.9995 20.5299C6.02079 20.5299 1.96988 16.479 1.96988 11.5003C1.96988 6.52154 6.02079 2.47063 10.9995 2.47063Z"
              fill="#F7DE61"
            />
            <path
              d="M21.1412 11.4997C21.1412 5.65492 16.4739 0.880378 10.6702 0.705429C10.7796 0.702179 10.889 0.700012 10.9995 0.700012C16.9548 0.700012 21.7998 5.54497 21.7998 11.4997C21.7998 17.4545 16.9548 22.3 10.9995 22.3C10.8896 22.3 10.7796 22.2978 10.6702 22.2946C16.4733 22.1196 21.1412 17.3451 21.1412 11.4997Z"
              fill="#FFF2BD"
            />
            <path
              d="M10.9999 2.47058C11.0963 2.47058 11.1922 2.47275 11.2881 2.47546C6.44205 2.6282 2.54658 6.61736 2.54658 11.4997C2.54658 16.382 6.44205 20.3712 11.2881 20.5245C11.1922 20.5277 11.0963 20.5293 10.9999 20.5293C6.02119 20.5293 1.97028 16.4784 1.97028 11.4997C1.97028 6.52095 6.02119 2.47058 10.9999 2.47058Z"
              fill="#1A1A1A"
              fillOpacity="0.2"
            />
            <path
              d="M8.6001 15.7429V8.5H12.1513C12.9643 8.5 13.5757 8.71232 13.9855 9.13696C14.3952 9.55475 14.6001 10.1198 14.6001 10.8321C14.6001 11.5375 14.3952 12.1026 13.9855 12.5272C13.5757 12.9519 12.9643 13.1642 12.1513 13.1642H10.7074V15.7429H8.6001ZM10.7074 11.4793H11.8684C12.1155 11.4793 12.2977 11.4245 12.4147 11.315C12.5318 11.1985 12.5903 11.0376 12.5903 10.8321C12.5903 10.6266 12.5318 10.4691 12.4147 10.3595C12.2977 10.2431 12.1155 10.1849 11.8684 10.1849H10.7074V11.4793Z"
              fill="#1A1A1A"
              fillOpacity="0.2"
            />
            <path
              d="M8 15.1428V7.89996H11.5512C12.3642 7.89996 12.9756 8.11228 13.3854 8.53692C13.7951 8.95472 14 9.51976 14 10.2321C14 10.9375 13.7951 11.5026 13.3854 11.9272C12.9756 12.3518 12.3642 12.5642 11.5512 12.5642H10.1073V15.1428H8ZM10.1073 10.8793H11.2683C11.5154 10.8793 11.6976 10.8245 11.8146 10.7149C11.9317 10.5985 11.9902 10.4375 11.9902 10.2321C11.9902 10.0266 11.9317 9.86906 11.8146 9.75948C11.6976 9.64304 11.5154 9.58483 11.2683 9.58483H10.1073V10.8793Z"
              fill="#FFF5B7"
            />
          </g>
          <defs>
            <clipPath id="clip0_2419_14420">
              <rect
                width="21.6"
                height="21.6"
                fill="white"
                transform="matrix(-1 0 0 1 21.7998 0.700012)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {size === PointSize.lg && (
        <svg
          className={className}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2550_7324)">
            <path
              d="M7.35761 28.642C1.48044 22.7649 1.48044 13.2361 7.35761 7.35894C13.2348 1.48177 22.7635 1.48177 28.6407 7.35894C34.5179 13.2361 34.5179 22.7649 28.6407 28.642C22.7635 34.5192 13.2348 34.5192 7.35761 28.642Z"
              fill="#E9B522"
            />
            <path
              d="M17.9995 36C27.9251 36 36 27.9251 36 17.9995C36 8.07402 27.9251 0 17.9995 0C8.07402 0 -0.000904083 8.07493 -0.000904083 17.9995C-0.000904083 27.9242 8.07402 36 17.9995 36ZM17.9995 2.95103C26.2974 2.95103 33.049 9.70165 33.049 18.0005C33.049 26.2993 26.2974 33.0499 17.9995 33.0499C9.70165 33.0499 2.95012 26.2984 2.95012 18.0005C2.95012 9.70255 9.70165 2.95103 17.9995 2.95103Z"
              fill="#F7DE61"
            />
            <path
              d="M34.9023 17.9995C34.9023 8.25818 27.1234 0.300609 17.4507 0.00902731C17.633 0.00361092 17.8154 0 17.9995 0C27.9251 0 36 8.07493 36 17.9995C36 27.9242 27.9251 36 17.9995 36C17.8163 36 17.633 35.9964 17.4507 35.991C27.1225 35.6994 34.9023 27.7418 34.9023 17.9995Z"
              fill="#FFF2BD"
            />
            <path
              d="M17.9995 2.95105C18.1602 2.95105 18.32 2.95466 18.4798 2.95917C10.4031 3.21374 3.91063 9.86236 3.91063 17.9996C3.91063 26.1368 10.4031 32.7854 18.4798 33.0409C18.32 33.0463 18.1602 33.049 17.9995 33.049C9.70164 33.049 2.95012 26.2975 2.95012 17.9996C2.95012 9.70167 9.70164 2.95105 17.9995 2.95105Z"
              fill="#1A1A1A"
              fillOpacity="0.2"
            />
            <path
              d="M14 25.0714V13H19.9187C21.2737 13 22.2927 13.3539 22.9756 14.0616C23.6585 14.7579 24 15.6997 24 16.8868C24 18.0626 23.6585 19.0043 22.9756 19.7121C22.2927 20.4198 21.2737 20.7737 19.9187 20.7737H17.5122V25.0714H14ZM17.5122 17.9656H19.4472C19.8591 17.9656 20.1626 17.8742 20.3577 17.6916C20.5528 17.4975 20.6504 17.2293 20.6504 16.8868C20.6504 16.5444 20.5528 16.2818 20.3577 16.0992C20.1626 15.9051 19.8591 15.8081 19.4472 15.8081H17.5122V17.9656Z"
              fill="#1A1A1A"
              fillOpacity="0.2"
            />
            <path
              d="M13 24.0714V12H18.9187C20.2737 12 21.2927 12.3539 21.9756 13.0616C22.6585 13.7579 23 14.6997 23 15.8868C23 17.0626 22.6585 18.0043 21.9756 18.7121C21.2927 19.4198 20.2737 19.7737 18.9187 19.7737H16.5122V24.0714H13ZM16.5122 16.9656H18.4472C18.8591 16.9656 19.1626 16.8742 19.3577 16.6916C19.5528 16.4975 19.6504 16.2293 19.6504 15.8868C19.6504 15.5444 19.5528 15.2818 19.3577 15.0992C19.1626 14.9051 18.8591 14.8081 18.4472 14.8081H16.5122V16.9656Z"
              fill="#FFF5B7"
            />
          </g>
          <defs>
            <clipPath id="clip0_2550_7324">
              <rect
                width="36"
                height="36"
                fill="white"
                transform="matrix(-1 0 0 1 36 0)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};
