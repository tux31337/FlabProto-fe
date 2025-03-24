import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const ArrowUp = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M15.4396 10.9393C16.0254 10.3536 16.9751 10.3536 17.5609 10.9393L26.0462 19.4246C26.632 20.0104 26.632 20.9602 26.0462 21.5459C25.4604 22.1317 24.5106 22.1317 23.9248 21.5459L15.4396 13.0607C14.8538 12.4749 14.8538 11.5251 15.4396 10.9393Z" />
      <path d="M17.5459 10.9394C18.1317 11.5251 18.1317 12.4749 17.5459 13.0607L9.06061 21.546C8.47482 22.1317 7.52507 22.1317 6.93929 21.546C6.3535 20.9602 6.3535 20.0104 6.93929 19.4246L15.4246 10.9394C16.0104 10.3536 16.9601 10.3536 17.5459 10.9394Z" />
    </SvgIcon>
  );
};
