import { useState, useEffect, Dispatch, SetStateAction, useMemo } from 'react';

export const useDebounceState = <T>(initialValue: T, delay = 500): [T, T, Dispatch<SetStateAction<T>>, boolean] => {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);

    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
      setPending(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return useMemo(() => [debouncedValue, value, setValue, pending], [debouncedValue, pending, value]);
};
