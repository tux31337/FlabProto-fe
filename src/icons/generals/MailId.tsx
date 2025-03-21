import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const MailId = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M24.183 7.417H7.817C7.27585 7.41885 6.75755 7.63533 6.37584 8.01891C5.99413 8.4025 5.7802 8.92185 5.781 9.463L5.771 21.737C5.77258 22.2791 5.98865 22.7986 6.372 23.182C6.75536 23.5653 7.27485 23.7814 7.817 23.783H24.183C24.7251 23.7814 25.2446 23.5653 25.628 23.182C26.0113 22.7986 26.2274 22.2791 26.229 21.737V9.463C26.2274 8.92085 26.0113 8.40136 25.628 8.01801C25.2446 7.63465 24.7251 7.41858 24.183 7.417ZM24.183 11.509L16 16.623L7.817 11.509V9.463L16 14.577L24.183 9.463V11.509Z" />
    </SvgIcon>
  );
};
