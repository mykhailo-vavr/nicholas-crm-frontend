import { SearchInput } from '@/components/UI/atoms';
import { StandardContainer } from '@/components/UI/organisms';
import { AdminsContainerFC } from './types';
import AdminsData from './data';

const AdminsContainer: AdminsContainerFC = ({ searchParams }) => (
  <StandardContainer title="Список адміністраторів">
    <SearchInput />
    <AdminsData searchParams={searchParams} />
  </StandardContainer>
);

export default AdminsContainer;
