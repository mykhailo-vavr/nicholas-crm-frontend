import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext, UserState } from '@/contexts';
import { tokenClientService } from '@/services/client';
import { WEB_ROUTES } from '@/settings';

export const useSignIn = () => {
  const { setUser } = useUserContext();
  const { push } = useRouter();

  return useCallback(
    ({ token, userData }: { token: string; userData: NonNullable<UserState> }) => {
      tokenClientService.set.access(token);
      setUser(userData);
      push(WEB_ROUTES.PRIVATE.PROFILE);
    },
    [push, setUser],
  );
};
