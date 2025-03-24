'use client';
import { FormProvider } from 'react-hook-form';
import { Button } from '@/app/_component/button/Button';
import HookInput from '@/app/_component/input/HookInput';
import { useLoginForm } from '../_hooks/useLoginForm';

export default function LoginForm() {
  const { form, isLoading, isFormFilled, onSubmit } = useLoginForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <HookInput
            name="email"
            control={form.control}
            placeholder="ID (E-mail)"
            isDelete
            disabled={isLoading}
          />
          <HookInput
            type="password"
            name="password"
            control={form.control}
            placeholder="PASSWORD"
            isDelete
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isLoading || !isFormFilled}
        >
          {isLoading ? 'Loading....' : 'Sign In'}
        </Button>
      </form>
    </FormProvider>
  );
}
