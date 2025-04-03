'use client';

import { cn } from '@/utils';
import * as React from 'react';
import { useState } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = () => {
      // it is focus mode
    };
    const handleBlur = () => {
      // blur mode
    };
    return (
      <div className={cn('', className)}>
        <input
          type={type}
          className={cn(
            'bg-transparent h-9 w-full px-3 py-1 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
