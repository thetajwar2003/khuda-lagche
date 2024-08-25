import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khuda Lagche",
  description: "AI Powered Recipe App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="w-full min-h-screen mx-auto flex px-10 flex-col bg-primary items-center justify-between ">
          {children}
        </main>
      </body>
    </html>
  );
}
