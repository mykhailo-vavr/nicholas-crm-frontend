import { RolesEnum } from '@/api/generated';
import { FCWithChildren } from '@/types';

export type RenderIfRoleProps = {
  role: RolesEnum;
};

export type RenderIfRoleFC = FCWithChildren<RenderIfRoleProps>;
