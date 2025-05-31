import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarMenu from "@/components/SideBar";
import React from "react";
import SessionModal from "@/components/SessionModal";
import { AuthModalProvider } from "@/contexts/AuthModalContext";
import { AuthProvider } from '@/contexts/AuthContext';
import Header from "@/components/Header";
import AuthModals from "@/components/AuthModals";
import {ToasterProvider} from "@/components/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DoubelGame — двойная игра DBE",
  description: "DoubelGame | токен DBE — блокчейн-лотерея | двойная лотерея | ДБЭ",
  keywords: ["doublegame", "doubelgame",
    "двойная игра", "двойная лотерея",
    "DBE", "Токен DBE", "Токен ДБЭ", "ДБЭ",
    "dabelgame", "dablgame", "dabeelgame",
    "крипто игра", "крипто-лотерея", "блокчейн игра", "блокчейн лотерея",
    "лотерея на токене", "игра на токене", "розыгрыш DBE"
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ToasterProvider />
        <AuthModalProvider>
          <AuthProvider>
            <Header />
            <main>
              <SidebarMenu/>
              <SessionModal/>
          
              {children}
              <AuthModals />
            </main>
            <div id="modal-root"/>
          </AuthProvider>
        </AuthModalProvider>
      </body>
    </html>
  );
}
