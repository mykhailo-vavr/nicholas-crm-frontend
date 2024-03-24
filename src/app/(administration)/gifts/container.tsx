import { Add as AddIcon } from '@mui/icons-material';
import GiftsData from './data';
import { Link, SearchInput } from '@/components/UI/atoms';
import { StandardBar } from '@/components/UI/molecules';
import { GiftsContainerFC } from './types';
import { WEB_ROUTES } from '@/settings';
import { StandardContainer } from '@/components/UI/organisms';

const GiftsContainer: GiftsContainerFC = ({ searchParams }) => (
  <StandardContainer title="Список подарунків">
    <StandardBar>
      <SearchInput />
      <Link href={WEB_ROUTES.PRIVATE.CREATE_GIFT}>
        <AddIcon />
        Додати подарунок
      </Link>
    </StandardBar>
    <GiftsData searchParams={searchParams} />
  </StandardContainer>
);

export default GiftsContainer;
