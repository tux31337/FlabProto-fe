'use client';

import * as React from 'react';
import { useState } from 'react';
import {
  IconColor,
  IconComponent,
  IconProps,
  IconSize,
} from '@/icons/constants';
import { cn } from '@/lib/utils';
import { useFormField } from '@/components/ui/form';
import { IconButton } from '../button/IconButton';

export interface InputBaseProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'light' | 'dark';
  inputSize?: 'sm' | 'md';
  StartIcon?: IconComponent<IconProps>;
  startIconClassName?: string;
  EndIcon?: IconComponent<IconProps>;
  endIconClassName?: string;
  StartButtonIcon?: IconComponent<IconProps>; // button follows ghost and ghost-dark theme
  startButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  EndButtonIcon?: IconComponent<IconProps>;
  endButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const variantClasses = {
  light: {
    wrapper: {
      normal: 'bg-white flex transition',
      hovered: 'border-gv-dark-gray-500',
      active: 'border-gv-dark-gray-500',
      error: 'border-gv-status-error',
      disabled: 'cursor-not-allowed border-gv-sand bg-gv-light-gray-500',
    },
    input: {
      normal:
        'border-gv-sand bg-white bg-white text-gv-dark-gray-700 transition-colors placeholder:text-gv-dark-gray-400 focus:outline-none focus:ring-0',
      hovered: '',
      active: '',
      error: '',
      disabled:
        'cursor-not-allowed bg-gv-light-gray-500 text-gv-dark-gray-300 placeholder:text-gv-dark-gray-300',
    },
    icon: {
      normal: 'fill-gv-dark-gray-300 transition-colors',
      hovered: 'fill-gv-dark-gray-300',
      active: 'fill-gv-dark-gray-500',
      error: 'fill-gv-dark-gray-300',
      disabled: 'fill-gv-dark-gray-300',
    },
  },
  dark: {
    wrapper: {
      normal: 'flex border-gv-dark-gray-600 bg-black transition-colors',
      hovered: 'border-gv-dark-gray-500',
      active: 'border-gv-primary-yellow',
      error: 'border-gv-status-error',
      disabled:
        'cursor-not-allowed border-gv-dark-gray-600 bg-gv-dark-gray-800',
    },
    input: {
      // placeholder's text color is too dark
      normal:
        'bg-black transition-colors text-gv-sand placeholder:text-gv-dark-gray-700  focus:outline-none focus:ring-0 disabled:cursor-not-allowed',
      hovered: '',
      active: '',
      error: '',
      disabled:
        'cursor-not-allowed text-gv-dark-gray-700 bg-gv-dark-gray-800 placeholder:text-gv-dark-gray-700',
    },
    icon: {
      normal: 'fill-gv-dark-gray-300 transition-colors',
      hovered: 'fill-gv-dark-gray-300',
      active: 'fill-gv-dark-gray-500',
      error: 'fill-gv-dark-gray-300',
      disabled: 'fill-gv-dark-gray-700',
    },
  },
};
const inputSizeClasses = {
  sm: {
    wrapper: 'h-[30px] rounded-sm border-[1px] px-[7px]',
    input: 'h-[28px] py-2 mx-[4px] text-sm',
    icon: 'mt-[6px]',
    button: 'mt-[6px]',
  },
  md: {
    wrapper: 'h-10 rounded-sm border-[1px] px-[7px]',
    input: 'h-[38px] py-3 mx-[4px] text-base',
    icon: 'mt-[9px]',
    button: 'mt-[7px]',
  },
};

// add input props for icon and button and style
// we need to support zed
const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      StartIcon,
      EndIcon,
      StartButtonIcon,
      startButtonClick,
      EndButtonIcon,
      endButtonClick,
      value,
      className,
      variant = 'light',
      inputSize = 'md',
      disabled,
      startIconClassName,
      endIconClassName,
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const { error } = useFormField();

    function handleMouseEnter() {
      setHovered(true);
    }
    function handleMouseLeave() {
      setHovered(false);
    }
    const handleFocus = () => {
      setFocused(true);
    };
    const handleBlur = () => {
      setFocused(false);
    };

    const variantClass = variantClasses[variant];
    const inputSizeClass = inputSizeClasses[inputSize];
    return (
      <div
        className={cn(
          inputSizeClass.wrapper,
          variantClass.wrapper.normal,
          hovered && variantClass.wrapper.hovered,
          focused && variantClass.wrapper.active,
          error && variantClass.wrapper.error,
          className,
          disabled && variantClass.wrapper.disabled
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {StartIcon && (
          <StartIcon
            color={IconColor.empty}
            size={inputSize == 'md' ? IconSize.md : IconSize.sm}
            className={cn(
              inputSizeClass.icon,
              variantClass.icon.normal,
              hovered && variantClass.icon.hovered,
              focused && variantClass.icon.active,
              error && variantClass.icon.error,
              startIconClassName && startIconClassName,
              disabled && variantClass.icon.disabled
            )}
          />
        )}
        {StartButtonIcon && (
          <IconButton
            Icon={StartButtonIcon}
            variant={variant == 'dark' ? 'ghost-white' : 'ghost-gray'}
            size={inputSize == 'sm' ? 'xs' : 'sm'}
            rounded="none"
            className={cn(inputSizeClass.button)}
            onClick={startButtonClick}
            disabled={disabled}
          />
        )}
        <input
          className={cn(
            inputSizeClass.input,
            variantClass.input.normal,
            hovered && variantClass.input.hovered,
            focused && variantClass.input.active,
            error && variantClass.input.error,
            className,
            disabled && variantClass.input.disabled
          )}
          value={value}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
        {EndButtonIcon && (
          <IconButton
            type="button"
            Icon={EndButtonIcon}
            variant={variant == 'dark' ? 'ghost-white' : 'ghost-gray'}
            size={inputSize == 'sm' ? 'xs' : 'sm'}
            rounded="none"
            className={cn(inputSizeClass.button)}
            onClick={endButtonClick}
            disabled={disabled}
          />
        )}
        {EndIcon && (
          <EndIcon
            color={IconColor.empty}
            size={inputSize == 'md' ? IconSize.md : IconSize.sm}
            className={cn(
              inputSizeClass.icon,
              variantClass.icon.normal,
              hovered && variantClass.icon.hovered,
              focused && variantClass.icon.active,
              error && variantClass.icon.error,
              startIconClassName && startIconClassName,
              disabled && variantClass.icon.disabled
            )}
          />
        )}
      </div>
    );
  }
);
InputBase.displayName = 'InputBase';

export { InputBase };
