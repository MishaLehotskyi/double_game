'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {api} from "@/utils/api";

type User = {
  id: string;
  email: string;
  metamaskId: string;
  emailVerified: boolean;
};

type AuthContextType = {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async (token: string) => {
    setLoading(true);
    api.get<User>('auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setUser(res.data);
    }).catch(() => {
    }).finally(() => {
      setLoading(false)
    });
  };

  const login = (token: string) => {
    localStorage.setItem('access_token', token);
    fetchUser(token);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
};
