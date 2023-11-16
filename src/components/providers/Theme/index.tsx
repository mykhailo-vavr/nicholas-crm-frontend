'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { theme } from '@/styles';
import { FCWithChildren } from '@/types';

const ThemeProvider: FCWithChildren = ({ children }) => <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;

export default ThemeProvider;
