'use client';

import * as React from 'react';
import { useState } from 'react';
import { IconComponent, IconProps, IconSize } from '@/icons/constants';
import { cn } from '@/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'danger'
    | 'outline'
    | 'dark'
    | 'ghost'
    | 'ghost-dark-primary'
    | 'ghost-dark'
    | 'custom-dark'
    | 'custom-dark-secondary';
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  rounded?: 'none' | 'rounded';
  StartIcon?: IconComponent<IconProps>;
  EndIcon?: IconComponent<IconProps>;
  asChild?: boolean;
}

const commonClass =
  'inline-flex items-center justify-center whitespace-nowrap rounded font-bold transition-colors disabled:pointer-events-none';

// TODO: bg-opacity is not desirable
const variantClasses = {
  primary: {
    button: {
      normal: 'bg-gv-yellow-300 text-black',
      hovered: 'bg-gv-yellow-200',
      pressed: 'bg-gv-yellow-500',
      disabled: 'bg-gv-light-gray-500 font-normal text-gv-dark-gray-300',
    },
    icon: {
      normal: 'fill-black',
      hovered: '',
      pressed: '',
      disabled: 'fill-gv-dark-gray-300',
    },
  },
  danger: {
    button: {
      normal:
        'border border-gv-status-error border-opacity-50 bg-white text-gv-status-error',
      hovered: 'border-opacity-100',
      pressed: 'border-opacity-100 bg-gv-dark-gray-900/10',
      disabled: 'border-opacity-40 text-opacity-40',
    },
    icon: {
      normal: 'fill-gv-status-error',
      hovered: '',
      pressed: '',
      disabled: 'fill-opacity-40',
    },
  },
  outline: {
    button: {
      normal: 'border border-gv-dark-gray-300 bg-white text-gv-dark-gray-700',
      hovered: 'border-gv-dark-gray-700',
      pressed: 'bg-gv-dark-gray-900/10',
      disabled: 'border-gv-light-gray-400 text-gv-dark-gray-200',
    },
    icon: {
      normal: 'fill-gv-dark-gray-700',
      hovered: '',
      pressed: '',
      disabled: 'fill-gv-dark-gray-200',
    },
  },
  dark: {
    button: {
      normal: 'bg-gv-dark-gray-800 text-white',
      hovered: 'bg-gv-dark-gray-700 ',
      pressed: 'bg-gv-dark-gray-900',
      disabled: 'bg-gv-dark-gray-600 text-gv-dark-gray-500',
    },
    icon: {
      normal: 'fill-white',
      hovered: '',
      pressed: '',
      disabled: 'fill-gv-dark-gray-500',
    },
  },
  ghost: {
    button: {
      normal: 'bg-white text-gv-dark-gray-700',
      hovered: 'bg-gv-dark-gray-900/10 text-gv-dark-gray-600',
      pressed: 'bg-gv-dark-gray-900/20 text-gv-dark-gray-800',
      disabled: 'text-gv-dark-gray-900/20',
    },
    icon: {
      normal: 'fill-gv-dark-gray-700',
      hovered: 'fill-gv-dark-gray-600',
      pressed: 'fill-gv-dark-gray-800',
      disabled: 'fill-gv-dark-gray-900/20',
    },
  },
  'ghost-dark-primary': {
    button: {
      normal: 'text-gv-yellow-300',
      hovered: 'bg-gv-dark-gray-900/10',
      pressed: 'bg-gv-dark-gray-900/20 text-gv-yellow-400',
      disabled: 'text-gv-sand/50',
    },
    icon: {
      normal: 'fill-gv-yellow-300',
      hovered: '',
      pressed: 'fill-gv-yellow-400',
      disabled: 'fill-gv-sand/50',
    },
  },
  'ghost-dark': {
    button: {
      normal: 'text-gv-sand',
      hovered: 'text-gv-light-gray-400',
      pressed: 'bg-gv-dark-gray-900/20 text-gv-dark-gray-400',
      disabled: 'text-gv-sand/50',
    },
    icon: {
      normal: 'fill-gv-sand',
      hovered: 'fill-gv-light-gray-400',
      pressed: 'fill-gv-dark-gray-400',
      disabled: 'fill-gv-sand/50',
    },
  },
  'custom-dark': {
    button: {
      normal: 'text-white bg-gv-dark-gray-700',
      hovered: 'bg-[#666]',
      pressed: 'bg-gv-dark-gray-800',
      disabled: 'bg-gv-dark-gray-600 text-gv-dark-gray-500',
    },
    icon: {
      normal: 'fill-white',
      hovered: '',
      pressed: '',
      disabled: '',
    },
  },
  'custom-dark-secondary': {
    button: {
      normal: 'text-gv-sand bg-gv-dark-gray-700',
      hovered: 'bg-[#666]',
      pressed: 'bg-gv-dark-gray-800',
      disabled: 'bg-gv-dark-gray-400 text-gv-dark-gray-300',
    },
    icon: {
      normal: 'fill-white',
      hovered: '',
      pressed: '',
      disabled: '',
    },
  },
};

const sizeClasses = {
  sm: 'h-8 gap-[2px] px-3 pt-[1px] text-sm leading-[17.50px]',
  md: 'h-10 gap-1 px-4 py-2 leading-tight',
  lg: 'h-12 gap-1 px-5 text-xl leading-[25px]',
  xlg: 'h-16 gap-1 px-6 text-2xl font-extrabold leading-[30px]',
};

const roundedClasses = {
  none: '',
  rounded: 'rounded-full',
};

const iconSizeClasses = {
  sm: 'h-[16px] w-[16px]',
  md: 'h-[24px] w-[24px]',
  lg: 'h-[24px] w-[24px]',
  xlg: 'h-[32px] w-[32px]',
};

const iconViewboxClasses = {
  sm: '0 0 16 16',
  md: '0 0 20 20',
  lg: '0 0 20 20',
  xlg: '0 0 24 24',
};

const iconCommonClass = 'mt-[-1px] transition-colors';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      rounded = 'none',
      StartIcon,
      EndIcon,
      disabled,
      children,
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

    const colors = variantClasses[variant];
    const iconSizeClass = iconSizeClasses[size];
    const iconViewboxClass = iconViewboxClasses[size];
    const sizeClass = sizeClasses[size];
    const roundedClass = roundedClasses[rounded];
    return (
      <button
        className={cn(
          commonClass,
          sizeClass,
          roundedClass,
          colors.button.normal,
          !disabled && hovered && colors.button.hovered,
          !disabled && pressed && colors.button.pressed,
          disabled && colors.button.disabled,
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
        {StartIcon && (
          <StartIcon
            size={
              size === 'sm'
                ? IconSize.sm
                : size === 'xlg'
                ? IconSize.lg
                : IconSize.default
            }
            className={cn(
              iconCommonClass,
              iconSizeClass,
              colors.icon.normal,
              !disabled && hovered && colors.icon.hovered,
              !disabled && pressed && colors.icon.pressed,
              disabled && colors.icon.disabled
            )}
          />
        )}
        {children}
        {EndIcon && (
          <EndIcon
            size={
              size === 'sm'
                ? IconSize.sm
                : size === 'xlg'
                ? IconSize.lg
                : IconSize.default
            }
            className={cn(
              iconCommonClass,
              iconSizeClass,
              colors.icon.normal,
              !disabled && hovered && colors.icon.hovered,
              !disabled && pressed && colors.icon.pressed,
              disabled && colors.icon.disabled
            )}
          />
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
