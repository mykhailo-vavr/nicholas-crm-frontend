import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, FC, ReactNode, MouseEvent } from 'react';

export type FCWithIdParam = FC<{
  params: {
    id: number;
  };
}>;

export type FCWithChildren<P = unknown> = FC<{ children: ReactNode } & P>;

export type FCWithSearchParams<S extends object, P = unknown> = FC<{ searchParams: S } & P>;

export type FCWithId = FC<{ id: number }>;

export type FCWithClassName<P = unknown> = FC<{ className?: string } & P>;

export type FCWithSlug<P = unknown> = FC<{ slug: string } & P>;

export type InputOnChangeEvent = ChangeEvent<HTMLInputElement>;

export type SelectOnChangeEvent = SelectChangeEvent<unknown>;

export type ButtonOnClickEvent = MouseEvent<HTMLButtonElement>;

export type AnchorOnClickEvent = MouseEvent<HTMLAnchorElement>;

export type OnClickHandler = (event: ButtonOnClickEvent) => void | Promise<void>;

export type ClassNames<K extends string> = {
  [key in K]?: string;
} & {
  root?: string;
};
