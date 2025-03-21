import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const X = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M8.70711 7.29289L24.7061 23.2919L23.2919 24.7061L7.29289 8.70711L8.70711 7.29289Z" />
      <path d="M24.7071 8.70711L8.70809 24.7061L7.29388 23.2919L23.2929 7.29289L24.7071 8.70711Z" />
    </SvgIcon>
  );
};
