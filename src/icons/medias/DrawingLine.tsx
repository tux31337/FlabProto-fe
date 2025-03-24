import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const DrawingLine = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M24.7071 7.2929C25.0976 7.68342 25.0976 8.31659 24.7071 8.70711L7.73654 25.6777C7.34602 26.0682 6.71286 26.0682 6.32233 25.6777C5.93181 25.2872 5.93181 24.654 6.32233 24.2635L23.2929 7.2929C23.6834 6.90238 24.3166 6.90238 24.7071 7.2929Z" />
    </SvgIcon>
  );
};
