'use client';

import { defaultIconColor, defaultIconSize, IconProps } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const ArrowDown = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M17.5459 21.546C16.9601 22.1318 16.0104 22.1318 15.4246 21.546L6.93931 13.0607C6.35352 12.4749 6.35352 11.5252 6.9393 10.9394C7.52509 10.3536 8.47484 10.3536 9.06063 10.9394L17.5459 19.4247C18.1317 20.0104 18.1317 20.9602 17.5459 21.546Z" />
      <path d="M15.4396 21.546C14.8538 20.9602 14.8538 20.0104 15.4396 19.4246L23.9249 10.9394C24.5107 10.3536 25.4604 10.3536 26.0462 10.9394C26.632 11.5252 26.632 12.4749 26.0462 13.0607L17.5609 21.546C16.9751 22.1318 16.0254 22.1318 15.4396 21.546Z" />
    </SvgIcon>
  );
};
