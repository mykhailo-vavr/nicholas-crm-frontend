import { Header } from '@/components/UI/organisms';
import { FCWithChildren } from '@/types';

const MainLayout: FCWithChildren = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
