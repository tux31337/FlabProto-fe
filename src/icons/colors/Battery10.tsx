import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Battery10 = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path
        d="M13 2.75V3.5H8.25C7.65326 3.5 7.08096 3.73705 6.65901 4.15901C6.23705 4.58097 6 5.15326 6 5.75V27.75C6 28.3467 6.23705 28.919 6.65901 29.341C7.08096 29.7629 7.65326 30 8.25 30H23.75C24.3467 30 24.919 29.7629 25.341 29.341C25.7629 28.919 26 28.3467 26 27.75V5.75C26 5.15326 25.7629 4.58097 25.341 4.15901C24.919 3.73705 24.3467 3.5 23.75 3.5H19V2.75C19 2.55109 18.921 2.36032 18.7803 2.21967C18.6397 2.07902 18.4489 2 18.25 2H13.75C13.5511 2 13.3603 2.07902 13.2197 2.21967C13.079 2.36032 13 2.55109 13 2.75ZM23 27H9V6.5H23V27Z"
        fill="#4C4C4C"
      />
      <path
        d="M13.923 22.627C13.923 22.2117 14.0462 21.8056 14.2769 21.4603C14.5077 21.115 14.8357 20.8458 15.2194 20.6869C15.6031 20.5279 16.0254 20.4863 16.4327 20.5674C16.8401 20.6484 17.2143 20.8484 17.5079 21.1421C17.8016 21.4358 18.0016 21.81 18.0827 22.2173C18.1637 22.6247 18.1221 23.0469 17.9632 23.4306C17.8042 23.8144 17.5351 24.1423 17.1897 24.3731C16.8444 24.6038 16.4384 24.727 16.023 24.727C15.7472 24.727 15.4742 24.6727 15.2194 24.5671C14.9646 24.4616 14.7331 24.3069 14.5381 24.1119C14.3431 23.9169 14.1884 23.6854 14.0829 23.4306C13.9773 23.1759 13.923 22.9028 13.923 22.627ZM13.611 8.709H18.39L17.655 19.071H14.346L13.611 8.709Z"
        fill="#E86D6D"
      />
    </SvgIcon>
  );
};
