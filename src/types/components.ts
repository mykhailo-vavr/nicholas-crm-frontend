import { FC, ReactNode, ChangeEvent } from 'react';

export type PageWithIdParam = FC<{
  params: {
    id: number;
  };
}>;

export type FCWithChildren<P = unknown> = FC<{ children: ReactNode } & P>;

export type FCWithSearchParams<S extends object, P = unknown> = FC<{ searchParams: S } & P>;

export type FCWithId = FC<{ id: number }>;

export type InputOnchangeEvent = ChangeEvent<HTMLInputElement>;
