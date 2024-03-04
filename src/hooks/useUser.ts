'use client';

import { useMemo } from 'react';
import { useUserContext } from '@/contexts';

export const useUser = () => {
  const { user } = useUserContext();

  return useMemo(() => ({ isAuthenticated: !!user, ...user }), [user]);
};
