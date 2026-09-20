import { brand, navLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12" style={{ backgroundColor: "#0e0408" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <span className="text-lg font-semibold text-white">
              contrari<span className="text-gradient-violet italic">o</span>
            </span>
            <p className="mt-2 max-w-xs text-sm text-white/45">
              {brand.tagline} Independent global equity research by {brand.by}, covering
              the US, Asia and Europe.
            </p>
          </div>

          <nav className="flex flex-col items-center gap-3 sm:items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigation
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-start">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-11 items-center text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Connect
            </span>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center text-sm text-white/60 transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {brand.by}. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            Not financial advice. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
