'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  const createSparkle = (x: number, y: number) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'spark';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (Math.random() > 0.85) createSparkle(e.clientX, e.clientY);
    };
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Hero */}
      <section className="pt-20 pb-16 text-center relative">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-7xl font-bold mb-4 spark-title tracking-tight">
            Master <span className="text-violet-400">HabitSpark AI</span>
          </h1>
          <p className="text-2xl text-zinc-400 mb-8">Turn your Sparks into lifelong habits</p>
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-2xl px-8 py-4 text-lg">
            Your official help &amp; settings guide
          </div>
        </div>
      </section>

      {/* Onboarding Mastery */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center spark-title">Onboarding Mastery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "What brings you here?", desc: "Choose goals that actually light you up" },
              { title: "Pick your first Sparks", desc: "Start with just 1–3 habits (you can add more later)" },
              { title: "Set your Rhythm", desc: "Morning, Afternoon, Evening or Custom nudges" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-800 p-8 rounded-3xl hover:bg-violet-950/30 transition-all"
              >
                <div className="text-violet-400 text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Settings Deep Dive */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center spark-title">Settings Deep Dive</h2>
          <div className="space-y-8">
            <div className="bg-zinc-900 p-10 rounded-3xl">
              <h3 className="text-3xl mb-6">Psychological Engine</h3>
              <p className="text-xl text-zinc-400">How your “why” (health, productivity, inner peace) creates smarter suggestions</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-3xl">
              <h3 className="text-3xl mb-6">AI Learning Model</h3>
              <p className="text-xl text-zinc-400">What data it uses + how to train it faster for richer suggestions every week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-zinc-500">
        Built for HabitSpark AI users • Made with ❤️ and lots of sparkles
      </footer>
    </div>
  );
}