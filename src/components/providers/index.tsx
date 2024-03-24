import { FCWithChildren } from '@/types';
import UserProvider from './user';
import ThemeProvider from './Theme/theme';
import StylesProvider from './Styles';

const Providers: FCWithChildren = ({ children }) => (
  <UserProvider>
    <ThemeProvider>
      <StylesProvider>{children}</StylesProvider>
    </ThemeProvider>
  </UserProvider>
);

export default Providers;
