import { defaultIconColor, defaultIconSize, IconProps } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const PlayerPause2 = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z"
        fill="white"
        fillOpacity="0.8"
      />
      <path
        d="M21.8126 15.75H19.1876C18.9459 15.75 18.7501 15.9179 18.7501 16.125V31.875C18.7501 32.0821 18.9459 32.25 19.1876 32.25H21.8126C22.0542 32.25 22.2501 32.0821 22.2501 31.875V16.125C22.2501 15.9179 22.0542 15.75 21.8126 15.75Z"
        fill="white"
        fillOpacity="0.8"
      />
      <path
        d="M28.8126 15.75H26.1876C25.946 15.75 25.7501 15.9179 25.7501 16.125V31.875C25.7501 32.0821 25.946 32.25 26.1876 32.25H28.8126C29.0542 32.25 29.2501 32.0821 29.2501 31.875V16.125C29.2501 15.9179 29.0542 15.75 28.8126 15.75Z"
        fill="white"
        fillOpacity="0.8"
      />
    </svg>
  );
};
