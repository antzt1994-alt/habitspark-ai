import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HabitSpark AI - Master Your Habits",
  description: "Complete guide to getting the most out of HabitSpark AI",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white">{children}</body>
    </html>
  );
}