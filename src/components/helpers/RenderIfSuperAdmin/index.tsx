import { RolesEnum } from '@/api/__generated__';
import { FCWithChildren } from '@/types';
import RenderIfRole from '../RenderIfRole';

const RenderIfSuperAdmin: FCWithChildren = ({ children }) => (
  <RenderIfRole role={RolesEnum.SUPER_ADMIN}>{children}</RenderIfRole>
);

export default RenderIfSuperAdmin;
