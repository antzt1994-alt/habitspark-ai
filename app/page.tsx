'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-20">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-violet-400 text-2xl mb-4">✨ Official Help & Settings Guide</div>
          <h1 className="text-7xl font-bold spark-title tracking-tight mb-6">
            Enrich Your Life,<br />One Spark at a Time
          </h1>
          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto">
            Your complete guide to mastering HabitSpark AI
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        <Link href="/instructions" className="group">
          <div className="bg-zinc-900 p-10 rounded-3xl h-full hover:bg-violet-950/30 transition-all border border-white/5 hover:border-violet-500/30">
            <div className="text-6xl mb-6">📋</div>
            <h3 className="text-3xl font-semibold mb-4">Instructions</h3>
            <p className="text-zinc-400">Step-by-step onboarding, settings, and AI Coach explained with real screenshots from the app.</p>
          </div>
        </Link>

        <Link href="/faq" className="group">
          <div className="bg-zinc-900 p-10 rounded-3xl h-full hover:bg-violet-950/30 transition-all border border-white/5 hover:border-violet-500/30">
            <div className="text-6xl mb-6">❓</div>
            <h3 className="text-3xl font-semibold mb-4">FAQ</h3>
            <p className="text-zinc-400">Quick answers to the most common questions about streaks, AI suggestions, and more.</p>
          </div>
        </Link>

        <div className="bg-zinc-900 p-10 rounded-3xl h-full border border-white/5">
          <div className="text-6xl mb-6">🚀</div>
          <h3 className="text-3xl font-semibold mb-4">Back to the App</h3>
          <p className="text-zinc-400">Ready to start sparking? Open HabitSpark AI on your phone.</p>
          <a href="your-app-link-here" className="mt-8 inline-block bg-violet-600 hover:bg-violet-500 px-8 py-4 rounded-2xl text-lg">Open App →</a>
        </div>
      </section>
    </div>
  );
}