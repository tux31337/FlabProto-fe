import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

// Image is duplicated, so use MediaImage instead
export const MediaImage = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M5 6C4.44772 6 4 6.44772 4 7V24C4 24.5523 4.44772 25 5 25H27C27.5523 25 28 24.5523 28 24V7C28 6.44772 27.5523 6 27 6H5ZM11.5173 13.0967C11.6667 12.9688 11.8662 12.9677 12.0165 13.094L18.0255 18.1461L21.5271 15.1302C21.6774 15.0007 21.8788 15.0002 22.0296 15.1288L25.8157 18.3593C25.9313 18.4579 26 18.6183 26 18.7895V22.4737C26 22.7644 25.8053 23 25.5652 23H6.43478C6.19466 23 6 22.7644 6 22.4737V18.0949C6 17.9241 6.06847 17.7639 6.18365 17.6653L11.5173 13.0967ZM24 11C24 12.1046 23.1046 13 22 13C20.8954 13 20 12.1046 20 11C20 9.89543 20.8954 9 22 9C23.1046 9 24 9.89543 24 11Z" />
    </SvgIcon>
  );
};
