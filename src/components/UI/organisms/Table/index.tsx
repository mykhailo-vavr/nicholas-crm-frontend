import { Table as MUITable, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { RenderIf } from '@/components/helpers';
import { TableProps } from './types';
import { TableHead, TablePagination } from '../../molecules';

const Table = <T extends object>({ columns, rows, count = -1, rowsPerPageOptions = [20, 40] }: TableProps<T>) => (
  <div>
    <TableContainer>
      <MUITable sx={{ minWidth: 650 }}>
        <TableHead columns={columns} />
        <TableBody>
          <RenderIf condition={!rows.length}>
            <TableRow>
              <TableCell colSpan={12} className="border-none text-center">
                Немає даних з такими критеріями
              </TableCell>
            </TableRow>
          </RenderIf>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {Object.entries(row).map(([key, value]) => (
                <RenderIf condition={key !== 'id'} key={value}>
                  <TableCell>{value}</TableCell>
                </RenderIf>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
    <TablePagination rowsPerPageOptions={rowsPerPageOptions} count={count} />
  </div>
);

export default Table;
