import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioSnapshot from "@/components/PortfolioSnapshot";
import ConvictionPicks from "@/components/ConvictionPicks";
import BestCalls from "@/components/BestCalls";
import MarketViews from "@/components/MarketViews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <PortfolioSnapshot />
      <ConvictionPicks />
      <BestCalls />
      <MarketViews />
      <Footer />
    </main>
  );
}
