import { Add as AddIcon } from '@mui/icons-material';
import { Link, SearchInput } from '@/components/UI/atoms';
import { StandardContainer } from '@/components/UI/organisms';
import { GiftsContainerFC } from './types';
import GiftsData from './data';
import { webRoutes } from '@/settings';
import { StandardBar } from '@/components/UI/molecules';

const GiftsContainer: GiftsContainerFC = ({ searchParams }) => (
  <StandardContainer title="Список подарунків">
    <StandardBar>
      <SearchInput />
      <Link href={webRoutes.private.CREATE_GIFT}>
        <AddIcon />
        Додати подарунок
      </Link>
    </StandardBar>
    <GiftsData searchParams={searchParams} />
  </StandardContainer>
);

export default GiftsContainer;
