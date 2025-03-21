import {
  defaultIconColor,
  defaultIconSize,
  defaultIconViewbox,
  IconProps,
} from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Share = ({
  size = defaultIconSize,
  color = defaultIconColor,
  viewBox = defaultIconViewbox,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className} viewBox={viewBox}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4697 3.96967C11.7626 3.67678 12.2374 3.67678 12.5303 3.96967L17.0303 8.46967C17.3232 8.76256 17.3232 9.23744 17.0303 9.53033C16.7374 9.82322 16.2626 9.82322 15.9697 9.53033L12.75 6.31066V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V6.31066L8.03033 9.53033C7.73744 9.82322 7.26256 9.82322 6.96967 9.53033C6.67678 9.23744 6.67678 8.76256 6.96967 8.46967L11.4697 3.96967ZM5.25 12.75C5.66421 12.75 6 13.0858 6 13.5V19.5H18V13.5C18 13.0858 18.3358 12.75 18.75 12.75C19.1642 12.75 19.5 13.0858 19.5 13.5V20.25C19.5 20.6642 19.1642 21 18.75 21H5.25C4.83579 21 4.5 20.6642 4.5 20.25V13.5C4.5 13.0858 4.83579 12.75 5.25 12.75Z"
      />
    </SvgIcon>
  );
};
