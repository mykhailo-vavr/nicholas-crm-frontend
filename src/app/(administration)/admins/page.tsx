import AdminsContainer from './container';
import { AdminsPageFC } from './types';

const AdminsPage: AdminsPageFC = ({ searchParams }) => <AdminsContainer searchParams={searchParams} />;

export default AdminsPage;
