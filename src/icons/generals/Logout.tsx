import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Logout = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M21.7619 9.94444L20.1952 11.5111L23.0619 14.3889H14.619V16.6111H23.0619L20.1952 19.4778L21.7619 21.0556L27.3175 15.5L21.7619 9.94444ZM9.22222 7.72222H18.1111V5.5H9.22222C8 5.5 7 6.5 7 7.72222V23.2778C7 24.5 8 25.5 9.22222 25.5H18.1111V23.2778H9.22222V7.72222Z" />
    </SvgIcon>
  );
};
