"use client";

import { useEffect, useRef } from "react";

// Lightweight dependency-free "3D" rotating globe rendered on a <canvas>.
// Points are distributed on a sphere and projected with a simple
// perspective transform, then rotated each frame. This intentionally
// avoids a heavy WebGL dependency so it stays fast and reliable.
// This component touches `window`/`canvas` and must only ever be
// rendered via next/dynamic with { ssr: false } from the parent.
export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;
    let angle = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    type Point = { x: number; y: number; z: number; ring: number };
    const points: Point[] = [];
    const RING_COUNT = 14;
    const PER_RING = 24;
    const radius = 1;

    for (let ring = 0; ring < RING_COUNT; ring++) {
      const lat = Math.PI * (ring / (RING_COUNT - 1) - 0.5); // -PI/2..PI/2
      const ringRadius = Math.cos(lat);
      const y = Math.sin(lat);
      const pointsInRing = Math.max(6, Math.round(PER_RING * ringRadius));
      for (let i = 0; i < pointsInRing; i++) {
        const lon = (Math.PI * 2 * i) / pointsInRing;
        points.push({
          x: radius * ringRadius * Math.cos(lon),
          y: radius * y,
          z: radius * ringRadius * Math.sin(lon),
          ring,
        });
      }
    }

    function resize() {
      const parent = canvas?.parentElement;
      if (!canvas || !parent) return;
      const size = Math.min(parent.clientWidth, parent.clientHeight || parent.clientWidth);
      width = parent.clientWidth;
      height = parent.clientHeight || parent.clientWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      void size;
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.42;

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      // Sort by projected z (after rotation) for simple painter's algorithm.
      const projected = points.map((p) => {
        const x = p.x * cosA - p.z * sinA;
        const z = p.x * sinA + p.z * cosA;
        return { x, y: p.y, z, ring: p.ring };
      });
      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        const perspective = 1 / (2 - p.z);
        const sx = cx + p.x * scale * perspective;
        const sy = cy + p.y * scale * perspective;
        const depth = (p.z + 1) / 2; // 0 (back) .. 1 (front)
        const size = 1.1 + depth * 1.8;

        const hue = 258 - depth * 70; // violet -> cyan-ish
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 85%, ${55 + depth * 20}%, ${0.25 + depth * 0.6})`;
        ctx.fill();
      }

      // Outer rim glow
      const rim = ctx.createRadialGradient(cx, cy, scale * 0.7, cx, cy, scale * 1.05);
      rim.addColorStop(0, "rgba(139,92,246,0)");
      rim.addColorStop(1, "rgba(139,92,246,0.15)");
      ctx.beginPath();
      ctx.arc(cx, cy, scale * 1.02, 0, Math.PI * 2);
      ctx.fillStyle = rim;
      ctx.fill();
    }

    function frame() {
      angle += prefersReducedMotion ? 0 : 0.0028;
      draw();
      rafId = requestAnimationFrame(frame);
    }

    resize();
    draw();
    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(frame);
    }

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
