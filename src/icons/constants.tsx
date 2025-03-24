export interface IconProps {
  size?: IconSize;
  color?: IconColor;
  viewBox?: string;
  className?: string;
}
export type IconComponent<T extends IconProps> = (props: T) => JSX.Element;

export interface SvgIconProps {
  size?: IconSize;
  color?: IconColor;
  viewBox?: string;
  className?: string;
}

// tailwind class name in comments also works
export enum IconColor {
  empty = '',
  none = 'fill-none',
  transparent = 'fill-transparent',
  black = 'fill-black',
  red = 'fill-red-900',
  stone = 'fill-stone-300',
  white = 'fill-white',
  gray = 'fill-gv-black-600',
  black300 = 'fill-gv-black-300',
  darkGray400 = 'fill-gv-dark-gray-400',
  darkGray500 = 'fill-gv-dark-gray-500',
  darkGray600 = 'fill-gv-dark-gray-600',
  darkGray700 = 'fill-gv-dark-gray-700',
  yellow300 = 'fill-gv-yellow-300',
}

export enum IconSize {
  xs = '12',
  sm = '16',
  default = '20',
  md = '24',
  lg = '32',
  xl = '48',
  xxl = '72',
  xxxl = '100',
  huge = '160',
}

export enum IconViewbox {
  md = '0 0 24 24',
  default = '0 0 32 32',
}

export const defaultIconSize = IconSize.default;
export const defaultIconColor = IconColor.black;
export const defaultIconViewbox = IconViewbox.default;
