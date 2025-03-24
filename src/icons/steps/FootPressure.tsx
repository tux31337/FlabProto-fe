import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const FootPressure = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M18.3721 7.00049H25.6281C25.7215 6.99557 25.8131 7.02784 25.8828 7.09024C25.9525 7.15264 25.9947 7.24009 26.0001 7.33349V9.66749C25.9947 9.76089 25.9525 9.84834 25.8828 9.91074C25.8131 9.97313 25.7215 10.0054 25.6281 10.0005H18.3721C18.2787 10.0054 18.1871 9.97313 18.1174 9.91074C18.0477 9.84834 18.0055 9.76089 18.0001 9.66749V7.33349C18.0055 7.24009 18.0477 7.15264 18.1174 7.09024C18.1871 7.02784 18.2787 6.99557 18.3721 7.00049ZM25.6281 12.0005H18.3721C18.2787 11.9956 18.1871 12.0278 18.1174 12.0902C18.0477 12.1526 18.0055 12.2401 18.0001 12.3335V14.6675C18.0055 14.7609 18.0477 14.8483 18.1174 14.9107C18.1871 14.9731 18.2787 15.0054 18.3721 15.0005H25.6281C25.7215 15.0054 25.8131 14.9731 25.8828 14.9107C25.9525 14.8483 25.9947 14.7609 26.0001 14.6675V12.3335C25.9947 12.2401 25.9525 12.1526 25.8828 12.0902C25.8131 12.0278 25.7215 11.9956 25.6281 12.0005ZM18.3721 17.0005H25.6281C25.7215 16.9956 25.8131 17.0278 25.8828 17.0902C25.9525 17.1526 25.9947 17.2401 26.0001 17.3335V19.6675C25.9947 19.7609 25.9525 19.8483 25.8828 19.9107C25.8131 19.9731 25.7215 20.0054 25.6281 20.0005H18.3721C18.2787 20.0054 18.1871 19.9731 18.1174 19.9107C18.0477 19.8483 18.0055 19.7609 18.0001 19.6675V17.3335C18.0055 17.2401 18.0477 17.1526 18.1174 17.0902C18.1871 17.0278 18.2787 16.9956 18.3721 17.0005ZM18.3721 22.0005H25.6281C25.7215 21.9956 25.8131 22.0278 25.8828 22.0902C25.9525 22.1526 25.9947 22.2401 26.0001 22.3335V24.6675C25.9947 24.7609 25.9525 24.8483 25.8828 24.9107C25.8131 24.9731 25.7215 25.0054 25.6281 25.0005H18.3721C18.2787 25.0054 18.1871 24.9731 18.1174 24.9107C18.0477 24.8483 18.0055 24.7609 18.0001 24.6675V22.3335C18.0055 22.2401 18.0477 22.1526 18.1174 22.0902C18.1871 22.0278 18.2787 21.9956 18.3721 22.0005ZM12.7761 18.5145C13.4058 16.529 13.5451 14.4206 13.1821 12.3695C12.4731 8.44049 10.5711 6.68149 8.5371 7.04749C6.5031 7.41349 5.5201 10.4765 6.2291 14.4005C6.50678 16.3535 7.18275 18.2286 8.2151 19.9095L12.7761 18.5145ZM11.9071 20.2565L9.40007 21.0265L8.70007 21.2405C9.42107 24.6595 10.9881 26.1715 12.7211 25.7015C14.5001 25.2255 15.1921 22.7255 13.4881 19.7715L11.9071 20.2565Z" />
    </SvgIcon>
  );
};
