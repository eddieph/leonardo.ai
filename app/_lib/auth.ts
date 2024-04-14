import { isBrowser } from "./util";
export interface User {
  username: string;
  jobTitle: string;
}

export const isAuthenticated = (): boolean => {
  let userStr;
  if (isBrowser()) {
    userStr = localStorage.getItem('user');
  }
  return !!userStr;
};

export const getUser = (): User | null => {
  if (isBrowser()) {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
  }

  return null;
};

export const setUser = (user: User) => {
  if (isBrowser()) {
    localStorage.setItem('user', JSON.stringify(user));
  }
};