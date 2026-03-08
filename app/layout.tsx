import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "HabitSpark AI - Enrich Your Life, One Spark at a Time",
  description: "Official help & settings guide for HabitSpark AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}