'use client';

import { useCallback } from 'react';
import { Button } from '@/components/UI/atoms';
import { WEB_ROUTES } from '@/settings';
import { SignOutButtonFC } from './types';

const SignOutButton: SignOutButtonFC = () => {
  const onClick = useCallback(() => {}, []);

  return (
    <Button onClick={onClick} className="h-5">
      Вийти
    </Button>
  );
};

export default SignOutButton;
