'use client'
import {useEffect, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";

const navItems: { label: string; href: string; target?: boolean }[] = [
  { label: "ГЛАВНАЯ", href: "/" },
  { label: "МИНИ БАНК", href: "/mini-bank" },
  { label: "СТАНДАРТ БАНК", href: "/standard-bank" },
  { label: "МЕГА БАНК", href: "/mega-bank" },
  { label: "Цена Токена DBE", href: "/price" },
  { label: "Дорожная карта проекта", href: "/roadmap" },
  { label: "Токеномика токена DBE", href: "/tokenomic" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
  { label: "Чат бот Telegram", href: "https://t.me/DobelGameBot", target: true },
];

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
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center gap-[10px] text-white text-xl">
          <button
            className="absolute top-[15px] right-[15px] text-white"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>

          {navItems.map(({ label, href, target }) => (
            <Link
              href={href}
              key={label}
              target={target ? "_blank" : "_self"}
              className="hover:text-purple-500 transition text-base border rounded-full py-[5px] px-[10px] border-purple-900 shadow-[0_0_20px_5px_rgba(128,0,128,0.5)]"
              onClick={() => {
                setOpen(false);
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
