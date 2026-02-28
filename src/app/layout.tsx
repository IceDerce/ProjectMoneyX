import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProjectMoneyX",
  description: "Personal Finance Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-text-dark font-display transition-colors duration-200`}
      >
        <div className="flex min-h-screen w-full flex-row overflow-hidden">
          <Sidebar />
          <main className="flex-1 lg:ml-64 overflow-y-auto overflow-x-hidden bg-background-light dark:bg-[#0F172A]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
