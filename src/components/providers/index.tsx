import { FCWithChildren } from '@/types';
import StylesProvider from './Styles';
import ThemeProvider from './Theme';
import { UserProvider } from '@/contexts';

const Providers: FCWithChildren = ({ children }) => (
  <UserProvider>
    <ThemeProvider>
      <StylesProvider>{children}</StylesProvider>
    </ThemeProvider>
  </UserProvider>
);

export default Providers;
