import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Data = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M5.495 8.085 C 4.896 8.247,4.379 8.702,4.150 9.269 L 4.027 9.573 4.027 18.000 L 4.027 26.427 4.155 26.747 C 4.331 27.184,4.816 27.669,5.253 27.845 L 5.573 27.973 16.000 27.973 L 26.427 27.973 26.747 27.845 C 27.184 27.669,27.669 27.184,27.845 26.747 L 27.973 26.427 27.973 18.000 L 27.973 9.573 27.845 9.253 C 27.669 8.816,27.184 8.331,26.747 8.155 L 26.427 8.027 16.107 8.017 C 7.147 8.008,5.748 8.017,5.495 8.085 M25.493 18.000 L 25.493 25.493 16.000 25.493 L 6.507 25.493 6.507 18.000 L 6.507 10.507 16.000 10.507 L 25.493 10.507 25.493 18.000 M14.507 18.000 L 14.507 24.000 16.000 24.000 L 17.493 24.000 17.493 18.000 L 17.493 12.000 16.000 12.000 L 14.507 12.000 14.507 18.000 M19.520 19.760 L 19.520 24.000 21.013 24.000 L 22.507 24.000 22.507 19.760 L 22.507 15.520 21.013 15.520 L 19.520 15.520 19.520 19.760 M9.493 21.173 L 9.493 24.000 11.013 24.000 L 12.533 24.000 12.533 21.173 L 12.533 18.347 11.013 18.347 L 9.493 18.347 9.493 21.173 " />
    </SvgIcon>
  );
};
