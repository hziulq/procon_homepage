import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./components/NextAuthProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.TITLE || "",
  description: process.env.DESCRIPTION || "",
};

const backgroundImageUrl = process.env.BACKGROUND_IMAGE_URL || "/images/background1.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col antialiased text-slate-50 selection:bg-blue-500/30">
        <NextAuthProvider>
          <div className="fixed inset-0 bg-slate-950/70 -z-10 pointer-events-none" />
          <Image src={backgroundImageUrl} alt="background" width={1920} height={1080} className="fixed inset-0 w-full h-full object-cover -z-20" />
          <div className="flex-1 flex flex-col w-full h-full z-0 relative">
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
