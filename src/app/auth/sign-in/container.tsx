'use client';

import { FC } from 'react';
import { useForm } from '@/hooks';
import { Form, StandardContainer } from '@/components/UI/organisms';
import { Input, SubmitButton } from '@/components/UI/atoms';
import { signInSchema } from './schemas';
import { signInAction } from './actions';

const SignInContainer: FC = () => {
  const [{ errors }, action] = useForm(signInAction, signInSchema);

  return (
    <StandardContainer title="Ласкаво просимо" classes={{ root: 'max-w-lg' }}>
      <Form action={action}>
        <Input name="email" label="Імейл" errorText={errors?.email} />
        <Input name="password" label="Пароль" type="password" errorText={errors?.password} />
        <SubmitButton>Увійти</SubmitButton>
      </Form>
    </StandardContainer>
  );
};

export default SignInContainer;
