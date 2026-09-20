"use client";

import { motion } from "framer-motion";
import { geoSplit } from "@/lib/data";

const SIZE = 220;
const STROKE = 26;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function DonutChart() {
  let cumulative = 0;

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-10">
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90">
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={STROKE}
          />
          {geoSplit.map((slice, i) => {
            const length = (slice.pct / 100) * CIRCUMFERENCE;
            const offset = CIRCUMFERENCE - cumulative;
            cumulative += length;
            return (
              <motion.circle
                key={slice.region}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke={slice.color}
                strokeWidth={STROKE}
                strokeLinecap="butt"
                strokeDasharray={`${length} ${CIRCUMFERENCE - length}`}
                initial={{ strokeDashoffset: CIRCUMFERENCE }}
                whileInView={{ strokeDashoffset: offset }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
                opacity={0.92}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-semibold text-white">3</span>
          <span className="text-xs uppercase tracking-widest text-white/50">Regions</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {geoSplit.map((slice) => (
          <div key={slice.region} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: slice.color }}
              />
              <span className="text-sm text-white/75">{slice.region}</span>
            </div>
            <span className="text-sm font-semibold text-white">{slice.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
