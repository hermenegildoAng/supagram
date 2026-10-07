import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BottomNav from "./components/BottomNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supagram",
  description: "App inspirada en Instagram - Curso de Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {23

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="pb-20">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
