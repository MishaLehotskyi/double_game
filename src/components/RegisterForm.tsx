'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { api } from '@/utils/api';
import {useAuth} from "@/contexts/AuthContext";
import toast from 'react-hot-toast';

type Props = {
  onClose: () => void;
};

type RegisterFormData = {
  email: string;
  password: string;
  metamaskId: string;
};

export const RegisterForm = ({ onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<RegisterFormData>({
    mode: 'onSubmit',
  });
  const { login } = useAuth();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: RegisterFormData) => {
    api.post('auth/register', data).then(res => {
      const token = res.data.access_token;
      localStorage.setItem('access_token', token);
      login(token)
      toast.success('Регистрация успешна!');
    }).catch((error) => {
      if (error.status === 400) {
        toast.error('Такой Email или Metamask уже зарегистрирован!');
      } else {
        toast.error('Произошла ошибка!');
      }
    });

    onClose();
  };

  if (!isMounted) return null;

  return (
    <div className="w-full max-w-sm bg-[#2a2a2a] p-4 rounded-xl text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Регистрация</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Неверный формат email',
              },
            })}
            type="email"
            placeholder="Email"
            className="border border-gray-500 bg-transparent px-4 py-2 rounded-md w-full"
          />
          {isSubmitted && errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('password', { required: 'Пароль обязателен' })}
            type="password"
            placeholder="Пароль"
            className="border border-gray-500 bg-transparent px-4 py-2 rounded-md w-full"
          />
          {isSubmitted && errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('metamaskId', {
              required: 'Адрес Metamask обязателен',
              pattern: {
                value: /^0x[a-fA-F0-9]{40}$/,
                message: 'Некорректный адрес Metamask',
              },
            })}
            type="text"
            placeholder="Адрес Metamask"
            className="border border-gray-500 bg-transparent px-4 py-2 rounded-md w-full"
          />
          {isSubmitted && errors.metamaskId && (
            <p className="text-red-400 text-sm mt-1">{errors.metamaskId.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white hover:bg-purple-700 py-2 rounded-md w-full"
        >
          Зарегистрироваться
        </button>
      </form>

      <button onClick={onClose} className="text-sm text-gray-300 mt-4 block mx-auto">
        Закрыть
      </button>
    </div>
  );
};

