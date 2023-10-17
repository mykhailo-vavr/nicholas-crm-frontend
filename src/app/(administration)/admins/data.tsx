import { UsersService } from '@/api/generated';
import { Table } from '@/components/UI/organisms';
import { AdminsDataFC } from './types';

const AdminsData: AdminsDataFC = async ({ searchParams }) => {
  const data = await UsersService.userControllerGetAll(searchParams);

  const columns = [
    { title: "Ім'я", id: 'firstName' },
    { title: 'Прізвище', id: 'lastName' },
    { title: 'Телефон', id: 'phone' },
    { title: 'Імейл', id: 'email' },
  ];

  const rows = data.items.map((item) => ({
    firstName: item.firstName,
    lastName: item.lastName,
    phone: item.phone,
    email: item.email,
    id: item.id,
  }));

  return <Table columns={columns} rows={rows} count={data.meta.total} />;
};

export default AdminsData;
