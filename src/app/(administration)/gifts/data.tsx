import { GiftService } from '@/api/generated';
import { Link } from '@/components/UI/atoms';
import { Table } from '@/components/UI/organisms';
import { GiftsDataFC } from './types';
import { t } from '@/utils';
import { webRoutes } from '@/settings';

const GiftsData: GiftsDataFC = async ({ searchParams }) => {
  const data = await GiftService.giftControllerGetAll(searchParams);

  const columns = [
    { title: 'Назва', id: 'name' },
    { title: 'Тип', id: 'type' },
    { title: 'Підтип', id: 'subtype' },
    { title: 'Мін. вік', id: 'minAge' },
    { title: 'Макс. вік', id: 'maxAge' },
    { title: '', id: 'action' },
  ];

  const rows = data.items.map((item) => ({
    name: item.name,
    type: t.gift.type[item.type],
    subtype: t.gift.subtype[item.subtype],
    minAge: item.minAge,
    maxAge: item.maxAge,
    action: <Link href={webRoutes.private.GIFT.replace('[id]', String(item.id))}>Більше</Link>,
    id: item.id,
  }));

  return <Table columns={columns} rows={rows} count={data.meta.total} />;
};

export default GiftsData;
