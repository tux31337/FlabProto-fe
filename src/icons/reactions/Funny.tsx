import {
  defaultIconColor,
  defaultIconSize,
  defaultIconViewbox,
  IconProps,
} from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Funny = ({
  size = defaultIconSize,
  color = defaultIconColor,
  viewBox = defaultIconViewbox,
  className = '',
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
    >
      <path
        d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
        fill="#FFC84D"
      />
      <path
        d="M6.39046 18.4138C5.86326 18.5698 5.64966 19.2154 5.98166 19.6538C8.93926 23.5482 14.3993 24.729 18.7457 22.2202C23.0921 19.7106 24.7993 14.3922 22.9057 9.88339C22.6929 9.37619 22.0265 9.23939 21.6281 9.61699C19.7009 11.445 17.2769 13.2554 14.4969 14.8602C11.7169 16.465 8.93686 17.6586 6.39046 18.4138Z"
        fill="#FF6D00"
      />
      <path
        d="M15.6384 16.937C18.48 15.2962 20.4896 12.705 21.5912 9.64502C19.6688 11.4634 17.2616 13.2642 14.496 14.8602C11.684 16.4834 8.87198 17.6866 6.30078 18.4402C9.51678 19.029 12.7832 18.5858 15.6384 16.937Z"
        fill="white"
      />
      <path
        d="M10.5584 11.1894C10.9848 11.9278 9.71598 13.9478 8.32558 15.483C8.13358 15.695 7.79518 15.5878 7.84958 15.3318L8.26958 13.3814C8.39678 12.7926 8.08878 12.259 7.51518 12.0742L5.61518 11.463C5.36638 11.383 5.44318 11.0358 5.72238 10.9758C7.74718 10.539 10.132 10.451 10.5584 11.1894Z"
        fill="black"
      />
      <path
        d="M13.2872 9.61425C13.7136 10.3526 16.0976 10.2638 18.1224 9.82785C18.4016 9.76785 18.4784 9.42065 18.2296 9.34065L16.3304 8.72865C15.7568 8.54385 15.4488 8.01025 15.576 7.42145L15.996 5.47025C16.0512 5.21425 15.712 5.10785 15.5208 5.31905C14.1304 6.85425 12.8616 8.87505 13.288 9.61345L13.2872 9.61425Z"
        fill="black"
      />
      <path
        d="M7.34484 21.0608C7.15604 22.168 6.10564 22.912 4.99844 22.7232C3.89124 22.5344 3.14724 21.484 3.33604 20.3768C3.52484 19.2696 6.21924 15.564 6.21924 15.564C6.21924 15.564 7.53364 19.9536 7.34484 21.0608Z"
        fill="white"
      />
      <path
        d="M23.3296 11.3326C24.4128 11.6294 25.5312 10.9918 25.828 9.90939C26.1248 8.82619 25.4872 7.70779 24.4048 7.41099C23.3216 7.11419 18.8248 7.99019 18.8248 7.99019C18.8248 7.99019 22.2472 11.0366 23.3304 11.3334L23.3296 11.3326Z"
        fill="white"
      />
    </svg>
  );
};
