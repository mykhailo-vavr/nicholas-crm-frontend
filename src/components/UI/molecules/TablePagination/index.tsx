'use client';

import { useCallback, useMemo } from 'react';
import { TablePagination as MUITablePagination } from '@mui/material';
import { useQueryHandler } from '@/hooks';
import { TablePaginationFC } from './types';
import { InputOnchangeEvent } from '@/types';

const TablePagination: TablePaginationFC = ({ rowsPerPageOptions, ...props }) => {
  const initialQuery = useMemo(() => ({ page: 0, limit: rowsPerPageOptions[0] }), [rowsPerPageOptions]);
  const {
    query: { page, limit },
    setQuery,
  } = useQueryHandler(initialQuery, 100);

  const onPageChange = useCallback(
    (event: unknown, newPage: number) => {
      setQuery((prevState) => ({ ...prevState, page: newPage }));
    },
    [setQuery],
  );

  const onRowsPerPageChange = useCallback(
    (event: InputOnchangeEvent) => {
      setQuery({ limit: +event.target.value, page: 0 });
    },
    [setQuery],
  );

  return (
    <MUITablePagination
      component="div"
      page={page}
      onPageChange={onPageChange}
      rowsPerPageOptions={rowsPerPageOptions}
      rowsPerPage={limit}
      onRowsPerPageChange={onRowsPerPageChange}
      {...props}
    />
  );
};

export default TablePagination;
