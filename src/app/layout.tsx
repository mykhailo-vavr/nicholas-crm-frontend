import { MainLayout } from '@/components/layouts';
import Providers from '@/components/providers';
import { FCWithChildren } from '@/types';
import '@/api/config';

export const metadata = {
  title: 'Миколай про тебе не забуде',
  description: 'Миколай про тебе не забуде',
};

const RootLayout: FCWithChildren = ({ children }) => (
  <html lang="en">
    <body>
      <Providers>
        <MainLayout>{children}</MainLayout>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
