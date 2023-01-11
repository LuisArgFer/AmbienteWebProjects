import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import PropTypes from 'prop-types';

const AUTH = 'AUTH';
const ActualUser = 'ActualUser';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(AUTH));

  const User = window.localStorage.getItem(ActualUser);

  const login = useCallback(function (user_data) {
    window.localStorage.setItem(AUTH, true);
    window.localStorage.setItem(ActualUser,user_data)
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(AUTH, true);
    window.localStorage.removeItem(ActualUser);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      User
    }),
    [User,isAuthenticated, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object
};

export function useAuthContext() {
  return useContext(AuthContext);
}