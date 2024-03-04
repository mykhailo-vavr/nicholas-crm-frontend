import { coerce, nativeEnum, object, string } from 'zod';
import { CreateGiftDto, GenderEnum, GiftSubtypeEnum, GiftTypeEnum } from '@/api/__generated__';
import { SchemaAsType } from '@/types';
import { notEmptyString } from '@/utils';

export const createGiftSchema = object({
  name: notEmptyString().max(50),
  type: nativeEnum(GiftTypeEnum),
  subtype: nativeEnum(GiftSubtypeEnum),
  forGender: nativeEnum(GenderEnum),
  description: string().optional(),
  minAge: coerce.number().int().min(0),
  maxAge: coerce.number().int().min(1),
  currentQuantity: coerce.number().int().min(0),
}) satisfies SchemaAsType<CreateGiftDto>;
