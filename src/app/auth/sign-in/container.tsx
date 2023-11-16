'use client';

import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useClientActionForm } from '@/hooks';
import { Form, StandardContainer } from '@/components/UI/organisms';
import { SignInContainerFC, SignInFormState } from './types';
import { Alert, Input, SubmitButton } from '@/components/UI/atoms';
import { signInSchema } from './schemas';
import { webRoutes } from '@/settings';
import { RenderIf } from '@/components/helpers';

// TODO: separate error alert component

const SignIn: SignInContainerFC = () => {
  const [error, setError] = useState('');

  const signInAction = useCallback(async ({ data }: SignInFormState) => {
    if (!data) {
      return;
    }

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!res?.ok) {
      setError('Неправильний імейл або пароль');
      return;
    }

    setError('');
    window.location.assign(webRoutes.private.ADMINS);
  }, []);

  const [{ errors }, action] = useClientActionForm(signInAction, signInSchema);

  return (
    <StandardContainer title="Ласкаво просимо" classes={{ root: 'max-w-lg' }}>
      <Form action={action}>
        <Input name="email" label="Імейл" errorText={errors?.email} />
        <Input name="password" label="Пароль" type="password" errorText={errors?.password} />
        <SubmitButton>Увійти</SubmitButton>
      </Form>

      <div className="mt-4 h-12">
        <RenderIf condition={error}>
          <Alert severity="error">{error}</Alert>
        </RenderIf>
      </div>
    </StandardContainer>
  );
};

export default SignIn;
