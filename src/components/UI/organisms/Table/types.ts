import { ColumnsType, RowsType } from '@/types';

export type TableProps<R extends object> = {
  columns: ColumnsType<R>;
  rows: RowsType<R>;
  count?: number;
  rowsPerPageOptions?: number[];
};
