export const Map = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.5"
        cx="24"
        cy="24"
        r="24"
        fill="url(#paint0_radial_693_15399)"
        fillOpacity="0.5"
      />
      <g filter="url(#filter0_d_693_15399)">
        <g clipPath="url(#clip0_693_15399)">
          <path
            d="M35.375 29C35.7458 29 36.1084 29.11 36.4167 29.316C36.725 29.522 36.9654 29.8149 37.1073 30.1575C37.2492 30.5001 37.2863 30.8771 37.214 31.2408C37.1416 31.6045 36.963 31.9386 36.7008 32.2008C36.4386 32.463 36.1045 32.6416 35.7408 32.714C35.3771 32.7863 35.0001 32.7492 34.6575 32.6073C34.3149 32.4654 34.022 32.225 33.816 31.9167C33.61 31.6084 33.5 31.2458 33.5 30.875C33.5 30.3777 33.6975 29.9008 34.0492 29.5492C34.4008 29.1975 34.8777 29 35.375 29ZM32.25 16.9L24.75 20.75V29.037C28.3 29.237 31 30.249 31 31.5C31 32.875 27.638 34 23.5 34C19.362 34 16 32.874 16 31.5C16 30.575 17.512 29.775 19.75 29.337V31.5H22.25V12L32.25 16.9Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_693_15399"
          x="4"
          y="5"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_693_15399"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_693_15399"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_693_15399"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24 24) rotate(90) scale(24)"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_693_15399">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
