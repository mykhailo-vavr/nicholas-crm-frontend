'use server';

import { redirect } from 'next/navigation';
import { parseFormData } from '@/utils';
import { FormAction, SchemaType } from '@/types';
import { createGiftSchema } from './schemas';
import { GiftService } from '@/api/__generated__';
import { WEB_ROUTES } from '@/settings';
import '@/api/server/config';

export const createGiftAction: FormAction<SchemaType<typeof createGiftSchema>> = async (_, formData) => {
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

  return redirect(WEB_ROUTES.PRIVATE.GIFTS);
};
