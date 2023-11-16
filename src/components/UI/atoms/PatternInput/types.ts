import { FC } from 'react';
import { PatternFormatProps } from 'react-number-format';
import { InputProps } from '../Input/types';

export type PatternInputProps = InputProps & PatternFormatProps;

export type PatternInputFC = FC<PatternInputProps>;
