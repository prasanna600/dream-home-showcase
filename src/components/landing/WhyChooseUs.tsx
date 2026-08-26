import { HardHat, IndianRupee, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Materials",
    text: "Branded cement, tested steel and verified aggregates — with material bills you can review.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    text: "Itemised estimates, no hidden extras and clear stage-wise payment milestones.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "Civil engineers, structural designers and skilled masons who have delivered 150+ homes.",
  },
  {
    icon: HardHat,
    title: "On-Time Handover",
    text: "Scheduled site tracking and weekly progress updates keep your project on the calendar.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-navy py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Why Choose Us
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Built on trust, delivered on time
          </h2>
        </div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <li key={f.title} className="reveal border-t-2 border-gold/60 pt-6">
              <f.icon className="size-8 text-gold" aria-hidden="true" />
              <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wide text-white">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
