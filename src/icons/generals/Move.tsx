import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Move = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M24 24V18.452H26V25C26 25.5523 25.5523 26 25 26L7 26C6.44772 26 6 25.5523 6 25V7C6 6.44771 6.44772 6 7 6H13.592L13.592 8L8 8L8 24L24 24ZM22.59 8H18V6H25C25.5523 6 26 6.44772 26 7V14H24V9.41L16.41 17L15 15.59L22.59 8Z" />
    </SvgIcon>
  );
};
