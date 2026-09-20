import { tickerItems } from "@/lib/data";

export default function StockTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-white/[0.02] py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#02020a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#02020a] to-transparent" />
      <div className="ticker-track flex w-max items-center gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={`${item.ticker}-${i}`} className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-white/90">{item.ticker}</span>
            <span className={item.up ? "text-cyan-300" : "text-rose-400"}>
              {item.up ? "▲" : "▼"} {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
