import { FC } from 'react';
import { InputProps } from '../Input/types';

export type SelectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  options: SelectOption[];
} & InputProps;

export type SelectFC = FC<SelectProps>;
