import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Close = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M6.93934 6.93934C7.52513 6.35355 8.47487 6.35355 9.06066 6.93934L25.0607 22.9393C25.6464 23.5251 25.6464 24.4749 25.0607 25.0607C24.4749 25.6464 23.5251 25.6464 22.9393 25.0607L6.93934 9.06066C6.35355 8.47487 6.35355 7.52513 6.93934 6.93934Z" />
      <path d="M6.93932 25.0607C6.35354 24.4749 6.35354 23.5251 6.93932 22.9393L22.9393 6.93934C23.5251 6.35356 24.4749 6.35356 25.0606 6.93934C25.6464 7.52513 25.6464 8.47488 25.0606 9.06066L9.06064 25.0607C8.47486 25.6464 7.52511 25.6464 6.93932 25.0607Z" />
    </SvgIcon>
  );
};
