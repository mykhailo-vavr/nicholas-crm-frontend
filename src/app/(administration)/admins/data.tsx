import { UserService } from '@/api/server';
import { Link } from '@/components/UI/atoms';
import { Table } from '@/components/UI/organisms';
import { WEB_ROUTES } from '@/settings';
import { AdminsDataFC } from './types';

const AdminsData: AdminsDataFC = async ({ searchParams }) => {
  const data = await UserService.userControllerGetAll(searchParams);

  const columns = [
    { title: "Ім'я", id: 'firstName' },
    { title: 'Прізвище', id: 'lastName' },
    { title: 'Телефон', id: 'phone' },
    { title: 'Імейл', id: 'email' },
    { title: '', id: 'action' },
  ];

  const rows = data.items.map((item) => ({
    firstName: item.firstName,
    lastName: item.lastName,
    phone: item.phone,
    email: item.email,
    action: <Link href={WEB_ROUTES.PRIVATE.ADMIN.replace('[id]', String(item.id))}>Більше</Link>,
    id: item.id,
  }));

  return <Table columns={columns} rows={rows} count={data.meta.total} />;
};

export default AdminsData;
