import { FC } from 'react';
import { ColumnsType } from '@/types';

export type TableHeadProps = {
  columns: ColumnsType;
};

export type TableHeadFC = FC<TableHeadProps>;
