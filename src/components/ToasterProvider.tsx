'use client';

import { Toaster } from 'react-hot-toast';

export const ToasterProvider = () => {
  return <Toaster position="top-left" toastOptions={{ duration: 3000 }} />;
};
