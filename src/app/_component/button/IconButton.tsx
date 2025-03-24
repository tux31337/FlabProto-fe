'use client';

import * as React from 'react';
import { JSX, useState } from 'react';
import { IconComponent, IconProps } from '@/icons/constants';
import { cn } from '@/utils';

const gradient = `content-[attr(before)] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cover before:transition-opacity`;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'outline'
    | 'outline-dark'
    | 'sand'
    | 'dark'
    | 'ghost-gray'
    | 'ghost-white';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'rounded';
  Icon: IconComponent<IconProps>;
  asChild?: boolean;
}

export type IconButton<T extends IconButtonProps> = (props: T) => JSX.Element;

// we need icon button in another way, because icon has it's own size
// if we apply dark theme, is the button follow theme? it may not be possible..

const commonClass =
  'relative inline-flex items-center justify-center transition-colors disabled:pointer-events-none';
const sizeClasses = {
  xs: 'h-4 w-4',
  sm: 'h-6 w-6',
  md: 'h-[24px] w-[24px]',
  lg: 'h-[32px] w-[32px]',
};

const variantClasses = {
  primary: {
    button: {
      normal: 'bg-gv-yellow-300',
      hovered: 'bg-gv-yellow-200',
      pressed: 'bg-gv-yellow-500',
      disabled: 'bg-gv-light-gray-500',
    },
    icon: {
      normal: 'fill-black',
      hovered: '',
      pressed: '',
      disabled: 'fill-gv-dark-gray-300',
    },
  },
  outline: {
    button: {
      normal: 'border border-gv-dark-gray-100 bg-white',
      hovered: 'border-gv-dark-gray-700',
      pressed: 'bg-gv-dark-gray-900/10',
      disabled: 'border-gv-light-gray-400',
    },
    icon: {
      normal: 'fill-gv-dark-gray-700',
      hovered: ' ',
      pressed: '',
      disabled: 'fill-gv-dark-gray-200',
    },
  },
  'outline-dark': {
    button: {
      normal: 'border border-gv-dark-gray-300',
      hovered: '',
      pressed: 'bg-gv-dark-gray-900/10',
      disabled: 'border-gv-light-gray-400',
    },
    icon: {
      normal: 'fill-gv-dark-gray-300',
      hovered: ' ',
      pressed: '',
      disabled: 'fill-gv-dark-gray-200',
    },
  },
  sand: {
    button: {
      normal: 'border bg-gv-sand bg-opacity-50',
      hovered: 'bg-opacity-100',
      pressed: 'border-gv-dark-gray bg-gv-dark-gray',
      disabled: 'bg-opacity-50',
    },
    icon: {
      normal: 'fill-gv-darkgray-700',
      hovered: '',
      pressed: '',
      disabled: 'fill-gv-dark-gray-200',
    },
  },
  dark: {
    button: {
      normal: 'bg-gv-dark-gray-900 bg-opacity-70',
      hovered: 'bg-opacity-80',
      pressed: '',
      disabled: 'bg-gv-dark-gray-900 bg-opacity-20',
    },
    icon: {
      normal: 'fill-gv-sand',
      hovered: 'fill-white',
      pressed: '',
      disabled: 'fill-white/20',
    },
  },
  'ghost-gray': {
    button: {
      normal: 'bg-transparent',
      hovered: 'bg-gv-dark-gray-900/10',
      pressed: 'bg-gv-dark-gray-900/20',
      disabled: 'text-gv-dark-gray-900/20',
    },
    icon: {
      normal: 'fill-gv-dark-gray-700',
      hovered: 'fill-gv-dark-gray-600',
      pressed: 'fill-gv-dark-gray-800',
      disabled: 'fill-gv-dark-gray-900/20',
    },
  },
  'ghost-white': {
    button: {
      normal: `before:opacity-50 ${gradient}`,
      hovered: `before:opacity-100 ${gradient}`,
      pressed: `before:opacity-50 ${gradient}`,
      disabled: `before:opacity-30 ${gradient}`,
    },
    icon: {
      normal: 'fill-white shadow-[0_1px_4px_1px_rgba(0, 0, 0,0.12)] z-10',
      hovered: 'fill-white shadow-[0_2px_10px_0_rgba(0, 0, 0,0.12)] z-10',
      pressed:
        'fill-white opacity-50 shadow-[0_1px_4px_1px_rgba(0, 0, 0,0.12)] z-10',
      disabled:
        'fill-white opacity-20 shadow-[0_1px_4px_1px_rgba(0, 0, 0,0.12)] z-10',
    },
  },
};

const roundedClasses = {
  none: {
    xs: 'rounded-[2px]',
    sm: 'rounded-[2px]',
    md: 'rounded-[4px]',
    lg: 'rounded-[4px]',
  },
  rounded: 'rounded-full',
};

const iconSizeClasses = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-[24px] w-[24px]',
  lg: 'h-[24px] w-[24px]',
};

const iconViewboxClasses = {
  xs: '0 0 20 20',
  sm: '0 0 20 20',
  md: '0 0 24 24',
  lg: '0 0 24 24',
};

const iconCommonClass = 'transition-colors';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      rounded = 'rounded',
      Icon,
      disabled,
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);

    function handleMouseEnter() {
      setHovered(true);
    }
    function handleMouseLeave() {
      setPressed(false);
      setHovered(false);
    }
    function handleMouseDown() {
      setPressed(true);
    }
    function handleMouseUp() {
      setPressed(false);
    }

    const variantClass = variantClasses[variant];
    const sizeClass = sizeClasses[size];
    const roundedClass = rounded
      ? rounded === 'none'
        ? roundedClasses['none'][size]
        : roundedClasses[rounded]
      : roundedClasses['rounded'];
    const iconSizeClass = iconSizeClasses[size];
    const iconViewboxClass = iconViewboxClasses[size];

    return (
      <button
        className={cn(
          commonClass,
          sizeClass,
          variantClass.button.normal,
          roundedClass,
          !disabled && hovered && variantClass.button.hovered,
          !disabled && pressed && variantClass.button.pressed,
          disabled && variantClass.button.disabled,
          className
        )}
        ref={ref}
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
      >
        <Icon
          className={cn(
            iconCommonClass,
            iconSizeClass,
            variantClass.icon.normal,
            !disabled && hovered && variantClass.icon.hovered,
            !disabled && pressed && variantClass.icon.pressed,
            disabled && variantClass.icon.disabled
          )}
          viewBox={iconViewboxClass}
        />
      </button>
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
