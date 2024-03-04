'use server';

import { redirect } from 'next/navigation';
import { parseFormData } from '@/utils';
import { FormAction, SchemaType } from '@/types';
import { createAdminSchema } from './schemas';
import { UserService } from '@/api/__generated__';
import { WEB_ROUTES } from '@/settings';
import '@/api/config';

export const createAdminAction: FormAction<SchemaType<typeof createAdminSchema>> = async (formData) => {
  const parsed = await parseFormData(createAdminSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const isTaken = await UserService.userControllerIsTaken({
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

  await UserService.userControllerCreate({ requestBody: { ...parsed.data } });

  return redirect(WEB_ROUTES.PRIVATE.ADMINS);
};
