import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { useReveal } from "@/hooks/use-reveal";

const title = "Smart Home Builders & Solutions | Home Construction in Namakkal";
const description =
  "Residential construction, structural design and turn-key home building in Namakkal, Tamil Nadu. Quality craftsmanship, transparent pricing, on-time handover.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Smart Home Builders & Solutions",
          slogan: "Build Your Dreams . . .",
          telephone: "096006 08080",
          email: "askuthiravan@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "SURA Illam, 61-C, Arthanari School St, S P Pudur, K K Nagar",
            addressLocality: "Namakkal",
            addressRegion: "Tamil Nadu",
            postalCode: "637001",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
