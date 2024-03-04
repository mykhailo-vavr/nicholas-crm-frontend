import { parseId } from '@/utils';
import AdminContainer from './container';
import { FCWithIdParam } from '@/types';

const AdminPage: FCWithIdParam = async ({ params }) => {
  const id = await parseId(params.id);

  return <AdminContainer id={id} />;
};

export default AdminPage;
