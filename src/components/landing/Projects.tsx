const projects = [
  { src: "/images/b1.webp", alt: "Three-storey blue and white residence with covered car parking" },
  { src: "/images/b2.webp", alt: "Contemporary home facade lit with decorative lighting at dusk" },
  { src: "/images/b3.webp", alt: "Modern white villa with grey pillars and gold gate" },
  { src: "/images/b4.webp", alt: "Newly completed two-storey house with magenta and grey accents" },
  { src: "/images/b5.webp", alt: "Blue elevation home with wooden sliding gate" },
  { src: "/images/b6.webp", alt: "Modular kitchen interior with granite countertop and wooden cabinets" },
  { src: "/images/b7.webp", alt: "Modern house exterior illuminated with coloured facade lighting at night" },
  { src: "/images/b8.webp", alt: "White and black contemporary duplex with compound wall" },
  { src: "/images/b9.webp", alt: "Traditional style residence with ornate roof towers and grand staircases" },
];


export function Projects() {
  return (
    <section id="projects" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Work</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Our Completed Projects
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A showcase of homes we&apos;ve proudly built across Namakkal.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li
              key={i}
              className="reveal overflow-hidden rounded-lg bg-navy shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
            >
              <img
                src={p.src}
                alt={p.alt}
                width={1000}
                height={750}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-72"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
