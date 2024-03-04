import { Add as AddIcon } from '@mui/icons-material';
import { Link, SearchInput } from '@/components/UI/atoms';
import { StandardContainer } from '@/components/UI/organisms';
import { ChildrenContainerFC } from './types';
import ChildrenData from './data';
import { WEB_ROUTES } from '@/settings';
import { StandardBar } from '@/components/UI/molecules';

const ChildrenContainer: ChildrenContainerFC = ({ searchParams }) => (
  <StandardContainer title="Список дітей">
    <StandardBar>
      <SearchInput />
      <Link href={WEB_ROUTES.PRIVATE.CREATE_CHILD}>
        <AddIcon />
        Додати дитину
      </Link>
    </StandardBar>
    <ChildrenData searchParams={searchParams} />
  </StandardContainer>
);

export default ChildrenContainer;
