import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const SwingSize1To2 = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M16 5.8C10.3667 5.8 5.8 10.3667 5.8 16C5.8 21.6333 10.3667 26.2 16 26.2C21.6333 26.2 26.2 21.6333 26.2 16C26.2 10.3667 21.6333 5.8 16 5.8ZM4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z" />
      <path d="M16.0028 8C18.1246 8 20.1594 8.84285 21.6597 10.3431C23.16 11.8434 24.0028 13.8783 24.0028 16C24.0028 18.1217 23.16 20.1566 21.6597 21.6569C20.1594 23.1571 18.1246 24 16.0028 24C16.0615 23.9339 15.9847 8.0608 16.0028 8Z" />
    </SvgIcon>
  );
};
