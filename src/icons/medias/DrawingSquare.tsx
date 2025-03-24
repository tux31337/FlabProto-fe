import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const DrawingSquare = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M8 8V24H24V8H8ZM7 6H25C25.5523 6 26 6.44772 26 7V25C26 25.5523 25.5523 26 25 26H7C6.44772 26 6 25.5523 6 25V7C6 6.44772 6.44772 6 7 6Z" />
    </SvgIcon>
  );
};
