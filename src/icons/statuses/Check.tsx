import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Check = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M27.0607 8.93934C27.6464 9.52513 27.6464 10.4749 27.0607 11.0607L13.5 24.6213L5.93934 17.0607C5.35355 16.4749 5.35355 15.5251 5.93934 14.9393C6.52513 14.3536 7.47487 14.3536 8.06066 14.9393L13.5 20.3787L24.9393 8.93934C25.5251 8.35355 26.4749 8.35355 27.0607 8.93934Z" />
    </SvgIcon>
  );
};
