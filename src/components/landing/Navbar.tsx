import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact"},
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-gold/30 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85"
          : "border-transparent bg-navy"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center border-2 border-gold font-display text-sm font-extrabold text-gold">
            SH
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.95rem] font-extrabold uppercase tracking-wide text-white sm:text-base">
              Smart Home Builders
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-gold">
              &amp; Solutions
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#car"
            className="ml-3 hidden bg-gold px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-soft hover:shadow-lift sm:inline-block"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:09600608080"
            aria-label="Call Smart Home Builders"
            className="grid size-10 place-items-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold sm:hidden"
          >
            <Phone className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 shrink-0 place-items-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-navy-deep lg:hidden"
      >
        <ul className="mx-auto max-w-7xl px-5 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const el = document.querySelector(l.href);
                  if (el) {
                    const headerOffset = 80;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                  }
                }}
                className="block border-b border-white/10 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white/85 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a href="#car"
              onClick={() => setOpen(false)}
              className="block bg-gold px-5 py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-navy"
            >
              Get a Free Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
