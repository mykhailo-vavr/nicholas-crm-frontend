import { nativeEnum, object, string } from 'zod';
import { email, notEmptyString, phone } from '@/utils';
import { RolesEnum } from '@/api/__generated__';

export const createAdminSchema = object({
  firstName: notEmptyString(),
  lastName: notEmptyString(),
  email: email(),
  phone: phone(),
  role: nativeEnum(RolesEnum),
  password: string().min(1),
});
