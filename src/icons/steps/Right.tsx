import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Right = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M7.852 15.2784C9.53331 15.9164 11.3315 16.1879 13.1263 16.0745C14.7208 16.0788 16.3047 15.8148 17.8116 15.2933L16.6533 11.3089L30 14.0865L20.2821 25.4956L19.1537 21.1416C17.1073 21.5842 15.009 21.7375 12.92 21.5971C11.0162 21.5737 9.1545 21.0337 7.53373 20.0347C2.56747 17.1852 2 11 2 11C2 11 5.1108 14.2657 7.852 15.2784Z" />
    </SvgIcon>
  );
};
