export const Report = () => {
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
        fill="url(#paint0_radial_693_15400)"
        fillOpacity="0.5"
      />
      <g filter="url(#filter0_d_693_15400)">
        <path
          d="M30 36V26H34V36H30ZM22 36V12H26V36H22ZM14 36V20H18V36H14Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_693_15400"
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
            result="effect1_dropShadow_693_15400"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_693_15400"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_693_15400"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24 24) rotate(90) scale(24)"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
