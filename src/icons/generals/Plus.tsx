import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Plus = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M14.987 10.507 L 14.987 14.987 10.507 14.987 L 6.027 14.987 6.027 16.000 L 6.027 17.013 10.507 17.013 L 14.987 17.013 14.987 21.493 L 14.987 25.973 16.000 25.973 L 17.013 25.973 17.013 21.493 L 17.013 17.013 21.493 17.013 L 25.973 17.013 25.973 16.000 L 25.973 14.987 21.493 14.987 L 17.013 14.987 17.013 10.507 L 17.013 6.027 16.000 6.027 L 14.987 6.027 14.987 10.507 " />
    </SvgIcon>
  );
};
