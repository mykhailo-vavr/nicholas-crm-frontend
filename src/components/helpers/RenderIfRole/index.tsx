import { useUser } from '@/hooks';
import RenderIf from '../RenderIf';
import { RenderIfRoleFC } from './types';

const RenderIfRole: RenderIfRoleFC = ({ children, role }) => {
  const user = useUser();

  return <RenderIf condition={user.role === role}>{children}</RenderIf>;
};

export default RenderIfRole;
