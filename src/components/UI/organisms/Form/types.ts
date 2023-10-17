import { FormHTMLAttributes } from 'react';
import { FCWithChildren } from '@/types';

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

export type FormFC = FCWithChildren<FormProps>;