import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const FlightDraw = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path
        opacity="0.2"
        d="M15.547 4.008 C 15.326 4.089,15.200 4.207,15.099 4.427 C 15.021 4.596,15.012 5.643,14.999 15.811 C 14.990 23.237,15.003 27.108,15.039 27.304 C 15.140 27.851,15.373 28.027,16.000 28.027 C 16.623 28.027,16.859 27.852,16.959 27.313 C 17.034 26.917,17.034 5.083,16.959 4.687 C 16.897 4.356,16.776 4.166,16.555 4.056 C 16.361 3.958,15.759 3.930,15.547 4.008 "
      />
      <path d="M20.320 3.817 C 18.428 4.208,16.845 4.535,16.803 4.544 C 16.761 4.553,17.889 5.590,19.310 6.848 C 20.731 8.106,21.955 9.193,22.030 9.262 L 22.167 9.388 22.476 8.227 C 22.646 7.589,22.789 7.061,22.796 7.054 C 22.815 7.033,23.745 7.293,24.367 7.494 C 26.677 8.240,28.169 9.259,28.744 10.480 C 28.978 10.978,29.031 11.295,28.999 11.994 C 28.926 13.551,28.269 15.483,26.819 18.400 C 25.697 20.656,24.527 22.677,22.300 26.207 C 21.934 26.787,21.867 26.930,21.867 27.120 C 21.867 27.663,22.625 28.047,23.028 27.709 C 23.114 27.636,23.484 27.102,23.852 26.522 C 27.827 20.238,29.980 15.721,30.424 12.733 C 30.598 11.555,30.477 10.611,30.039 9.733 C 29.210 8.075,27.070 6.708,23.934 5.831 C 23.530 5.719,23.200 5.605,23.200 5.578 C 23.200 5.551,23.344 4.991,23.520 4.334 C 23.696 3.676,23.840 3.128,23.840 3.116 C 23.840 3.087,24.253 3.005,20.320 3.817 "></path>
    </SvgIcon>
  );
};
