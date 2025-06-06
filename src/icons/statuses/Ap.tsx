import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';
import { useId } from 'react';

export const Ap = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  const id = useId();
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M5.52098 21L10.141 11.13H12.241L16.889 21H14.299L13.109 18.284L14.103 18.998H8.30698L9.28698 18.284L8.11098 21H5.52098ZM11.177 13.79L9.53898 17.696L9.14698 17.038H13.249L12.899 17.696L11.247 13.79H11.177ZM17.4987 21V11.13H22.3427C23.4814 11.13 24.3401 11.41 24.9187 11.97C25.4974 12.5207 25.7867 13.272 25.7867 14.224C25.7867 15.1667 25.4974 15.918 24.9187 16.478C24.3401 17.038 23.4814 17.318 22.3427 17.318H20.0887V21H17.4987ZM20.0887 15.33H22.0067C22.4454 15.33 22.7721 15.2367 22.9867 15.05C23.2014 14.854 23.3087 14.5787 23.3087 14.224C23.3087 13.8693 23.2014 13.594 22.9867 13.398C22.7721 13.202 22.4454 13.104 22.0067 13.104H20.0887V15.33Z" />
    </SvgIcon>
  );
};
