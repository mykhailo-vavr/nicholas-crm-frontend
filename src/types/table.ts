export type ColumnType = {
  id: string;
  title: string;
  sorter?: boolean;
};

export type ColumnsType = ColumnType[];

export type RowType<R extends object> = { id: string | number } & R;

export type RowsType<R extends object> = RowType<R>[];
