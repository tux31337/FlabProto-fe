import {
  defaultIconColor,
  defaultIconSize,
  defaultIconViewbox,
  IconProps,
} from '../constants';
import { SvgIcon } from '../SvgIcon';

export const HomeNotification = ({
  size = defaultIconSize,
  color = defaultIconColor,
  viewBox = defaultIconViewbox,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className} viewBox={viewBox}>
      <path
        d="M13.7308 19.1538C13.7308 20.1692 12.9 21 11.8846 21C10.86 21 10.0385 20.1692 10.0385 19.1538M17.4231 15.4615V10.8462C17.4231 8.01231 15.9092 5.64 13.2692 5.01231V4.38462C13.2692 3.61846 12.6508 3 11.8846 3C11.1185 3 10.5 3.61846 10.5 4.38462V5.01231C7.85077 5.64 6.34615 8.00308 6.34615 10.8462V15.4615L4.5 17.3077V18.2308H19.2692V17.3077L17.4231 15.4615Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
