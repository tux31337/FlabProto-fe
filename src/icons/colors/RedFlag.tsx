import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const RedFlag = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path
        d="M10 7.55701H21.953L19.744 11.402L21.953 15.247H10"
        fill="url(#paint0_linear_625_6363)"
      />
      <path
        d="M10 7.55701H21.953L19.744 11.402L21.953 15.247H10"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.55701H21.953L19.744 11.402L21.953 15.247H10"
        fill="url(#paint1_linear_625_6363)"
      />
      <path
        d="M10 6C10.2652 6 10.5196 6.10536 10.7071 6.29289C10.8946 6.48043 11 6.73478 11 7V28H9V7C9 6.73478 9.10536 6.48043 9.29289 6.29289C9.48043 6.10536 9.73478 6 10 6Z"
        fill="black"
      />
      <linearGradient
        id="paint0_linear_625_6363"
        x1="10"
        y1="10.1562"
        x2="21.9481"
        y2="10.4719"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB3223" />
        <stop offset="1" stopColor="#A0271B" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_625_6363"
        x1="10"
        y1="10.1562"
        x2="21.9481"
        y2="10.4719"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB3223" />
        <stop offset="0.236" stopColor="#E77B69" />
        <stop offset="0.532" stopColor="#DE3C2E" />
        <stop offset="1" stopColor="#DC3123" />
      </linearGradient>
    </SvgIcon>
  );
};
