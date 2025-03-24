import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Left = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M24.148 15.2784C22.4667 15.9164 20.6685 16.1879 18.8737 16.0745C17.2792 16.0788 15.6953 15.8148 14.1884 15.2933L15.3467 11.3089L2 14.0865L11.7179 25.4956L12.8463 21.1416C14.8927 21.5842 16.991 21.7375 19.08 21.5971C20.9838 21.5737 22.8455 21.0337 24.4663 20.0347C29.4325 17.1852 30 11 30 11C30 11 26.8892 14.2657 24.148 15.2784Z" />
    </SvgIcon>
  );
};
