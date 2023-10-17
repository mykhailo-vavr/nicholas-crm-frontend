'use server';

import { redirect } from 'next/navigation';
import { parseFormData } from '@/utils';
import { FormServerAction, SchemaType } from '@/types';
import { createAdminSchema } from './schemas';
import { RolesEnum, UsersService } from '@/api/generated';
import { webRoutes } from '@/settings';
import '@/api/config';

export const createAdminAction: FormServerAction<SchemaType<typeof createAdminSchema>> = async (formData) => {
  const parsed = await parseFormData(createAdminSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const isTaken = await UsersService.userControllerIsTaken({
    email: parsed.data.email,
    phone: parsed.data.phone,
  });

  if (isTaken.isTaken) {
    return {
      data: null,
      errors: {
        ...(isTaken.email && { email: 'Цей імейл зайнятий' }),
        ...(isTaken.phone && { phone: 'Цей номер телефону зайнятий' }),
      },
    };
  }

  await UsersService.userControllerCreate({ requestBody: { ...parsed.data, role: RolesEnum.ADMIN } });

  return redirect(webRoutes.private.ADMINS);
};
