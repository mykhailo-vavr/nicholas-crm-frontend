import { GetUserByPkResponse } from '@/api/__generated__';

export type UserState = GetUserByPkResponse | null;

export type UserContextType = {
  user: UserState;
  setUser: (data: GetUserByPkResponse) => void;
  clearUser: () => void;
};
