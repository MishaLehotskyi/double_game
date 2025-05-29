'use client';

import { createContext, useContext, useState } from 'react';

type AuthModalContextType = {
  openLogin: () => void;
  openRegister: () => void;
  close: () => void;
  modal: 'login' | 'register' | null;
};

const AuthModalContext = createContext<AuthModalContextType | null>(null);

export const useAuthModal = () => {
  const ctx = useContext(AuthModalContext);
  if (!ctx) throw new Error('useAuthModal must be used within AuthModalProvider');
  return ctx;
};

export const AuthModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<'login' | 'register' | null>(null);

  const openLogin = () => setModal('login');
  const openRegister = () => setModal('register');
  const close = () => setModal(null);

  return (
    <AuthModalContext.Provider value={{ openLogin, openRegister, close, modal }}>
      {children}
    </AuthModalContext.Provider>
  );
};
