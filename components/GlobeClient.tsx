"use client";

import dynamic from "next/dynamic";

// Globe uses canvas + window, so it must never be rendered on the server.
const Globe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => (
    <div className="aspect-square w-full rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-400/10" />
  ),
});

export default function GlobeClient({ className = "" }: { className?: string }) {
  return (
    // Purely decorative — pointer-events-none + touch-action: none keeps it
    // from ever intercepting a scroll/swipe gesture on touch devices.
    <div className={`pointer-events-none touch-none ${className}`}>
      <Globe />
    </div>
  );
}
