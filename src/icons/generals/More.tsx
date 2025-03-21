import {
  defaultIconColor,
  defaultIconSize,
  defaultIconViewbox,
  IconProps,
} from '../constants';
import { SvgIcon } from '../SvgIcon';

export const More = ({
  size = defaultIconSize,
  color = defaultIconColor,
  viewBox = defaultIconViewbox,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className} viewBox={viewBox}>
      <path d="M5.25 12C5.25 12.8284 5.92157 13.5 6.75 13.5C7.57843 13.5 8.25 12.8284 8.25 12C8.25 11.1716 7.57843 10.5 6.75 10.5C5.92157 10.5 5.25 11.1716 5.25 12Z" />
      <path d="M10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z" />
      <path d="M17.25 13.5C16.4216 13.5 15.75 12.8284 15.75 12C15.75 11.1716 16.4216 10.5 17.25 10.5C18.0784 10.5 18.75 11.1716 18.75 12C18.75 12.8284 18.0784 13.5 17.25 13.5Z" />
    </SvgIcon>
  );
};
