'use client';

import { Search } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { Input, Spinner } from '@/components/UI/atoms';
import { useQueryHandler } from '@/hooks';
import { SearchInputFC } from './types';
import { cls } from '@/utils';
import { InputOnchangeEvent } from '@/types';
import { RenderIf } from '@/components/helpers';

const SearchInput: SearchInputFC = ({ className, ...props }) => {
  const initialQuery = useMemo(() => ({ search: '' }), []);
  const {
    query: { search },
    setQuery,
    pending,
  } = useQueryHandler(initialQuery);

  const onChange = useCallback(
    (event: InputOnchangeEvent) => {
      setQuery({ search: event.target.value });
    },
    [setQuery],
  );

  return (
    <Input
      placeholder="Пошук"
      size="small"
      value={search}
      onChange={onChange}
      permanentHelperText={false}
      className={cls('w-64', className)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <RenderIf condition={pending}>
              <Spinner size="1.25rem" />
            </RenderIf>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default SearchInput;
