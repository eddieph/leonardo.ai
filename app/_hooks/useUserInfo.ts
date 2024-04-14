import { useContext } from 'react';
import { UserInfoContext } from '../_contexts/UserInfoContext';

export const useUserInfo = () => {
  const { user, setUser} = useContext(UserInfoContext);
  return { user, setUser };
}
