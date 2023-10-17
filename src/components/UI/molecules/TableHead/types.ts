import { FC } from 'react';
import { ColumnsType } from '@/types';

export type TableHeadProps<R extends object> = {
  columns: ColumnsType<R>;
};

export type TableHeadFC<R extends object> = FC<TableHeadProps<R>>;
