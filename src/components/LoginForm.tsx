'use client';

import { useForm } from 'react-hook-form';
import { api } from '@/utils/api';
import { useEffect, useState } from 'react';
import {useAuth} from "@/contexts/AuthContext";

type Props = {
  onClose: () => void;
};

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginForm = ({ onClose }: Props) => {
  const {
    register,
    handleSubmit,
  } = useForm<LoginFormData>({
    mode: 'onSubmit',
  });
  const { login } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    api.post('auth/login', data).then(res => {
      const token = res.data.access_token;
      localStorage.setItem('access_token', token);
      login(token)
    });

    onClose();
  };

  if (!isMounted) return null;

  return (
    <div className="w-full max-w-sm bg-[#2a2a2a] p-4 rounded-xl text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Вход</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="border border-gray-500 bg-transparent px-4 py-2 rounded-md w-full"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Пароль"
          className="border border-gray-500 bg-transparent px-4 py-2 rounded-md w-full"
        />
        <button type="submit" className="bg-purple-600 text-white py-2 rounded-md w-full">
          Войти
        </button>
      </form>
      <button onClick={onClose} className="text-sm text-gray-300 mt-4 block mx-auto">
        Закрыть
      </button>
    </div>
  );
};