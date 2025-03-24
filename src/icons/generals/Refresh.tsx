import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Refresh = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M8 16C8 13.67 9.02 11.58 10.62 10.12L13 12.5V6.50002H7L9.2 8.70002C7.24 10.52 6 13.11 6 16C6 21.19 9.95 25.45 15 25.95V23.93C11.06 23.44 8 20.07 8 16ZM26 16C26 10.81 22.05 6.55002 17 6.05002V8.07002C20.94 8.56002 24 11.93 24 16C24 18.33 22.98 20.42 21.38 21.88L19 19.5V25.5H25L22.8 23.3C24.76 21.48 26 18.89 26 16Z" />
    </SvgIcon>
  );
};
