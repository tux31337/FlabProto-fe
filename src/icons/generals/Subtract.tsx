import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Subtract = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M6.507 16.507 L 6.507 17.493 16.507 17.493 L 26.507 17.493 26.507 16.507 L 26.507 15.520 16.507 15.520 L 6.507 15.520 6.507 16.507 " />
    </SvgIcon>
  );
};
