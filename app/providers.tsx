'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ApolloWrapper } from './_components/ApolloWrapper'
import { useState } from 'react';
import { getUser, User, setUser as setUserToLocal } from './_lib/auth';
import { UserInfoContext } from './_contexts/UserInfoContext';

const UserInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserInfo] = useState<User | null>(getUser());
  const setUser = (user: User) => {
    setUserInfo(user);
    setUserToLocal(user);
  };
  return <UserInfoContext.Provider value={{ user, setUser }}>{children}</UserInfoContext.Provider>;
};

export const Providers = ({ children }: { children: React.ReactNode }) =>
  <ApolloWrapper>
    <ChakraProvider>
      <UserInfoProvider>
        {children}
      </UserInfoProvider>
    </ChakraProvider>
  </ApolloWrapper>