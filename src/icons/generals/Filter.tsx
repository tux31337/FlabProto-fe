import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Filter = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M11.983 7.043 C 11.138 7.141,10.333 7.534,9.713 8.150 C 9.272 8.589,8.988 9.016,8.766 9.573 L 8.596 10.000 7.312 10.014 L 6.027 10.029 6.027 11.014 L 6.027 12.000 7.325 12.000 L 8.623 12.000 8.690 12.227 C 8.849 12.765,9.185 13.295,9.678 13.791 C 10.457 14.573,11.209 14.915,12.267 14.971 C 13.212 15.020,13.964 14.822,14.706 14.329 C 15.399 13.869,16.020 13.076,16.272 12.330 L 16.383 12.000 21.178 12.000 L 25.973 12.000 25.973 11.013 L 25.973 10.027 21.175 10.027 L 16.377 10.027 16.317 9.802 C 16.222 9.448,15.924 8.899,15.628 8.530 C 14.922 7.650,14.030 7.155,12.946 7.040 C 12.675 7.012,12.429 6.991,12.400 6.995 C 12.371 6.998,12.183 7.020,11.983 7.043 M13.340 9.188 C 14.168 9.593,14.654 10.567,14.453 11.420 C 14.353 11.846,14.205 12.099,13.863 12.434 C 13.078 13.203,11.844 13.184,11.087 12.391 C 10.683 11.968,10.507 11.549,10.507 11.015 C 10.507 10.176,10.981 9.473,11.772 9.139 C 12.037 9.028,12.147 9.012,12.563 9.027 C 12.957 9.041,13.100 9.071,13.340 9.188 M18.747 17.067 C 17.422 17.309,16.157 18.399,15.728 19.670 L 15.617 20.000 10.822 20.000 L 6.027 20.000 6.027 20.987 L 6.027 21.973 10.818 21.973 L 15.610 21.973 15.678 22.200 C 15.934 23.055,16.711 24.014,17.530 24.485 C 18.653 25.130,20.269 25.146,21.387 24.522 C 22.259 24.035,22.870 23.342,23.234 22.427 L 23.404 22.000 24.688 21.986 L 25.973 21.971 25.973 20.986 L 25.973 20.000 24.675 20.000 L 23.377 20.000 23.310 19.773 C 23.151 19.235,22.815 18.705,22.322 18.209 C 21.509 17.393,20.775 17.071,19.653 17.038 C 19.301 17.027,18.893 17.040,18.747 17.067 M19.904 19.047 C 20.307 19.132,20.630 19.312,20.911 19.609 C 21.364 20.086,21.523 20.509,21.482 21.136 C 21.436 21.858,20.991 22.508,20.333 22.817 C 20.064 22.942,19.961 22.960,19.493 22.960 C 19.020 22.960,18.927 22.944,18.663 22.814 C 17.372 22.180,17.110 20.480,18.158 19.533 C 18.661 19.078,19.263 18.911,19.904 19.047 " />
    </SvgIcon>
  );
};
