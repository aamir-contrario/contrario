// Static demo data for Contrario. No live API, no backend.
// All figures are illustrative and clearly demo/static.

export type Market = "US" | "Asia" | "Europe";

export const brand = {
  name: "contrario",
  by: "Aamir",
  tagline: "Finding edge where others aren't looking.",
  liveBadge: "Global Equity Investor",
};

export const heroStats = [
  { label: "YTD Return", value: "+18.4%" },
  { label: "Markets", value: "3" },
  { label: "Positions", value: "12+" },
] as const;

export const markets: { code: Market; flag: string }[] = [
  { code: "US", flag: "🇺🇸" },
  { code: "Asia", flag: "🌏" },
  { code: "Europe", flag: "🇪🇺" },
];

export const tickerItems = [
  { ticker: "NVDA", change: "+2.4%", up: true },
  { ticker: "HDFC Bank", change: "+1.1%", up: true },
  { ticker: "ASML", change: "-0.6%", up: false },
  { ticker: "META", change: "+3.2%", up: true },
  { ticker: "TSLA", change: "+5.8%", up: true },
  { ticker: "TSM", change: "+0.9%", up: true },
  { ticker: "SAP", change: "-0.3%", up: false },
  { ticker: "ICICI Bank", change: "+1.7%", up: true },
  { ticker: "ASX 200", change: "+0.4%", up: true },
  { ticker: "STOXX 600", change: "-0.2%", up: false },
];

export const geoSplit = [
  { region: "US", pct: 45, color: "#8b5cf6" },
  { region: "Asia", pct: 35, color: "#22d3ee" },
  { region: "Europe", pct: 20, color: "#a78bfa" },
] as const;

export const sectorSplit = [
  { sector: "Technology", pct: 38 },
  { sector: "Financials", pct: 22 },
  { sector: "Healthcare", pct: 15 },
  { sector: "Consumer", pct: 14 },
  { sector: "Energy", pct: 11 },
] as const;

export const returnStats = [
  { label: "YTD Return", value: "+18.4%", tone: "positive" as const },
  { label: "vs S&P 500", value: "+6.2%", tone: "positive" as const },
  { label: "vs Nifty 50", value: "+11.3%", tone: "positive" as const },
  { label: "vs MSCI Europe", value: "+9.7%", tone: "positive" as const },
];

export const benchmarkComparison = [
  { name: "Contrario Portfolio", value: 18.4 },
  { name: "S&P 500", value: 12.2 },
  { name: "MSCI Europe", value: 8.7 },
];

export type ConvictionPick = {
  ticker: string;
  company: string;
  market: Market;
  conviction: number;
  thesis: string;
  catalyst: string;
  upside: string;
  timeframe: string;
};

export const convictionPicks: ConvictionPick[] = [
  {
    ticker: "NVDA",
    company: "NVIDIA Corporation",
    market: "US",
    conviction: 95,
    thesis:
      "The AI infrastructure buildout is still in its early innings. NVIDIA's compute + networking stack remains the default choice for frontier model training and inference at scale, with switching costs compounding each generation.",
    catalyst: "Blackwell Ultra ramp, H2 2026",
    upside: "+35–50%",
    timeframe: "12–18 months",
  },
  {
    ticker: "HDFC",
    company: "HDFC Bank",
    market: "Asia",
    conviction: 88,
    thesis:
      "Post-merger integration friction is fading while deposit market share is rebuilding. A best-in-class franchise trading below its historical premium to the sector is a mispricing that shouldn't persist.",
    catalyst: "Net interest margin recovery",
    upside: "+25–35%",
    timeframe: "18–24 months",
  },
  {
    ticker: "ASML",
    company: "ASML Holding",
    market: "Europe",
    conviction: 82,
    thesis:
      "The sole supplier of EUV lithography sits at the choke point of the entire semiconductor roadmap. Export-control noise has repeatedly created attractive entry points into an irreplaceable monopoly.",
    catalyst: "High-NA EUV adoption ramp",
    upside: "+30–45%",
    timeframe: "18–24 months",
  },
];

export type BestCall = {
  ticker: string;
  company: string;
  market: Market;
  returnPct: string;
  period: string;
  thesis: string;
  lesson: string;
};

export const bestCalls: BestCall[] = [
  {
    ticker: "META",
    company: "Meta Platforms",
    market: "US",
    returnPct: "+312%",
    period: "Oct 2022 – Dec 2023",
    thesis:
      "Bought into peak \"Meta is dead\" pessimism during the metaverse spending panic, when the market was pricing in structural decline rather than a temporary cost overshoot. The underlying ad business and Reels engagement were being ignored entirely.",
    lesson:
      "Maximum pessimism around a cash-generative core business is usually a signal to look closer, not walk away.",
  },
  {
    ticker: "ZOMATO",
    company: "Zomato Ltd.",
    market: "Asia",
    returnPct: "+89%",
    period: "Mar 2023 – Still Holding",
    thesis:
      "India's food-delivery duopoly was being valued like a cash-burning experiment long after unit economics had turned. Quick-commerce optionality via Blinkit was underpriced entirely.",
    lesson:
      "A market still pricing a business for its old playbook, after the playbook has already changed, is where the edge lives.",
  },
  {
    ticker: "SAP",
    company: "SAP SE",
    market: "Europe",
    returnPct: "+67%",
    period: "Jan 2024 – Sep 2025",
    thesis:
      "Europe's largest enterprise software franchise was trading at a conglomerate-style discount to US SaaS peers despite a cleaner cloud transition and stickier customer base.",
    lesson:
      "\"Boring European compounder\" is often just mispriced language for a business nobody bothered to re-rate.",
  },
];

export type MarketView = {
  title: string;
  market: Market;
  category: string;
  date: string;
  commentary: string;
};

export const marketViews: MarketView[] = [
  {
    title: "AI Infrastructure: Still Early, Not Overheated",
    market: "US",
    category: "Technology",
    date: "Sep 2026",
    commentary:
      "The market is still treating AI infrastructure capex as cyclical when it's structural. Power, networking and advanced packaging remain the binding constraints — not chip supply. We stay concentrated in the picks-and-shovels layer rather than chasing application-layer hype.",
  },
  {
    title: "Asia's Mid-Cap Financial Sector is Mispriced",
    market: "Asia",
    category: "Financials",
    date: "Aug 2026",
    commentary:
      "Regional mid-cap banks across India and Southeast Asia are re-rating as credit costs normalize and digital-first cost structures kick in. This is a multi-year re-rating story that Western investors are still under-allocated to.",
  },
  {
    title: "European Defence: Contrarian No More, But Still Cheap",
    market: "Europe",
    category: "Defence",
    date: "Jul 2026",
    commentary:
      "Multi-year budget commitments across the continent have shifted from political rhetoric to signed procurement. Order backlogs at primes are now the clearest visibility investors have had into the sector in a decade — yet valuations haven't fully caught up.",
  },
];

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Picks", href: "#pitches" },
  { label: "Best Calls", href: "#calls" },
  { label: "Views", href: "#views" },
] as const;

export const socialLinks = [
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
] as const;
