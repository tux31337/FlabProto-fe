import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Graph = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M22 28V18H26V28H22ZM14 28V4H18V28H14ZM6 28V12H10V28H6Z" />
    </SvgIcon>
  );
};
