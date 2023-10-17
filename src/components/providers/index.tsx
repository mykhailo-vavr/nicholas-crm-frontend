import { FCWithChildren } from '@/types';
import StylesProvider from './styles';
import SessionProvider from './session';
import ThemeProvider from './theme';

const Providers: FCWithChildren = async ({ children }) => (
  <StylesProvider>
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  </StylesProvider>
);

export default Providers;
