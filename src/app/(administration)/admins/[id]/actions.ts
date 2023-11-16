'use server';

import { revalidatePath } from 'next/cache';
import { parseFormData } from '@/utils';
import { FormServerAction, SchemaType } from '@/types';
import { activateAdminSchema, deactivateAdminSchema } from './schemas';
import { UserService } from '@/api/generated';
import { webRoutes } from '@/settings';
import '@/api/config';

export const activateAdminAction: FormServerAction<SchemaType<typeof activateAdminSchema>> = async (formData) => {
  const parsed = await parseFormData(activateAdminSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const { id } = parsed.data;

  await UserService.userControllerActivate({ id });

  revalidatePath(webRoutes.private.ADMIN, 'page');
  return parsed;
};

export const deactivateAdminAction: FormServerAction<SchemaType<typeof deactivateAdminSchema>> = async (formData) => {
  const parsed = await parseFormData(deactivateAdminSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const { id, ...requestBody } = parsed.data;

  await UserService.userControllerDeactivate({ id, requestBody });

  revalidatePath(webRoutes.private.ADMIN, 'page');
  return parsed;
};
