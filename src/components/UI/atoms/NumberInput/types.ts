import { FC } from 'react';
import { NumericFormatProps } from 'react-number-format';
import { InputProps } from '../Input/types';

export type NumberInputProps = { min?: number; max?: number } & InputProps & NumericFormatProps;

export type NumberInputFC = FC<NumberInputProps>;
