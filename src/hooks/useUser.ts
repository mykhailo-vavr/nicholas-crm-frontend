'use client';

import { useSession } from 'next-auth/react';

export const useUser = () => {
  const session = useSession();

  return { isAuthenticated: !!session.data, ...session.data?.user };
};
