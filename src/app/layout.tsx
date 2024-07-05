/**
 * 전역 레이아웃을 정의하여 모든 페이지에 공통으로 적용. 
 * 
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
