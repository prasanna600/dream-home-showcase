import { CalendarClock, Home, Smile, Timer } from "lucide-react";
import aboutImage from "@/assets/about-house.jpg";

const stats = [
  { icon: CalendarClock, value: "15+", label: "Years of Experience" },
  { icon: Home, value: "150+", label: "Homes Completed" },
  { icon: Smile, value: "140+", label: "Happy Families" },
  { icon: Timer, value: "98%", label: "On-Time Delivery" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="reveal relative">
          <div
            className="absolute -left-4 -top-4 hidden size-28 border-l-2 border-t-2 border-gold lg:block"
            aria-hidden="true"
          />
          <img
            src={aboutImage}
            alt="Completed modern white residence with clean geometric lines in Namakkal"
            width={1200}
            height={1000}
            loading="lazy"
            className="relative w-full object-cover shadow-card"
          />
          <div className="absolute -bottom-6 right-4 hidden bg-navy px-7 py-5 text-white shadow-lift sm:block">
            <p className="font-display text-3xl font-extrabold text-gold">100%</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Turn-key delivery</p>
          </div>
        </div>

        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">About Us</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Your Trusted Construction Partner in Namakkal
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Smart Home Builders &amp; Solutions is a locally rooted residential construction and
              structural solutions provider based on Arthanari School Street, Namakkal. We build
              homes for families who expect engineering discipline as much as good design.
            </p>
            <p>
              From foundation to final finish, every project runs on documented structural design,
              tested materials and a transparent schedule — so you always know what is being built,
              when, and at what cost.
            </p>
            <p>
              Our turn-key model means one accountable team handles planning, approvals, structure,
              finishing and handover. No coordination gaps, no surprise costs, no delayed keys.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="border border-border bg-secondary/60 p-5">
                <s.icon className="size-6 text-gold" aria-hidden="true" />
                <dt className="mt-3 font-display text-2xl font-extrabold text-navy">{s.value}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
