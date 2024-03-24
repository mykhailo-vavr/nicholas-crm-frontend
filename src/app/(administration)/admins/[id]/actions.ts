'use server';

import { revalidatePath } from 'next/cache';
import { parseFormData } from '@/utils';
import { FormAction, SchemaType } from '@/types';
import { activateAdminSchema, deactivateAdminSchema } from './schemas';
import { UserService } from '@/api/__generated__';
import { WEB_ROUTES } from '@/settings';
import '@/api/client/config';

export const activateAdminAction: FormAction<SchemaType<typeof activateAdminSchema>> = async (_, formData) => {
  const parsed = await parseFormData(activateAdminSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const { id } = parsed.data;

  await UserService.userControllerActivate({ id });

  revalidatePath(WEB_ROUTES.PRIVATE.ADMIN, 'page');
  return parsed;
};

export const deactivateAdminAction: FormAction<SchemaType<typeof deactivateAdminSchema>> = async (_, formData) => {
  const parsed = await parseFormData(deactivateAdminSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const { id, ...requestBody } = parsed.data;

  await UserService.userControllerDeactivate({ id, requestBody });

  revalidatePath(WEB_ROUTES.PRIVATE.ADMIN, 'page');
  return parsed;
};
