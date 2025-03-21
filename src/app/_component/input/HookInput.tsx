import React from 'react';
import { Close } from '@/icons/generals/Close';
import { cn } from '@/lib/utils';
import { Control } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { InputBase, InputBaseProps } from './InputBase';

interface HookInputProps extends InputBaseProps {
  control: Control<any>;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  parentClassName?: string;
  inputClassName?: string;
  isDelete?: boolean; // isDelete 가 true이면 값이 있을때 x 버튼 누르면 내용물이 지워지는 기능을 사용할 수 있다.
}

export default function HookInput({
  control,
  name,
  label,
  type = 'text',
  placeholder,
  inputClassName,
  parentClassName,
  isDelete = false,
  EndButtonIcon,
  endButtonClick,
  ...props
}: HookInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const hasValue = !!field.value; // 값이 있는지 확인
        const borderClassName = fieldState.error && 'border-red-500';
        const handleClear = () => {
          if (field && field.onChange) {
            field.onChange(''); // 값 초기화
          }
        };

        return (
          <div className={cn('flex flex-col', parentClassName)}>
            {label && (
              <FormLabel className="mb-[4px] text-[14px] font-bold">
                {label}
              </FormLabel>
            )}

            <FormItem>
              <FormControl>
                <InputBase
                  {...field}
                  {...props}
                  type={type}
                  placeholder={placeholder}
                  EndButtonIcon={
                    EndButtonIcon ?? (isDelete && hasValue ? Close : undefined)
                  } // EndButtonIcon이 없으면 기본 delete기능 사용
                  endButtonClick={
                    endButtonClick ??
                    (isDelete && hasValue ? handleClear : undefined)
                  }
                  className={cn('w-full', inputClassName, borderClassName)}
                />
              </FormControl>
            </FormItem>
            {fieldState.error?.message && ( // 에러 메시지 추가
              <p className="mt-2 text-sm text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}
