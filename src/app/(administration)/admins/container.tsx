import { Add as AddIcon } from '@mui/icons-material';
import { Link, SearchInput } from '@/components/UI/atoms';
import { StandardBar } from '@/components/UI/molecules';
import { AdminsContainerFC } from './types';
import { WEB_ROUTES } from '@/settings';
import AdminsData from './data';
import { RenderIf } from '@/components/helpers';
import { StandardContainer } from '@/components/UI/organisms';

const AdminsContainer: AdminsContainerFC = ({ searchParams }) => (
  <StandardContainer title="Список адміністраторів">
    <StandardBar>
      <SearchInput />
      <RenderIf condition={1}>
        <Link href={WEB_ROUTES.PRIVATE.CREATE_ADMIN}>
          <AddIcon />
          Додати адміністратора
        </Link>
      </RenderIf>
    </StandardBar>
    <AdminsData searchParams={searchParams} />
  </StandardContainer>
);

export default AdminsContainer;
