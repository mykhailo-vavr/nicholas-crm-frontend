import { coerce, nativeEnum, object, string } from 'zod';
import { CreateChildDto, GenderEnum, NeedStatusEnum } from '@/api/__generated__';
import { SchemaAsType } from '@/types';
import { getCurrentYear, phone, notEmptyString, addressStringSchema } from '@/utils';

export const createChildSchema = object({
  firstName: notEmptyString().max(20),
  lastName: notEmptyString().max(20),
  birthYear: coerce.number().min(2000).max(getCurrentYear()),
  gender: nativeEnum(GenderEnum),
  phone: phone(),
  needStatus: nativeEnum(NeedStatusEnum),
  address: addressStringSchema(),
  flatNumber: coerce.number().int().min(1),
  notes: string().optional(),
}) satisfies SchemaAsType<Omit<CreateChildDto, 'address'>>;
