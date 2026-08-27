import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import locationMap from "@/assets/location-map.jpg";

type Fields = { name: string; phone: string; email: string; details: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", email: "", details: "" };

function validate(v: Fields): Errors {
  const e: Errors = {};
  const name = v.name.trim();
  const phone = v.phone.trim();
  const email = v.email.trim();
  const details = v.details.trim();

  if (!name) e.name = "Please enter your full name.";
  else if (name.length > 100) e.name = "Name must be under 100 characters.";

  if (!phone) e.phone = "Please enter your phone number.";
  else if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) e.phone = "Enter a valid phone number.";

  if (!email) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 255)
    e.email = "Enter a valid email address.";

  if (!details) e.details = "Tell us a little about your project.";
  else if (details.length > 1000) e.details = "Please keep details under 1000 characters.";

  return e;
}

const fieldClass =
  "w-full border border-navy/25 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/40";

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const set = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setSendError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/prasannaram005@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New quote request — Smart Home Builders & Solutions",
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          message: values.details.trim(),
        }),
      });
      const json = (await res.json()) as { success?: boolean | string; message?: string };
      
      // FormSubmit returns success as boolean or string "true"
      const isSuccess = json.success === true || json.success === "true";
      if (!res.ok || !isSuccess) {
        throw new Error(json.message || "Submission failed");
      }
      setSubmitted(true);
      setValues(empty);
    } catch {
      setSendError(
        "We couldn't send your request right now. Please call 096006 08080 or email prasannaram005@gmail.com",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="car" className="scroll-mt-24 bg-secondary/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Free Consultation
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Get a Free Quote
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="reveal bg-background p-7 shadow-card sm:p-10">
            {submitted ? (
              <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-14 text-gold" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl font-extrabold text-navy">
                  Request received
                </h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out to Smart Home Builders &amp; Solutions. Our team will
                  contact you within 24 hours to discuss your project.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border-2 border-navy px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-navy transition-colors hover:border-gold hover:bg-gold"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    value={values.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={values.phone}
                      onChange={set("phone")}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={fieldClass}
                      placeholder="096006 08080"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-xs text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={255}
                      value={values.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={fieldClass}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="mb-2 block text-sm font-semibold text-navy">
                    Project Details <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    maxLength={1000}
                    value={values.details}
                    onChange={set("details")}
                    aria-invalid={!!errors.details}
                    aria-describedby={errors.details ? "details-error" : undefined}
                    className={`${fieldClass} resize-y`}
                    placeholder="Plot size, location, floors, budget range, expected start date..."
                  />
                  {errors.details && (
                    <p id="details-error" className="mt-2 text-xs text-destructive">
                      {errors.details}
                    </p>
                  )}
                </div>

                {sendError && (
                  <p role="alert" className="text-sm text-destructive">
                    {sendError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? "Sending..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>

          <div id="contact" className="reveal flex flex-col gap-6">
            <div className="bg-navy p-7 text-white sm:p-9">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                Contact Information
              </h3>
              <ul className="mt-7 space-y-6 text-sm">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-semibold">Office Address</p>
                    <p className="mt-1 text-white/70">
                      SURA Illam, 61-C, Arthanari School St, S P Pudur, K K Nagar, Namakkal, Tamil
                      Nadu 637001
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-semibold">Phone</p>
                    <a href="tel:09600608080" className="mt-1 block text-white/70 hover:text-gold">
                      096006 08080
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:rprasanna2335@gmail.com"
                      className="mt-1 block break-all text-white/70 hover:text-gold"
                    >
                      askuthiravan@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SURA+Illam%2C+61-C%2C+Arthanari+School+St%2C+S+P+Pudur%2C+K+K+Nagar%2C+Namakkal%2C+Tamil+Nadu+637001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open SURA Illam, 61-C, Arthanari School St, S P Pudur, K K Nagar, Namakkal, Tamil Nadu 637001 in Google Maps"
              className="group relative block h-64 overflow-hidden border border-border bg-secondary/50 lg:flex-1"
            >
              <img
                src={locationMap}
                alt="Map preview of SURA Illam, 61-C, Arthanari School St, S P Pudur, K K Nagar, Namakkal, Tamil Nadu 637001"
                loading="lazy"
                width={1024}
                height={512}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-navy px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white shadow-card transition-colors group-hover:bg-gold group-hover:text-navy">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                Open in Maps
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}