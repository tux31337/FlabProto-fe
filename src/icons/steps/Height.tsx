import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Height = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M13.561 7.801 C 11.492 9.869,11.253 10.125,11.253 10.277 C 11.253 10.396,11.295 10.478,11.394 10.556 C 11.529 10.663,11.595 10.667,13.261 10.667 L 14.987 10.667 14.987 16.291 C 14.987 20.146,15.005 22.000,15.045 22.186 C 15.180 22.818,15.823 23.149,16.402 22.886 C 16.694 22.754,16.885 22.511,16.955 22.186 C 16.995 22.000,17.013 20.146,17.013 16.291 L 17.013 10.667 18.739 10.667 C 20.405 10.667,20.471 10.663,20.606 10.556 C 20.705 10.478,20.747 10.396,20.747 10.277 C 20.747 10.125,20.508 9.869,18.439 7.801 C 16.642 6.003,16.103 5.493,16.000 5.493 C 15.897 5.493,15.358 6.003,13.561 7.801 M6.267 25.089 C 5.947 25.232,5.652 25.676,5.655 26.012 C 5.657 26.348,5.984 26.807,6.310 26.930 C 6.414 26.969,9.389 26.987,16.000 26.987 C 22.611 26.987,25.586 26.969,25.690 26.930 C 26.021 26.805,26.344 26.346,26.344 26.000 C 26.344 25.654,26.021 25.195,25.690 25.070 C 25.586 25.031,22.610 25.014,15.983 25.015 C 8.118 25.017,6.398 25.030,6.267 25.089 " />
    </SvgIcon>
  );
};
