import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const DrawingAngle = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path
        fillRule="evenodd"
        d="M20.6397 9.69323C21.0222 9.2942 21.0087 8.6607 20.6097 8.27826C20.2107 7.89582 19.5772 7.90927 19.1947 8.30829L5.27828 22.8282C5.00088 23.1176 4.92298 23.5446 5.08032 23.9134C5.23766 24.2821 5.59987 24.5214 6.00077 24.5214L25.9992 24.5215C26.5519 24.5215 27 24.0734 27 23.5207C27 22.968 26.552 22.52 25.9992 22.52L14.1545 22.5199C14.2642 21.5526 14.045 20.5709 13.524 19.7372C13.1969 19.2136 12.7651 18.7714 12.2619 18.4343L20.6397 9.69323ZM10.8365 19.9215L8.34612 22.5199L12.1289 22.5199C12.2555 21.9289 12.1475 21.3112 11.8267 20.7978C11.5864 20.4133 11.2412 20.1104 10.8365 19.9215Z"
      />
    </SvgIcon>
  );
};
