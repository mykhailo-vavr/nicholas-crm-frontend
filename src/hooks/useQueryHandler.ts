'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useTransition } from 'react';
import { createQueryString } from '@/utils';
import { useDebounceState } from './useDebounceState';

export const useQueryHandler = <T extends Record<string, string | number>>(initialQuery: T, delay = 200) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [debouncedQuery, query, setQuery] = useDebounceState<T>(initialQuery, delay);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const updatedInitialQuery = Object.fromEntries(
      Object.entries(initialQuery).map(([key, value]) => {
        const param = searchParams.get(key) || value;

        if (param && typeof value === 'number') {
          return [key, +param];
        }

        return [key, param];
      }),
    ) as T;

    setQuery(updatedInitialQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    startTransition(() => {
      router.replace(`${pathname}?${createQueryString(debouncedQuery)}`);
    });
  }, [debouncedQuery, pathname, router, searchParams]);

  return useMemo(
    () => ({ debouncedQuery, query, setQuery, pending: isPending }),
    [debouncedQuery, isPending, query, setQuery],
  );
};
