import { parseId } from '@/utils';
import ChildContainer from './container';
import { PageWithIdParam } from './types';

const ChildPage: PageWithIdParam = async ({ params }) => {
  const id = await parseId(params.id);

  return <ChildContainer id={id} />;
};

export default ChildPage;
