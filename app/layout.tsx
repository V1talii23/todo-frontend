import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToDo App",
  description:
    "A simple and fast ToDo app to create, manage, and organize your tasks and notes in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" dark max-h-screen bg-zinc-50 dark:bg-black" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased   min-h-screen m-0 px-6 bg-zinc-50 dark:bg-black  `}
      >
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </TanStackProvider>
      </body>
    </html>
  );
}
