'use client';

import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useServerActionForm } from '@/hooks';
import { CreateGiftContainerFC } from './types';
import { StandardBar } from '@/components/UI/molecules';
import { Form, StandardContainer } from '@/components/UI/organisms';
import { Input, Select, SubmitButton, TextArea, Link, NumberInput } from '@/components/UI/atoms';
import { WEB_ROUTES } from '@/settings';
import { createGiftSchema } from './schemas';
import { createGiftAction } from './actions';
import { genderOptions, giftSubtypeOptions, giftTypeOptions } from './options';

const CreateGiftContainer: CreateGiftContainerFC = () => {
  const [{ errors }, action] = useServerActionForm(createGiftAction, createGiftSchema);

  return (
    <StandardContainer title="Створити подарунок">
      <StandardBar>
        <Link href={WEB_ROUTES.PRIVATE.GIFTS}>
          <ArrowBackIcon />
          До списку
        </Link>
      </StandardBar>
      <Form action={action} className="grid grid-cols-2">
        <Input name="name" label="Назва" errorText={errors?.name} />
        <Select name="type" label="Тип" options={giftTypeOptions} errorText={errors?.type} />
        <Select name="subtype" label="Підтип" options={giftSubtypeOptions} errorText={errors?.subtype} />
        <Select name="forGender" label="Для кого" options={genderOptions} errorText={errors?.forGender} />
        <NumberInput name="minAge" label="Мінімальний вік" min={0} decimalScale={0} errorText={errors?.minAge} />
        <NumberInput name="maxAge" label="Максимальний вік" min={1} decimalScale={0} errorText={errors?.maxAge} />
        <NumberInput
          name="currentQuantity"
          label="Поточна кількість"
          min={0}
          decimalScale={0}
          errorText={errors?.maxAge}
        />
        <TextArea
          className="col-span-full"
          inputProps={{
            maxLength: 200,
          }}
          name="description"
          label="Опис"
          errorText={errors?.description}
        />
        <SubmitButton>Створити</SubmitButton>
      </Form>
    </StandardContainer>
  );
};

export default CreateGiftContainer;
