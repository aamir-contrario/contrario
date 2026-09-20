# Contrario

A personal global equity investing brand website — dark glassmorphism, 3D tilt cards, an animated canvas globe, and a scrolling stock ticker.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Notes

- All portfolio, pick, and performance data in `lib/data.ts` is static demo content, not investment advice.
- The globe (`components/Globe.tsx`) is a dependency-free canvas rendering, loaded via `next/dynamic` with `ssr: false` in `components/GlobeClient.tsx` to avoid hydration issues with `window`/`canvas`.
- 3D tilt-on-hover (`components/TiltCard.tsx`) automatically disables on touch input.
- Respects `prefers-reduced-motion` for the globe rotation and all CSS animations.
- This source was written in a sandboxed environment without npm registry access, so `npm install` / `npm run build` have not been run or verified here — please run them locally and let me know if anything needs adjusting.
