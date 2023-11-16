import { FormHTMLAttributes } from 'react';
import { FCWithChildren } from '@/types';

export type FormProps = { classes?: { root?: string } } & FormHTMLAttributes<HTMLFormElement>;

export type FormFC = FCWithChildren<FormProps>;
