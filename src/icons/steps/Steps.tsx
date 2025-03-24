import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Steps = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M7 24V21.3333H16.3333V24H7ZM7 17.3333V14.6667H25.6667V17.3333H7ZM7 10.6667V8H25.6667V10.6667H7Z" />
    </SvgIcon>
  );
};
