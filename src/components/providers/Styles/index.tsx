import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { FCWithChildren } from '@/types';
import '@/styles/global.css';

const StylesProvider: FCWithChildren = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    {children}
  </StyledEngineProvider>
);

export default StylesProvider;
