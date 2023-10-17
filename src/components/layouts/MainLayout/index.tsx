import { Header } from '@/components/UI/organisms';
import { MainLayoutFC } from './types';

const MainLayout: MainLayoutFC = ({ children }) => (
  <div className="mx-auto max-w-6xl px-6">
    <Header />
    <div className="flex flex-col items-center pt-6">{children}</div>
  </div>
);

export default MainLayout;
