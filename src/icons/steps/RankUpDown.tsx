import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const RankUpDown = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M21 14L16 8L11 14L21 14ZM11 18L16 24L21 18H11Z" />
    </SvgIcon>
  );
};
