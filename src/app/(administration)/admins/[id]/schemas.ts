import { object } from 'zod';
import { idSchema, notEmptyString } from '@/utils';

export const activateAdminSchema = object({
  id: idSchema(),
});

export const deactivateAdminSchema = object({
  id: idSchema(),
  deactivationReason: notEmptyString(),
});
