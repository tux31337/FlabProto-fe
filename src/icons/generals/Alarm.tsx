import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Alarm = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M15.8462 28C17.2 28 18.3077 26.8923 18.3077 25.5385H13.3846C13.3846 26.8923 14.48 28 15.8462 28ZM23.2308 20.6154V14.4615C23.2308 10.6831 21.2123 7.52 17.6923 6.68308V5.84615C17.6923 4.82462 16.8677 4 15.8462 4C14.8246 4 14 4.82462 14 5.84615V6.68308C10.4677 7.52 8.46154 10.6708 8.46154 14.4615V20.6154L6 23.0769V24.3077H25.6923V23.0769L23.2308 20.6154Z" />
    </SvgIcon>
  );
};
