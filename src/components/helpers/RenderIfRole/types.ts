import { RolesEnum } from '@/api/__generated__';
import { FCWithChildren } from '@/types';

export type RenderIfRoleProps = {
  role: RolesEnum;
};

export type RenderIfRoleFC = FCWithChildren<RenderIfRoleProps>;
