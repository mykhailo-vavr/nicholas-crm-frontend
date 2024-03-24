'use server';

import { redirect } from 'next/navigation';
import { parseFormData } from '@/utils';
import { FormAction, SchemaType } from '@/types';
import { createChildSchema } from './schemas';
import { ChildService } from '@/api/__generated__';
import { WEB_ROUTES } from '@/settings';
import '@/api/server/config';

export const createChildAction: FormAction<SchemaType<typeof createChildSchema>> = async (_, formData) => {
  const parsed = await parseFormData(createChildSchema, formData);

  if (!parsed.data) {
    return parsed;
  }
  const { flatNumber, address, notes, ...data } = parsed.data;

  await ChildService.childControllerCreate({
    requestBody: {
      address: {
        ...address,
        flatNumber,
      },
      notes: notes || undefined,
      ...data,
    },
  });

  return redirect(WEB_ROUTES.PRIVATE.CHILDREN);
};
