'use client'
import {useEffect, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = ["ГЛАВНАЯ", "МИНИ БАНК", "СТАНДАРТ БАНК", "МЕГА БАНК", "Цена Токена DBE", "Дорожная карта проекта", "Токеномика токена  DBE", "О нас", "Контакты", "Чат бот Telegram"];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Бургер-іконка */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </button>

      {/* Шторка */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center gap-[10px] text-white text-xl">
          {/* Закрити */}
          <button
            className="absolute top-[15px] right-[15px] text-white"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>

          {/* Пункти меню */}
          {navItems.map((item) => (
            <button
              key={item}
              className="hover:text-purple-500 transition text-base border rounded-full py-[5px] px-[10px] border-purple-900 shadow-[0_0_20px_5px_rgba(128,0,128,0.5)]"
              onClick={() => {
                // зробити навігацію, якщо треба
                setOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
