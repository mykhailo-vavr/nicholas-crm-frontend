import { FC, ReactNode } from 'react';
import { RolesEnum } from '@/api/__generated__';

export type RenderIfRoleProps = {
  role: RolesEnum;
  children: ReactNode;
};

export type RenderIfRoleFC = FC<RenderIfRoleProps>;
