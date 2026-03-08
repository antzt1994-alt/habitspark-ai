'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') !== 'false';
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    if (newMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-3xl">✨</span>
          <span className="text-2xl font-bold spark-title">HabitSpark AI</span>
        </Link>

        <div className="flex items-center gap-8 text-lg">
          <Link href="/" className="hover:text-violet-400 transition">Home</Link>
          <Link href="/instructions" className="hover:text-violet-400 transition">Instructions</Link>
          <Link href="/faq" className="hover:text-violet-400 transition">FAQ</Link>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-2xl bg-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}