import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const PlayerPause = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M14 7.2H11.6C11.379 7.2 11.2 7.37909 11.2 7.6V24.4C11.2 24.6209 11.379 24.8 11.6 24.8H14C14.2209 24.8 14.4 24.6209 14.4 24.4V7.6C14.4 7.37909 14.2209 7.2 14 7.2Z" />
      <path d="M20.4 7.19997H18C17.7791 7.19997 17.6 7.37905 17.6 7.59997V24.4C17.6 24.6209 17.7791 24.8 18 24.8H20.4C20.6209 24.8 20.8 24.6209 20.8 24.4V7.59997C20.8 7.37905 20.6209 7.19997 20.4 7.19997Z" />
    </SvgIcon>
  );
};
