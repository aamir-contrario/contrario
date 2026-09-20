"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import ConvictionRing from "./ConvictionRing";
import { convictionPicks } from "@/lib/data";

const marketColor: Record<string, string> = {
  US: "text-violet-300 border-violet-400/30 bg-violet-500/10",
  Asia: "text-cyan-300 border-cyan-400/30 bg-cyan-500/10",
  Europe: "text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-500/10",
};

export default function ConvictionPicks() {
  return (
    <section id="pitches" className="relative py-24 sm:py-32" style={{ backgroundColor: "#02020a" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Conviction Picks"
          title="Where the highest-conviction capital sits."
          description="Three names, one from each market, each backed by a full thesis — not a screen output."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {convictionPicks.map((pick, i) => (
            <motion.div
              key={pick.ticker}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group"
            >
              <TiltCard className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${marketColor[pick.market]}`}
                    >
                      {pick.market}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{pick.ticker}</h3>
                    <p className="text-sm text-white/50">{pick.company}</p>
                  </div>
                  <ConvictionRing score={pick.conviction} />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-white/70">{pick.thesis}</p>

                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-white/10 pt-5 text-sm sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-white/40">Catalyst</p>
                    <p className="mt-1 text-white/80">{pick.catalyst}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-white/40">Upside</p>
                    <p className="mt-1 font-semibold text-cyan-300">{pick.upside}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-[11px] uppercase tracking-widest text-white/40">Timeframe</p>
                    <p className="mt-1 text-white/80">{pick.timeframe}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
