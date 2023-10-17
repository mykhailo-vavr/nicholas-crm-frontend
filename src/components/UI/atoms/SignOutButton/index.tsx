'use client';

import { useCallback } from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/UI/atoms';
import { webRoutes } from '@/settings';
import { SignOutButtonFC } from './types';

const SignOutButton: SignOutButtonFC = () => {
  const onClick = useCallback(() => signOut({ callbackUrl: webRoutes.public.LANDING_PAGE }), []);

  return (
    <Button onClick={onClick} className="h-5">
      Вийти
    </Button>
  );
};

export default SignOutButton;
