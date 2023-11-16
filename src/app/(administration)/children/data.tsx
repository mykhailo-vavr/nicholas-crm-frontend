import { ChildService } from '@/api/generated';
import { Link } from '@/components/UI/atoms';
import { Table } from '@/components/UI/organisms';
import { ChildrenDataFC } from './types';
import { t } from '@/utils';
import { webRoutes } from '@/settings';

const ChildrenData: ChildrenDataFC = async ({ searchParams }) => {
  const data = await ChildService.childControllerGetAll(searchParams);

  const columns = [
    { title: "Ім'я", id: 'firstName' },
    { title: 'Прізвище', id: 'lastName' },
    { title: 'Адреса', id: 'address' },
    { title: 'Стать', id: 'Gender' },
    { title: 'Телефон', id: 'phone' },
    { title: '', id: 'action' },
  ];

  const rows = data.items.map((item) => ({
    firstName: item.firstName,
    lastName: item.lastName,
    address: [item.address.street, item.address.city].join(', '),
    gender: t.gender[item.gender],
    phone: item.phone,
    action: <Link href={webRoutes.private.CHILD.replace('[id]', String(item.id))}>Більше</Link>,
    id: item.id,
  }));

  return <Table columns={columns} rows={rows} count={data.meta.total} />;
};

export default ChildrenData;
