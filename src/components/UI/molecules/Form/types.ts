import { FC, FormHTMLAttributes } from 'react';
import { ClassNames } from '@/types';

export type FormProps = {
  disabled?: boolean;
  classes?: ClassNames<'container'>;
} & FormHTMLAttributes<HTMLFormElement>;

export type FormFC = FC<FormProps>;
