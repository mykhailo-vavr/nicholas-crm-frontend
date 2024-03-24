import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/contexts';
import { WEB_ROUTES } from '@/settings';
import { tokenClientService } from '@/services/client';

export const useSignOut = () => {
  const { clearUser } = useUserContext();
  const { push } = useRouter();

  return useCallback(() => {
    tokenClientService.delete.access();
    clearUser();
    push(WEB_ROUTES.PUBLIC.LANDING_PAGE);
  }, [clearUser, push]);
};
