import { TextFieldProps } from '@mui/material';
import { FC } from 'react';

export type InputProps = {
  errorText?: string;
  permanentHelperText?: boolean;
} & TextFieldProps;

export type InputFC = FC<InputProps>;
