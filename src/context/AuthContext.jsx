import React, { createContext, useEffect, useState } from 'react';
import { setAuthToken } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) {
      setToken(storedToken);
      setAuthToken(storedToken);
    }
    setLoadingAuth(false);
  }, []);

  const login = (newToken, userId) => {
    setToken(newToken);
    setAuthToken(newToken);
    localStorage.setItem('jwt', newToken);
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setToken(null);
    setAuthToken(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');
  };

  const value = {
    token,
    loadingAuth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
