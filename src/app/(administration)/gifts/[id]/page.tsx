import { parseId } from '@/utils';
import GiftContainer from './container';
import { PageWithIdParam } from '@/types';

const GiftPage: PageWithIdParam = async ({ params }) => {
  const id = await parseId(params.id);

  return <GiftContainer id={id} />;
};

export default GiftPage;
