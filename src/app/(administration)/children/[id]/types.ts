import { FC } from 'react';

export type PageWithIdParamProps = {
  params: {
    id: number;
  };
};

export type PageWithIdParam = FC<PageWithIdParamProps>;

export type FCWithId = FC<{ id: number }>;
