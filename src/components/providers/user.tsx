'use client';

import { useEffect, useMemo, useState } from 'react';
import { UserContext, UserState } from '@/contexts';
import { FCWithChildren } from '@/types';
import { UserService } from '@/api/client';
import { RenderIf } from '../helpers';

const UserProvider: FCWithChildren = ({ children }) => {
  const [user, setUser] = useState<UserState>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const data = await UserService.userControllerGetMe();
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    asyncWrapper();
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      clearUser: () => {
        setUser(null);
      },
    }),
    [user],
  );

  return (
    <RenderIf condition={!loading}>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </RenderIf>
  );
};

export default UserProvider;
