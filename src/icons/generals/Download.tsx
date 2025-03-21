import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Download = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M11.2929 16.7071L15.2877 20.7019C15.3798 20.7954 15.4912 20.8716 15.6173 20.9239C15.991 21.0787 16.4211 20.9931 16.7071 20.7071L20.7071 16.7071L19.2929 15.2929L17 17.5858V8H15V17.5858L12.7071 15.2929L11.2929 16.7071ZM8 17V23.875H24V17H26V24.875C26 25.4273 25.5523 25.875 25 25.875H7C6.44772 25.875 6 25.4273 6 24.875V17H8Z" />
    </SvgIcon>
  );
};
