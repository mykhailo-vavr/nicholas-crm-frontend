import { parseId } from '@/utils';
import GiftContainer from './container';
import { FCWithIdParam } from '@/types';

const GiftPage: FCWithIdParam = async ({ params }) => {
  const id = await parseId(params.id);

  return <GiftContainer id={id} />;
};

export default GiftPage;
