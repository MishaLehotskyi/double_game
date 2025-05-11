'use client';

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const tabs = ["Цена Токена DBE", "Дорожная карта проекта", "Токеномика токена  DBE", "О нас", "Контакты", "Чат бот Telegram"]

  const toggle = () => setOpen(prev => !prev);

  return (
    <div className={"relative w-[0px] h-[0px]"}>
      <button
        onClick={toggle}
        className={"z-51 h-[50px] w-[50px] gap-[10px] bg-gray-600 cursor-pointer transition-all duration-300 hover:bg-gray-900 rounded-full flex justify-center items-center absolute top-[10px] left-[20px]"}>
        {open ? <CloseIcon/> : <MenuIcon/>}
      </button>

      {/* Боковая панель */}
      <div
        className={`absolute top-[10px] left-0 h-full pl-[80px] w-[370px] bg-transparent text-white z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="p-[10px] space-y-2 bg-gray-700 rounded-2xl">
          {tabs.map((tab) => (
            <li key={tab} className="bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-2xl px-[10px] h-[30px] flex items-center">{tab}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}