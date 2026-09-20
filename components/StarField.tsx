"use client";

import { useMemo } from "react";

type Star = {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
};

export default function StarField({ count = 60 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Deterministic pseudo-random so server/client output matches (no hydration mismatch).
      const seed = (i * 9301 + 49297) % 233280;
      const rand = seed / 233280;
      const rand2 = ((i * 233 + 71) % 1000) / 1000;
      const rand3 = ((i * 977 + 13) % 1000) / 1000;
      return {
        top: `${(rand * 100).toFixed(2)}%`,
        left: `${(rand2 * 100).toFixed(2)}%`,
        size: 1 + Math.round(rand3 * 2),
        delay: `${(rand2 * 4).toFixed(2)}s`,
        duration: `${(3 + rand3 * 3).toFixed(2)}s`,
      };
    });
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
