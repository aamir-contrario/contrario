"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { bestCalls } from "@/lib/data";

const marketBorder: Record<string, string> = {
  US: "border-l-violet-400",
  Asia: "border-l-cyan-400",
  Europe: "border-l-fuchsia-400",
};

export default function BestCalls() {
  return (
    <section id="calls" className="relative py-24 sm:py-32" style={{ backgroundColor: "#0e0408" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Best Calls"
          title="Track record, not talk."
          description="A selection of past pitches, with entry thesis, the realized return, and the lesson each one taught."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {bestCalls.map((call, i) => (
            <motion.div
              key={call.ticker}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative overflow-hidden rounded-2xl glass border-l-4 p-6 sm:p-7 ${marketBorder[call.market]}`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] font-bold leading-none text-white/[0.04]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{call.ticker}</h3>
                  <p className="text-sm text-white/50">{call.company}</p>
                </div>
                <span className="rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 border border-cyan-400/30 px-4 py-1.5 text-lg font-bold text-cyan-300">
                  {call.returnPct}
                </span>
              </div>

              <p className="relative mt-2 text-xs uppercase tracking-widest text-white/40">
                {call.period}
              </p>

              <p className="relative mt-5 text-sm leading-relaxed text-white/70">{call.thesis}</p>

              <div className="relative mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-300">
                  The Lesson
                </p>
                <p className="mt-1.5 text-sm italic leading-relaxed text-white/75">
                  &ldquo;{call.lesson}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
