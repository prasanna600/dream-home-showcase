import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Modern minimalist white house exterior built by Smart Home Builders at dusk"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-3 border-l-2 border-gold pl-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Namakkal, Tamil Nadu
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Smart Home Builders <span className="text-white/70">&amp;</span> Solutions
          </h1>
          <p className="mt-5 font-display text-2xl font-semibold italic tracking-tight text-gold sm:text-3xl">
            Build Your Dreams . . .
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Trusted residential construction &amp; structural solutions in Namakkal, Tamil Nadu —
            delivered with quality craftsmanship and on-time handover.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#car"
              className="inline-flex items-center justify-center bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-lift"
            >
              Get a Free Quote
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-white/40 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-gold hover:text-gold"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute inset-x-0 bottom-6 mx-auto grid size-11 place-items-center text-white/60 transition-colors hover:text-gold"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
