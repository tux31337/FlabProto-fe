import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Time = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M16 6.05714C10.5087 6.05714 6.05714 10.5087 6.05714 16C6.05714 21.4913 10.5087 25.9429 16 25.9429C21.4913 25.9429 25.9429 21.4913 25.9429 16C25.9429 10.5087 21.4913 6.05714 16 6.05714ZM4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z" />
      <path d="M16.6857 9.48575C17.2537 9.48575 17.7142 9.94626 17.7142 10.5143V14.6286H21.8285C22.3966 14.6286 22.8571 15.0891 22.8571 15.6572C22.8571 16.2252 22.3966 16.6857 21.8285 16.6857H15.6571V10.5143C15.6571 9.94626 16.1176 9.48575 16.6857 9.48575Z" />
    </SvgIcon>
  );
};
