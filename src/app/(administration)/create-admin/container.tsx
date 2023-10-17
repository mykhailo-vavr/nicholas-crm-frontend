'use client';

import { useServerActionForm } from '@/hooks';
import { CreateAdminContainerFC } from './types';
import { Form, StandardContainer } from '@/components/UI/organisms';
import { Input, PhoneInput, SubmitButton } from '@/components/UI/atoms';
import { createAdminSchema } from './schemas';
import { createAdminAction } from './action';

const CreateAdminContainer: CreateAdminContainerFC = () => {
  const [{ errors }, action] = useServerActionForm(createAdminAction, createAdminSchema);

  return (
    <StandardContainer title="Створити адміністратора" classes={{ root: 'max-w-lg' }}>
      <Form action={action}>
        <Input name="firstName" label="Ім'я" errorText={errors?.firstName} />
        <Input name="lastName" label="Прізвище" errorText={errors?.lastName} />
        <Input name="email" label="Імейл" errorText={errors?.email} />
        <PhoneInput name="phone" label="Телефон" errorText={errors?.phone} />
        <Input name="password" label="Пароль" type="password" errorText={errors?.password} />
        <SubmitButton>Створити</SubmitButton>
      </Form>
    </StandardContainer>
  );
};

export default CreateAdminContainer;
