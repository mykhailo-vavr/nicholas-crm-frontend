'use server';

import { revalidatePath } from 'next/cache';
import { parseFormData } from '@/utils';
import { FormServerAction, SchemaType } from '@/types';
import { activateChildSchema, deactivateChildSchema } from './schemas';
import { ChildService } from '@/api/generated';
import { webRoutes } from '@/settings';
import '@/api/config';

export const activateChildAction: FormServerAction<SchemaType<typeof activateChildSchema>> = async (formData) => {
  const parsed = await parseFormData(activateChildSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const { id } = parsed.data;

  await ChildService.childControllerActivate({ id });

  revalidatePath(webRoutes.private.CHILD, 'page');
  return parsed;
};

export const deactivateChildAction: FormServerAction<SchemaType<typeof deactivateChildSchema>> = async (formData) => {
  const parsed = await parseFormData(deactivateChildSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const { id, ...requestBody } = parsed.data;

  await ChildService.childControllerDeactivate({ id, requestBody });

  revalidatePath(webRoutes.private.CHILD, 'page');
  return parsed;
};
