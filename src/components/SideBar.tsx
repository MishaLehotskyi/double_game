'use client';

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const tabs: { label: string; href: string; target?: boolean }[] = [
    { label: "Цена Токена DBE", href: "/price" },
    { label: "Дорожная карта проекта", href: "/roadmap" },
    { label: "Токеномика токена DBE", href: "/tokenomic" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contacts" },
    { label: "Чат бот Telegram", href: "https://t.me/DobelGameBot", target: true },
  ];

  const toggle = () => setOpen(prev => !prev);

  return (
    <div className={"relative w-[0px] h-[0px] hidden md:block"}>
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
          {tabs.map(({ label, href, target }) => (
            <Link key={label} target={target ? "_blank" : "_self"} className="bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-2xl px-[10px] h-[30px] flex items-center" href={href}>{label}</Link>
          ))}
        </ul>
      </div>
    </div>
  );
}