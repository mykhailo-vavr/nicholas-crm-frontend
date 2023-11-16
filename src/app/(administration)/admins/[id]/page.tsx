import { parseId } from '@/utils';
import AdminContainer from './container';
import { PageWithIdParam } from '@/types';

const AdminPage: PageWithIdParam = async ({ params }) => {
  const id = await parseId(params.id);

  return <AdminContainer id={id} />;
};

export default AdminPage;
