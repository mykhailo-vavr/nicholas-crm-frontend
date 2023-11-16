import { getServerUser } from '@/utils';
import RenderIf from '../RenderIf';
import { RenderIfRoleFC } from './types';

const RenderIfRole: RenderIfRoleFC = async ({ children, role }) => {
  const user = await getServerUser();
  return <RenderIf condition={user.role === role}>{children}</RenderIf>;
};

export default RenderIfRole;
