import { FCWithChildren } from '@/types';
import StylesProvider from './Styles';
import SessionProvider from './Session';
import ThemeProvider from './Theme';

const Providers: FCWithChildren = async ({ children }) => (
  <StylesProvider>
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  </StylesProvider>
);

export default Providers;
