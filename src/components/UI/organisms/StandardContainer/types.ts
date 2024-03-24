import { FC, ReactNode } from 'react';
import { ClassNames } from '@/types';

export type StandardContainerProps = {
  title?: string;
  className?: string;
  classes?: ClassNames<'title' | 'container'>;
  children?: ReactNode;
};

export type StandardContainerFC = FC<StandardContainerProps>;
