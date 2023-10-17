import { ReactNode } from 'react';

export type ColumnType<R extends object> = {
  id: string;
  title: string;
  sorter?: boolean;
  render?: (value: any, row: R) => ReactNode;
};

export type ColumnsType<R extends object> = ColumnType<R>[];

export type RowType<R extends object> = { id: string | number } & R;

export type RowsType<R extends object> = RowType<R>[];
