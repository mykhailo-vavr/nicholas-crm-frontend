import { FCWithChildren } from '@/types';

export type StandardContainerProps = {
  title?: string;
  classes?: {
    root?: string;
    title?: string;
    content?: string;
  };
};

export type StandardContainerFC = FCWithChildren<StandardContainerProps>;
