import { FC } from 'react';
import { TextFieldProps } from '@mui/material';

export type InputProps = {
  errorText?: string;
  permanentHelperText?: boolean;
} & TextFieldProps;

export type InputFC = FC<InputProps>;
