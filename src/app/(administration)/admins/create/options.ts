import { RolesEnum } from '@/api/generated';
import { Options } from '@/types';
import { t } from '@/utils';

export const adminRolesOptions: Options<RolesEnum> = [
  {
    label: t.roles[RolesEnum.ADMIN],
    value: RolesEnum.ADMIN,
  },
  {
    label: t.roles[RolesEnum.SUPER_ADMIN],
    value: RolesEnum.SUPER_ADMIN,
  },
];
