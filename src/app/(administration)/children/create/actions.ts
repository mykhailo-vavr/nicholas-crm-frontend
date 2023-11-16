'use server';

import { redirect } from 'next/navigation';
import { parseFormData } from '@/utils';
import { FormServerAction, SchemaType } from '@/types';
import { createChildSchema } from './schemas';
import { ChildService } from '@/api/generated';
import { webRoutes } from '@/settings';
import '@/api/config';

export const createChildAction: FormServerAction<SchemaType<typeof createChildSchema>> = async (formData) => {
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

  return redirect(webRoutes.private.CHILDREN);
};
