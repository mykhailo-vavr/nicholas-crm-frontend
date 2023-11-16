'use client';

import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useServerActionForm } from '@/hooks';
import { CreateChildContainerFC } from './types';
import { StandardBar } from '@/components/UI/molecules';
import { Form, StandardContainer } from '@/components/UI/organisms';
import {
  Input,
  PhoneInput,
  Select,
  SubmitButton,
  TextArea,
  YearInput,
  Link,
  Button,
  NumberInput,
  AddressInput,
} from '@/components/UI/atoms';
import { webRoutes } from '@/settings';
import { createChildSchema } from './schemas';
import { createChildAction } from './actions';
import { genderOptions, needStatusOptions } from './options';

const CreateChildContainer: CreateChildContainerFC = () => {
  const [{ errors }, action] = useServerActionForm(createChildAction, createChildSchema);

  return (
    <StandardContainer title="Додати дитину">
      <StandardBar>
        <Link href={webRoutes.private.CHILDREN}>
          <ArrowBackIcon />
          До списку
        </Link>
        <Button>Імпортувати</Button>
      </StandardBar>
      <Form action={action} className="grid grid-cols-2">
        <Input name="firstName" label="Ім'я" errorText={errors?.firstName} />
        <Input name="lastName" label="Прізвище" errorText={errors?.lastName} />
        <YearInput name="birthYear" label="Рік народження" errorText={errors?.birthYear} />
        <Select name="gender" label="Стать" options={genderOptions} errorText={errors?.gender} />
        <PhoneInput name="phone" label="Телефон" errorText={errors?.phone} />
        <Select name="needStatus" label="Стан потреби" options={needStatusOptions} errorText={errors?.needStatus} />

        <AddressInput errorText={errors?.address} />
        <NumberInput name="flatNumber" label="Номер квартири" min={0} decimalScale={0} errorText={errors?.flatNumber} />

        <TextArea
          className="col-span-full"
          inputProps={{
            maxLength: 200,
          }}
          name="notes"
          label="Примітки"
          errorText={errors?.notes}
        />
        <SubmitButton>Створити</SubmitButton>
      </Form>
    </StandardContainer>
  );
};

export default CreateChildContainer;
