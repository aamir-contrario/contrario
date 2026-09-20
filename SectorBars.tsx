"use client";

import { motion } from "framer-motion";
import { sectorSplit } from "@/lib/data";

export default function SectorBars() {
  const max = Math.max(...sectorSplit.map((s) => s.pct));

  return (
    <div className="flex flex-col gap-5">
      {sectorSplit.map((s, i) => (
        <div key={s.sector}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-white/75">{s.sector}</span>
            <span className="font-semibold text-white">{s.pct}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(s.pct / max) * 100}%` }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
