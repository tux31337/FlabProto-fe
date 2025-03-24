import { cn } from '@/utils';
import {
  defaultIconSize,
  IconColor,
  IconViewbox,
  SvgIconProps,
} from './constants';

export const SvgIcon = ({
  size = defaultIconSize,
  color = IconColor.empty,
  className = '',
  viewBox = IconViewbox.default, // ✅ 기본값 설정
  children,
}: SvgIconProps & { children: React.ReactNode }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox} // ✅ 동적 viewBox 적용
      xmlns="http://www.w3.org/2000/svg"
      className={cn(`${color}`, className)}
    >
      {children}
    </svg>
  );
};
