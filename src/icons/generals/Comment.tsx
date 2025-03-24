import {
  defaultIconColor,
  defaultIconSize,
  defaultIconViewbox,
  IconProps,
} from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Comment = ({
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
        d="M19.5 6.75C19.5 6.33579 19.1642 6 18.75 6H5.25C4.83579 6 4.5 6.33579 4.5 6.75V15C4.5 15.4142 4.83579 15.75 5.25 15.75H17.862L19.4878 17.3841C19.5059 13.8395 19.5 10.2946 19.5 6.75ZM20.9739 20.0979C20.9721 20.4316 20.5683 20.597 20.333 20.3605L17.2385 17.25H5.25C4.00736 17.25 3 16.2426 3 15V6.75C3 5.50736 4.00736 4.5 5.25 4.5H18.75C19.9926 4.5 21 5.50736 21 6.75C21 11.1995 20.9967 15.6485 20.9739 20.0979Z"
      />
    </SvgIcon>
  );
};
