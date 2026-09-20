"use client";

import { motion } from "framer-motion";
import { brand, heroStats, markets } from "@/lib/data";
import StarField from "./StarField";
import StockTicker from "./StockTicker";
import GlobeClient from "./GlobeClient";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-pulse absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[100px]" />
        <div
          className="glow-pulse absolute top-40 right-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-[90px]"
          style={{ animationDelay: "1.5s" }}
        />
        <StarField count={70} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8 hidden sm:block">
          <div className="mx-auto h-40 w-40 opacity-80">
            <GlobeClient />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-cyan-200">
            {brand.liveBadge}
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-6 flex flex-wrap items-center justify-center gap-3"
        >
          {markets.map((m) => (
            <span
              key={m.code}
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-200"
            >
              <span aria-hidden>{m.flag}</span>
              {m.code}
            </span>
          ))}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Contrarian thinking.
          <br />
          <span className="shimmer-text">Global conviction.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base text-white/60 sm:text-lg"
        >
          Contrario is an independent global equity research practice covering the US,
          Asia and Europe — publishing high-conviction picks, live portfolio positioning
          and unfiltered market views where the crowd isn&apos;t looking.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-2 text-sm font-medium text-white/40"
        >
          {brand.tagline} <span className="text-white/60">by {brand.by}</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="min-h-11 w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3.5 text-sm font-semibold leading-none text-[#02020a] shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] transition-transform hover:scale-[1.03] sm:w-auto flex items-center justify-center"
          >
            View Portfolio
          </a>
          <a
            href="#pitches"
            className="min-h-11 w-full rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold leading-none text-white transition-colors hover:bg-white/10 sm:w-auto flex items-center justify-center"
          >
            View Conviction Picks
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4 sm:gap-8"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs uppercase tracking-widest text-white/45 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative mt-16 sm:mt-20"
      >
        <StockTicker />
      </motion.div>
    </section>
  );
}
