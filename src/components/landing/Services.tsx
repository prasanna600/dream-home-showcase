import {
  Building2,
  ClipboardList,
  DraftingCompass,
  Wrench,
  PlusSquare,
  Home,
  Hammer,
  PaintRoller,
  Sofa,
  Gem,
  KeyRound,
  Ruler,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Accessory building construction" },
  { icon: ClipboardList, title: "Consultation" },
  { icon: DraftingCompass, title: "Custom home design" },
  { icon: Wrench, title: "General repairs & maintenance" },
  { icon: PlusSquare, title: "Home addition construction" },
  { icon: Home, title: "Home building" },
  { icon: Hammer, title: "Home demolition" },
  { icon: PaintRoller, title: "Home renovations" },
  { icon: Sofa, title: "Interior decorating" },
  { icon: Gem, title: "Luxury home building" },
  { icon: KeyRound, title: "New home construction" },
  { icon: Ruler, title: "Tiny home building" },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What We Do</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Complete construction solutions under one roof.
          </p>
        </div>

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="reveal group relative bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <s.icon
                className="size-9 text-navy transition-colors group-hover:text-gold"
                aria-hidden="true"
              />
              <h3 className="mt-6 font-display text-lg font-bold text-navy">{s.title}</h3>
              <a
                href="#contact"
                className="mt-6 inline-block font-display text-xs font-bold uppercase tracking-widest text-gold"
              >
                Enquire now →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
