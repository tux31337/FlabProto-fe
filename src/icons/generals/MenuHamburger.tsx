import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const MenuHamburger = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <rect x="7" y="10" width="18" height="2" />
      <rect x="7" y="15" width="18" height="2" />
      <rect x="7" y="20" width="18" height="2" />
    </SvgIcon>
  );
};
