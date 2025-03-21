import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const FlagLine = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M17.6471 7.58824L17.1821 6.65836C16.6739 5.64201 15.6352 5 14.4988 5H6V27H8.58824V17.9412H15.0588L15.5238 18.8711C16.0319 19.8874 17.0707 20.5294 18.207 20.5294H25.4118V7.58824H17.6471ZM22.8235 17.9412H17.6471L17.1821 17.0113C16.6739 15.9949 15.6352 15.3529 14.4988 15.3529H8.58824V7.58824H15.0588L15.5238 8.51811C16.0319 9.53446 17.0707 10.1765 18.207 10.1765H22.8235V17.9412Z" />
    </SvgIcon>
  );
};
