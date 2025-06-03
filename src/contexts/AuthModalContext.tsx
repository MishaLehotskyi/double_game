'use client';

import { createContext, useContext, useState } from 'react';

type AuthModalContextType = {
  openLogin: () => void;
  openRegister: () => void;
  openBuy: () => void;
  openVerify: (email: string) => void;
  close: () => void;
  modal: 'login' | 'register' | 'verify' | 'buy' | null;
  email: string;
};

const AuthModalContext = createContext<AuthModalContextType | null>(null);

export const useAuthModal = () => {
  const ctx = useContext(AuthModalContext);
  if (!ctx) throw new Error('useAuthModal must be used within AuthModalProvider');
  return ctx;
};

export const AuthModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<'login' | 'register'| 'verify' | 'buy' | null>(null);
  const [email, setEmail] = useState('');

  const openLogin = () => setModal('login');
  const openRegister = () => setModal('register');
  const openBuy = () => setModal('buy');
  const openVerify = (email: string) => {
    setModal('verify')
    setEmail(email)
  };
  const close = () => setModal(null);

  return (
    <AuthModalContext.Provider value={{ openLogin, openRegister, openVerify, close, openBuy, modal, email }}>
      {children}
    </AuthModalContext.Provider>
  );
};
