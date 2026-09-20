import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contrario by Aamir — Contrarian thinking. Global conviction.",
  description:
    "Contrario is Aamir's independent global equity research practice covering the US, Asia and Europe. Conviction picks, portfolio positioning, and market views — finding edge where others aren't looking.",
  keywords: [
    "Contrario",
    "Aamir",
    "global equity investing",
    "conviction picks",
    "portfolio",
    "market views",
  ],
  openGraph: {
    title: "Contrario by Aamir — Contrarian thinking. Global conviction.",
    description: "Finding edge where others aren't looking.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#02020a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
