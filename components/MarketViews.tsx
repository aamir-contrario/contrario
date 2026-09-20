"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { marketViews } from "@/lib/data";

const marketColor: Record<string, string> = {
  US: "text-violet-300 border-violet-400/30 bg-violet-500/10",
  Asia: "text-cyan-300 border-cyan-400/30 bg-cyan-500/10",
  Europe: "text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-500/10",
};

export default function MarketViews() {
  return (
    <section id="views" className="relative py-24 sm:py-32" style={{ backgroundColor: "#02020a" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Market Views"
          title="What we're watching right now."
          description="Short-form commentary on the themes shaping current positioning across each market."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {marketViews.map((view, i) => (
            <motion.article
              key={view.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-6 sm:p-7 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${marketColor[view.market]}`}
                  >
                    {view.market}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/50">
                    {view.category}
                  </span>
                </div>
                <span className="text-xs text-white/40">{view.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{view.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{view.commentary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
