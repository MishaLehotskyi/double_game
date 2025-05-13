import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import SidebarMenu from "@/components/SideBar";
import React from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Double Game",
  description: "Первый в мире токен лотерея",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nav: { label: string; href: string }[] = [
    { label: "ГЛАВНАЯ", href: "/" },
    { label: "МИНИ БАНК", href: "/mini-bank" },
    { label: "СТАНДАРТ БАНК", href: "/standard-bank" },
    { label: "МЕГА БАНК", href: "/mega-bank" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <header className="flex flex-row md:h-[80px] justify-between items-center border-b border-purple-900 md:px-[20px] md:pb-[10px] md:mt-[10px] h-[60px] px-[10px] pb-[5px]">
          <div className={"md:w-[80px] md:h-[80px] md:pt-[23px] flex items-center overflow-hidden rounded-full w-[50px] h-[50px] pt-[12px]"}>
            <Image src={"/doublegame.png"} alt={"doublegame"} height={80} width={80}/>
          </div>
          <nav className={"hidden md:block"} >
            <ul className={"flex flex-row gap-[50px]"}>
              {nav.map(({ label, href }) => (
                <Link href={href} key={label} className={"relative group cursor-pointer transition-all duration-300 hover:text-purple-900"}>
                  {label}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-900 transition-all duration-300 group-hover:w-full"/>
                </Link>
              ))}
            </ul>
          </nav>
          <div className={"flex flex-row p-[5px] md:gap-[10px] gap-[5px]"}>
            <div
              className={"md:h-[50px] bg-gray-600 transition-all duration-300 hover:bg-gray-900 rounded-full flex justify-center items-center group h-[40px]"}>
              <div
                className="text-white font-semibold transition-colors px-[10px] md:text-lg text-sm">Войти
              </div>
            </div>
            <div
              className={"md:h-[50px] bg-purple-600 transition-all duration-300 hover:bg-purple-900 rounded-full flex justify-center items-center group h-[40px]"}>
              <div
                className="text-white font-semibold transition-colors px-[10px] md:text-lg text-sm">Регистрация
              </div>
            </div>
            <MobileMenu />
          </div>
        </header>
        <main>
          <SidebarMenu/>
          {children}
        </main>
      </body>
    </html>
  );
}
