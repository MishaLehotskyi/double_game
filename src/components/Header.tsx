'use client'
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import React, {useState} from "react";
import {useAuthModal} from "@/contexts/AuthModalContext";
import { useAuth } from '@/contexts/AuthContext';
import IconButton from "@mui/material/IconButton";
import {CircularProgress, Menu, MenuItem} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Header() {
  const nav: { label: string; href: string }[] = [
    { label: "ГЛАВНАЯ", href: "/" },
    { label: "МИНИ БАНК", href: "/mini-bank" },
    { label: "СТАНДАРТ БАНК", href: "/standard-bank" },
    { label: "МЕГА БАНК", href: "/mega-bank" },
  ];
  const { openLogin, openRegister } = useAuthModal();
  const { user, logout, loading } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      className="flex flex-row md:h-[80px] justify-between items-center border-b border-purple-900 md:px-[20px] md:pb-[10px] md:mt-[10px] h-[60px] px-[10px] pb-[5px]">
      <div className={"flex items-center gap-[20px]"}>
        <div
          className={"md:w-[80px] md:h-[80px] md:pt-[23px] flex items-center overflow-hidden rounded-full w-[50px] h-[50px] pt-[12px]"}>
          <Image src={"/doublegame.png"} alt={"doublegame"} height={80} width={80}/>
        </div>
        <a target={"_blank"}
          href={"https://pancakeswap.finance/swap?outputCurrency=0xc1f021EA477323A26B587a7d8d4C408A9F0c0989&inputCurrency=0x55d398326f99059fF775485246999027B3197955"}
          className={"bg-[#2a2a2a] border border-yellow-600 rounded-full shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] bg-yellow-600 md:p-[10px] md:text-2xl text-sm px-[5px] py-[10px]"}>Купить
          DBE</a>
      </div>
      <nav className={"hidden md:block"}>
        <ul className={"flex flex-row gap-[50px]"}>
          {nav.map(({label, href}) => (
            <Link href={href} key={label}
              className={"relative group cursor-pointer transition-all duration-300 hover:text-purple-500 border rounded-full p-[10px] border-purple-900 shadow-[0_0_20px_5px_rgba(128,0,128,0.5)]"}>
              {label}
            </Link>
          ))}
        </ul>
      </nav>
      <div className={"flex flex-row items-center p-[5px] md:gap-[10px] gap-[5px]"}>
        {loading ? (
          <div className="flex justify-center items-center h-[20px] w-[20px] mr-[60px] md:h-[40px] md:w-[40px]">
            <CircularProgress sx={{ color: 'white', width: '100% !important', height: '100% !important' }} />
          </div>
        ) : <>
          {user ? (
            <>
              <IconButton
                onClick={handleClick}
                aria-controls={open ? 'chevron-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                size="large"
                color="inherit"
                className={"!p-0"}
              >
                <ExpandMoreIcon
                  className={`transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </IconButton>

              <Menu
                id="chevron-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
              >
                <MenuItem
                  onClick={() => {
                    handleClose()
                    logout()
                  }}
                >
                  Выйти
                </MenuItem>
              </Menu>
              <div className={"text-base md:text-xl"}>{user.email}</div>
            </>

          ) : (
            <>
              <div
                className={"md:h-[50px] bg-gray-600 transition-all duration-300 hover:bg-gray-900 rounded-full flex justify-center items-center group h-[40px]"}>
                <div
                  onClick={openLogin}
                  className="text-white font-semibold transition-colors px-[5px] md:text-lg text-sm">Войти
                </div>
              </div>
              <div
                className={"md:h-[50px] bg-purple-600 transition-all duration-300 hover:bg-purple-900 rounded-full flex justify-center items-center group h-[40px]"}>
                <div
                  onClick={openRegister}
                  className="text-white font-semibold transition-colors px-[5px] md:text-lg text-sm">Регистрация
                </div>
              </div>
            </>
          )}
        </>
        }
        <MobileMenu/>
      </div>
    </header>
  )
}