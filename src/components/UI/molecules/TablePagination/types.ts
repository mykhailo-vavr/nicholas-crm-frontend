import { FC } from 'react';

export type TablePaginationProps = {
  count: number;
  rowsPerPageOptions: number[];
};

export type TablePaginationFC = FC<TablePaginationProps>;
