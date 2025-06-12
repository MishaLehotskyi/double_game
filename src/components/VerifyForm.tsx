'use client';

import { useForm } from 'react-hook-form';
import { api } from '@/utils/api';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';
import {useAuthModal} from "@/contexts/AuthModalContext";

type Props = {
  onClose: () => void;
};

type CodeFormData = {
  code: string;
};

export const VerifyForm = ({ onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<CodeFormData>({ mode: 'onSubmit' });

  const { login } = useAuth();
  const { email } = useAuthModal();

  const onResend = async () => {
    try {
      await api.post('auth/send-code', { email });
      toast.success('Код отправлен на почту');
    } catch (error) {
      console.log(error)
      toast.error('Ошибка при отправке письма');
    }
  }

  const onSubmit = async (data: CodeFormData) => {
    try {
      const res = await api.post('auth/verify-code', {
        email: email,
        code: data.code,
      });

      const token = res.data.access_token;
      localStorage.setItem('access_token', token);
      login(token);
      toast.success('Регистрация подтверждена!');
      onClose();
    } catch (error: any) {
      if (error?.response?.status === 400) {
        toast.error('Неверный или просроченный код');
      } else {
        toast.error('Ошибка при подтверждении');
      }
    }
  };

  return (
    <div className="w-full max-w-sm bg-[#2a2a2a] p-4 rounded-xl text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Подтверждение</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input
            {...register('code', {
              required: 'Код обязателен',
              minLength: {value: 6, message: 'Код должен быть 6-значным'},
              maxLength: {value: 6, message: 'Код должен быть 6-значным'},
            })}
            type="text"
            placeholder="Код из email"
            className="border border-gray-500 bg-transparent px-4 py-2 rounded-md w-full"
          />
          {isSubmitted && errors.code && (
            <p className="text-red-400 text-sm mt-1">{errors.code.message}</p>
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
      <button onClick={onResend} className="text-sm text-gray-300 mt-4 block mx-auto">
        Получить код повторно
      </button>
    </div>
  );
};