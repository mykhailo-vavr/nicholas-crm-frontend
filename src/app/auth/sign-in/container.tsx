'use client';

import { FC, useCallback } from 'react';
import { useForm, useSignIn } from '@/hooks';
import { Form } from '@/components/UI/molecules';
import { Input, SubmitButton } from '@/components/UI/atoms';
import { signInSchema } from './schemas';
import { OnSubmitCallback } from '@/types';
import { AuthService } from '@/api/client';
import { StandardContainer } from '@/components/UI/organisms';

const SignInContainer: FC = () => {
  const signIn = useSignIn();

  const callback: OnSubmitCallback<typeof signInSchema> = useCallback(
    async (data, setErrors) => {
      try {
        const { accessToken, ...userData } = await AuthService.authControllerSignIn({
          requestBody: {
            ...data,
          },
        });

        signIn({
          token: accessToken,
          userData,
        });
      } catch {
        setErrors({
          email: 'Неправильний імейл або пароль',
          password: 'Неправильний імейл або пароль',
        });
      }
    },
    [signIn],
  );

  const { onSubmit, loading, errors, values, onChange } = useForm(signInSchema, callback);

  return (
    <StandardContainer title="Ласкаво просимо" className="max-w-lg">
      <Form onSubmit={onSubmit} disabled={loading}>
        <Input name="email" label="Імейл" errorText={errors?.email} value={values.email} onChange={onChange('email')} />
        <Input
          name="password"
          label="Пароль"
          type="password"
          errorText={errors?.password}
          value={values.password}
          onChange={onChange('password')}
        />
        <SubmitButton>Увійти</SubmitButton>
      </Form>
    </StandardContainer>
  );
};

export default SignInContainer;
