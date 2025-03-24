import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const FlagLineSolid = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M18.1647 7.58824L18.1294 7.41165C17.8489 6.00938 16.6177 5 15.1876 5H6V27H8.58824V17.9412H15.8353L15.8706 18.1178C16.1511 19.52 17.3823 20.5294 18.8124 20.5294H25.4118V7.58824H18.1647Z" />
    </SvgIcon>
  );
};
