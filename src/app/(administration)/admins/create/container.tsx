'use client';

import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useServerActionForm } from '@/hooks';
import { CreateAdminContainerFC } from './types';
import { StandardContainer } from '@/components/UI/organisms';
import { Input, Link, PhoneInput, Select, SubmitButton } from '@/components/UI/atoms';
import { createAdminSchema } from './schemas';
import { createAdminAction } from './actions';
import { adminRolesOptions } from './options';
import { Form, StandardBar } from '@/components/UI/molecules';
import { WEB_ROUTES } from '@/settings';

const CreateAdminContainer: CreateAdminContainerFC = () => {
  const [{ errors }, action] = useServerActionForm(createAdminAction, createAdminSchema);

  return (
    <StandardContainer title="Створити адміністратора">
      <StandardBar>
        <Link href={WEB_ROUTES.PRIVATE.ADMINS}>
          <ArrowBackIcon />
          До списку
        </Link>
      </StandardBar>
      <Form action={action} className="grid grid-cols-2">
        <Input name="firstName" label="Ім'я" errorText={errors?.firstName} />
        <Input name="lastName" label="Прізвище" errorText={errors?.lastName} />
        <Input name="email" label="Імейл" errorText={errors?.email} />
        <PhoneInput name="phone" label="Телефон" errorText={errors?.phone} />
        <Select name="role" label="Роль" options={adminRolesOptions} errorText={errors?.role} />
        <Input name="password" label="Пароль" type="password" errorText={errors?.password} />
        <SubmitButton>Створити</SubmitButton>
      </Form>
    </StandardContainer>
  );
};

export default CreateAdminContainer;
