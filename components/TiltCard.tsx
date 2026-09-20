"use client";

import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  maxTilt?: number;
};

export default function TiltCard({
  children,
  className = "",
  glow = true,
  maxTilt = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hovered, setHovered] = useState(false);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const glowXPct = useTransform(px, (v) => `${v * 100}%`);
  const glowYPct = useTransform(py, (v) => `${v * 100}%`);
  const glowBackground = useMotionTemplate`radial-gradient(220px circle at ${glowXPct} ${glowYPct}, rgba(139,92,246,0.18), transparent 70%)`;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") {
      setIsTouch(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width;
    const ny = (event.clientY - rect.top) / rect.height;
    px.set(nx);
    py.set(ny);
    rotateY.set((nx - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - ny) * maxTilt * 2);
  }

  function handlePointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "touch") setHovered(true);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    px.set(0.5);
    py.set(0.5);
    setHovered(false);
  }

  return (
    <div className="tilt-wrap h-full">
      <motion.div
        ref={ref}
        onPointerMove={isTouch ? undefined : handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={isTouch ? undefined : handlePointerLeave}
        style={
          isTouch
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className={`relative h-full rounded-2xl glass shimmer-border overflow-hidden transition-shadow duration-300 ${
          hovered ? "shadow-[0_20px_60px_-15px_rgba(139,92,246,0.35)]" : ""
        } ${className}`}
      >
        {glow && !isTouch ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
            style={{
              background: glowBackground,
              opacity: hovered ? 1 : 0,
            }}
          />
        ) : null}
        <div className="relative h-full" style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
