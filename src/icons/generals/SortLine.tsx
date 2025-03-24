import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const SortLine = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M14.1667 23H18.8333V20.6667H14.1667V23ZM6 9V11.3333H27V9H6ZM9.5 17.1667H23.5V14.8333H9.5V17.1667Z" />
    </SvgIcon>
  );
};
