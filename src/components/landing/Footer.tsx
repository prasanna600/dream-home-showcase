import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-extrabold uppercase tracking-wide text-white">
            Smart Home Builders &amp; Solutions
          </p>
          <p className="mt-3 font-display text-lg italic text-gold">Build Your Dreams . . .</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Residential construction, structural design and turn-key home building in Namakkal,
            Tamil Nadu.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                SURA Illam, 61-C, Arthanari School St, S P Pudur, K K Nagar, Namakkal, Tamil Nadu
                637001
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href="tel:09600608080" className="transition-colors hover:text-gold">
                096006 08080
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href="mailto:askuthiravan@gmail.com" className="break-all transition-colors hover:text-gold">
                askuthiravan@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-white/50 lg:px-8">
          © 2026 Smart Home Builders &amp; Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
