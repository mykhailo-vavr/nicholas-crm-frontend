import { StyledEngineProvider } from '@mui/material/styles';
import { FCWithChildren } from '@/types';
import '@/styles/global.css';

const StylesProvider: FCWithChildren = ({ children }) => (
  <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
);

export default StylesProvider;
