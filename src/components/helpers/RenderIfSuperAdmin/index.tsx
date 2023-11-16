import { RolesEnum } from '@/api/generated';
import { FCWithChildren } from '@/types';
import RenderIfRole from '../RenderIfRole';

const RenderIfSuperAdmin: FCWithChildren = ({ children }) => (
  <RenderIfRole role={RolesEnum.SUPER_ADMIN}>{children}</RenderIfRole>
);

export default RenderIfSuperAdmin;
