import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LoginSchema } from '../_schemas/LoginSchema';
import { signIn } from 'next-auth/react';

export type LoginFormValues = z.infer<typeof LoginSchema>;

export function useLoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setError, handleSubmit, formState } = form;
  const { dirtyFields } = formState;
  const isFormFilled = dirtyFields.email && dirtyFields.password;

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);

    // 로그인 API 요청 (예시)
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      console.log('SignIn Response:', response);
    } catch (err) {
      console.error('Login Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    isFormFilled,
    onSubmit: handleSubmit(onSubmit),
  };
}
