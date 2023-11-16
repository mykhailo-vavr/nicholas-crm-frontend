'use server';

import { redirect } from 'next/navigation';
import { parseFormData } from '@/utils';
import { FormServerAction, SchemaType } from '@/types';
import { createGiftSchema } from './schemas';
import { GiftService } from '@/api/generated';
import { webRoutes } from '@/settings';
import '@/api/config';

export const createGiftAction: FormServerAction<SchemaType<typeof createGiftSchema>> = async (formData) => {
  const parsed = await parseFormData(createGiftSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  const isTaken = await GiftService.giftControllerIsTaken({
    name: parsed.data.name,
  });

  if (isTaken.isTaken) {
    return {
      data: null,
      errors: {
        ...(isTaken.name && { name: 'Ця назва вже зайнята зайнятий' }),
      },
    };
  }

  await GiftService.giftControllerCreate({ requestBody: parsed.data });

  return redirect(webRoutes.private.GIFTS);
};
