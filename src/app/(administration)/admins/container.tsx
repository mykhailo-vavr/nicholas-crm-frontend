import { Add as AddIcon } from '@mui/icons-material';
import { Link, SearchInput } from '@/components/UI/atoms';
import { StandardContainer } from '@/components/UI/organisms';
import { AdminsContainerFC } from './types';
import { StandardBar } from '@/components/UI/molecules';
import { WEB_ROUTES } from '@/settings';
import AdminsData from './data';
import { RenderIfSuperAdmin } from '@/components/helpers';

const AdminsContainer: AdminsContainerFC = ({ searchParams }) => (
  <StandardContainer title="Список адміністраторів">
    <StandardBar>
      <SearchInput />
      <RenderIfSuperAdmin>
        <Link href={WEB_ROUTES.PRIVATE.CREATE_ADMIN}>
          <AddIcon />
          Додати адміністратора
        </Link>
      </RenderIfSuperAdmin>
    </StandardBar>
    <AdminsData searchParams={searchParams} />
  </StandardContainer>
);

export default AdminsContainer;
