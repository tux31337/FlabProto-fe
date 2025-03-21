import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const SwingSizeFull = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M16 5.8C10.3667 5.8 5.8 10.3667 5.8 16C5.8 21.6333 10.3667 26.2 16 26.2C21.6333 26.2 26.2 21.6333 26.2 16C26.2 10.3667 21.6333 5.8 16 5.8ZM4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z" />
      <path d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" />
    </SvgIcon>
  );
};
