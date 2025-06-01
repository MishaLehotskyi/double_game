'use client'
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const SessionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem('visited');

    if (!alreadyVisited) {
      setIsOpen(true);
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  if (typeof window === 'undefined') return null;

  const modalRoot = document.getElementById('portal-root');
  if (!modalRoot || !isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-[#2a2a2a] p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2">Пройдите регистрацию и получите 20 DBE. Запуск Лотереи 26.06.2025 НО сейчас у вас есть возможность стать ранним инвестором проекта и купить токен DBE</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Закрыть
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default SessionModal;
