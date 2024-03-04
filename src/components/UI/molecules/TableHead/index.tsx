'use client';

import { useCallback, useMemo } from 'react';
import { TableHead as MUITableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';
import { SortOrderEnum } from '@/api/__generated__';
import { useQueryHandler } from '@/hooks';
import { TableHeadFC } from './types';

const TableHead: TableHeadFC = ({ columns }) => {
  const initialQuery = useMemo(
    () => ({
      sort: '',
      order: SortOrderEnum.ASC,
    }),
    [],
  );
  const {
    query: { sort, order },
    setQuery,
  } = useQueryHandler(initialQuery);

  const onClick = useCallback(
    (id: string) => {
      setQuery({
        sort: id,
        order: sort === id && order === SortOrderEnum.ASC ? SortOrderEnum.DESC : SortOrderEnum.ASC,
      });
    },
    [order, setQuery, sort],
  );

  return (
    <MUITableHead>
      <TableRow>
        {columns.map(({ id, title }) => (
          <TableCell key={id} className="font-semibold" sortDirection={sort === id ? order : false}>
            <TableSortLabel
              active={id === sort}
              direction={sort === id ? order : SortOrderEnum.ASC}
              onClick={() => onClick(id)}
            >
              {title}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </MUITableHead>
  );
};

export default TableHead;
