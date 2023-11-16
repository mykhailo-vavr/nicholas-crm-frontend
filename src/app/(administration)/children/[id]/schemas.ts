import { object } from 'zod';
import { idSchema, notEmptyString } from '@/utils';

export const activateChildSchema = object({
  id: idSchema(),
});

export const deactivateChildSchema = object({
  id: idSchema(),
  deactivationReason: notEmptyString(),
});
