import { getServerSession as getServerSessionNextAuth } from 'next-auth';
import { authOptions } from '@/settings';

export const getServerSession = async () => {
  const session = await getServerSessionNextAuth(authOptions);
  return session;
};

export const getServerUser = async () => {
  const session = await getServerSession();
  return { isAuthenticated: !!session, ...session?.user };
};

export const getServerApiToken = async () => {
  const session = await getServerSession();
  return session?.user?.accessToken || '';
};
