import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const FlightStraight = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M14.467 4.880 C 13.579 6.655,12.853 8.119,12.853 8.133 C 12.853 8.148,13.393 8.160,14.053 8.160 L 15.253 8.160 15.253 17.708 C 15.253 28.093,15.236 27.508,15.546 27.711 C 15.641 27.773,15.793 27.804,16.000 27.804 C 16.207 27.804,16.359 27.773,16.454 27.711 C 16.764 27.508,16.747 28.093,16.747 17.708 L 16.747 8.160 18.027 8.160 C 18.731 8.160,19.305 8.142,19.304 8.120 C 19.302 8.098,18.576 6.634,17.690 4.867 L 16.080 1.653 14.467 4.880 " />
    </SvgIcon>
  );
};
