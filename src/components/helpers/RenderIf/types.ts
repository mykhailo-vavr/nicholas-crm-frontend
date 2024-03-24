import { FC, ReactNode } from 'react';

export type RenderIfProps = {
  condition: any;
  children: ReactNode;
};

export type RenderIfFC = FC<RenderIfProps>;
