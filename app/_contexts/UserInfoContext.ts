'use client'

import { createContext } from 'react';
import { User } from '../_lib/auth';

interface UserInfoContextType {
  user: User | null;
  setUser: (user: User) => void;
}

export const UserInfoContext = createContext<UserInfoContextType>({} as UserInfoContextType);

