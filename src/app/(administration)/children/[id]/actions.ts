'use server';

import { revalidatePath } from 'next/cache';
import { parseFormData } from '@/utils';
import { FormAction, SchemaType } from '@/types';
import { activateChildSchema, deactivateChildSchema } from './schemas';
import { ChildService } from '@/api/__generated__';
import { WEB_ROUTES } from '@/settings';
import '@/api/config';

export const activateChildAction: FormAction<SchemaType<typeof activateChildSchema>> = async (formData) => {
  const parsed = await parseFormData(activateChildSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const { id } = parsed.data;

  await ChildService.childControllerActivate({ id });

  revalidatePath(WEB_ROUTES.PRIVATE.CHILD, 'page');
  return parsed;
};

export const deactivateChildAction: FormAction<SchemaType<typeof deactivateChildSchema>> = async (formData) => {
  const parsed = await parseFormData(deactivateChildSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const { id, ...requestBody } = parsed.data;

  await ChildService.childControllerDeactivate({ id, requestBody });

  revalidatePath(WEB_ROUTES.PRIVATE.CHILD, 'page');
  return parsed;
};
