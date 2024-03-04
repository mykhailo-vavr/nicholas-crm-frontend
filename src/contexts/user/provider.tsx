import { useEffect, useMemo, useState } from 'react';
import { UserContext } from './context';
import { FCWithChildren } from '@/types';
import { UserService } from '@/api/__generated__';
import { UserState } from './types';

const UserProvider: FCWithChildren = ({ children }) => {
  const [user, setUser] = useState<UserState>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncWrapper = async () => {
      const data = await UserService.userControllerGetMe();
      setUser(data);
    };

    asyncWrapper().then(() => {
      setLoading(false);
    });
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

  if (loading) {
    return null;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
