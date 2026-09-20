"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import DonutChart from "./DonutChart";
import SectorBars from "./SectorBars";
import { returnStats, benchmarkComparison } from "@/lib/data";

export default function PortfolioSnapshot() {
  const maxBenchmark = Math.max(...benchmarkComparison.map((b) => b.value));

  return (
    <section id="portfolio" className="relative py-24 sm:py-32" style={{ backgroundColor: "#0e0408" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Portfolio Snapshot"
          title="Positioned across three markets."
          description="A live-style view of how the book is currently allocated — by geography and by sector — alongside performance against relevant benchmarks."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {returnStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-xs uppercase tracking-widest text-white/45">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold text-cyan-300">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white/50">
              Geographic Split
            </h3>
            <DonutChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white/50">
              Sector Breakdown
            </h3>
            <SectorBars />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 glass rounded-2xl p-6 sm:p-8"
        >
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white/50">
            Contrario vs. MSCI Europe &amp; S&amp;P 500 (YTD)
          </h3>
          <div className="flex flex-col gap-5">
            {benchmarkComparison.map((b, i) => (
              <div key={b.name} className="flex items-center gap-4">
                <span className="w-40 shrink-0 text-sm text-white/70 sm:w-48">{b.name}</span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(b.value / maxBenchmark) * 100}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      i === 0
                        ? "bg-gradient-to-r from-violet-500 to-cyan-400"
                        : "bg-white/25"
                    }`}
                  />
                </div>
                <span className="w-14 shrink-0 text-right text-sm font-semibold text-white">
                  {b.value}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
