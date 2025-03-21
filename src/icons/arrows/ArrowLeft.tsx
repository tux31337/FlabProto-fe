import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const ArrowLeft = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M9.93929 15.4246L18.4246 6.93935C19.0104 6.35357 19.9601 6.35357 20.5459 6.93935C21.1317 7.52514 21.1317 8.47489 20.5459 9.06067C20.5459 9.06067 13.4285 16.178 12.0606 17.546C10.6927 18.9139 8.57137 16.7926 9.93929 15.4246Z" />
      <path d="M9.93932 15.4396C10.5251 14.8539 11.4749 14.8539 12.0606 15.4396L20.5459 23.9249C21.1317 24.5107 21.1317 25.4605 20.5459 26.0462C19.9601 26.632 19.0104 26.632 18.4246 26.0462L9.93932 17.561C9.35354 16.9752 9.35354 16.0254 9.93932 15.4396Z" />
    </SvgIcon>
  );
};
