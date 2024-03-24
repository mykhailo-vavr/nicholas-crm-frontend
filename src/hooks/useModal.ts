'use client';

import { useCallback, useMemo, useState } from 'react';

export const useModal = (initialState = false): [boolean, () => void, () => void] => {
  const [isOpen, setOpen] = useState(initialState);

  const open = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return useMemo(() => [isOpen, open, close], [close, isOpen, open]);
};
