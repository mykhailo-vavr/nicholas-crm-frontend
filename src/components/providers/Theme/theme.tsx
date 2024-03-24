'use client';

import { ThemeProvider as ThemeProviderOriginal } from '@mui/material';
import { theme } from '@/styles';
import { FCWithChildren } from '@/types';

const ThemeProvider: FCWithChildren = ({ children }) => (
  <ThemeProviderOriginal theme={theme}>{children}</ThemeProviderOriginal>
);

export default ThemeProvider;
