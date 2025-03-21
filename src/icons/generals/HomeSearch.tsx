import {
  defaultIconColor,
  defaultIconSize,
  defaultIconViewbox,
  IconProps,
} from '../constants';
import { SvgIcon } from '../SvgIcon';

export const HomeSearch = ({
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
        d="M14.279 14.7633C13.2092 15.719 11.7974 16.3 10.25 16.3C6.90868 16.3 4.2 13.5913 4.2 10.25C4.2 6.90868 6.90868 4.2 10.25 4.2C13.5913 4.2 16.3 6.90868 16.3 10.25C16.3 11.7975 15.719 13.2092 14.7633 14.2791C14.6721 14.342 14.5838 14.4162 14.5 14.5C14.4161 14.5839 14.342 14.6721 14.279 14.7633ZM14.3901 16.2024C13.2163 17.0204 11.7892 17.5 10.25 17.5C6.24594 17.5 3 14.2541 3 10.25C3 6.24594 6.24594 3 10.25 3C14.2541 3 17.5 6.24594 17.5 10.25C17.5 11.7893 17.0203 13.2165 16.2022 14.3904L21.5939 19.7821C22.0943 20.2825 22.0943 21.0938 21.5939 21.5941C21.0935 22.0945 20.2822 22.0945 19.7819 21.5941L14.3901 16.2024Z"
      />
    </SvgIcon>
  );
};
