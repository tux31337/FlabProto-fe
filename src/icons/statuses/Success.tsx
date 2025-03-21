import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Success = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path
        fillRule="evenodd"
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM22.7204 12.5884C23.0932 12.225 23.0932 11.6359 22.7204 11.2725C22.3476 10.9092 21.7433 10.9092 21.3705 11.2725L14.0909 18.3683L10.6295 14.9943C10.2567 14.6309 9.65235 14.6309 9.27958 14.9943C8.90681 15.3577 8.90681 15.9468 9.27958 16.3101L14.0909 21L22.7204 12.5884Z"
      />
    </SvgIcon>
  );
};
