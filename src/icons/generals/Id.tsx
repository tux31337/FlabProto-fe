import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Id = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M16.5 15C19.5376 15 22 12.5376 22 9.5C22 6.46243 19.5376 4 16.5 4C13.4624 4 11 6.46243 11 9.5C11 12.5376 13.4624 15 16.5 15Z" />
      <path d="M9.00001 27V20.902C8.99907 20.2591 9.12766 19.6223 9.37843 19.028C9.62921 18.4337 9.99726 17.8935 10.4616 17.4383C10.9259 16.9831 11.4773 16.6218 12.0845 16.375C12.6916 16.1282 13.3425 16.0008 14 16H19C19.6575 16.0008 20.3084 16.1282 20.9155 16.375C21.5227 16.6218 22.0741 16.9831 22.5384 17.4383C23.0027 17.8935 23.3708 18.4337 23.6216 19.028C23.8723 19.6223 24.0009 20.2591 24 20.902V27" />
    </SvgIcon>
  );
};
