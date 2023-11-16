'use client';

import { useCallback, useState } from 'react';

export const useDialog = (initialState = false): [boolean, () => void, () => void] => {
  const [isOpen, setOpen] = useState(initialState);

  const open = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return [isOpen, open, close];
};
