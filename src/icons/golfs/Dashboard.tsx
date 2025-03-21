import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Dashboard = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8H12V16V18V26H7C5.89543 26 5 25.1046 5 24V10C5 8.89543 5.89543 8 7 8ZM14 18V26H25C26.1046 26 27 25.1046 27 24V18H14ZM27 16V10C27 8.89543 26.1046 8 25 8H14V16H27Z"
      />
    </SvgIcon>
  );
};
