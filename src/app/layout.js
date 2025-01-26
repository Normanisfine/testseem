import { Geist } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header/Header";
import { AppSidebar } from "@/components/sideBar/AppSideBar";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <ClerkProvider>
          <div className="layout-main">
            <AppSidebar />
            <main className="main-content">
              <Header />
              {children}
            </main>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
