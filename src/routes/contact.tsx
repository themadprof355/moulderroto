import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, telLink, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Roto Tanks Direct - Water Tank Enquiries" },
      {
        name: "description",
        content:
          "Contact Roto Tanks Direct for plastic water tank pricing, availability, and delivery details in Kenya. WhatsApp or call +254 756 619 002.",
      },
      { property: "og:title", content: "Contact Roto Tanks Direct" },
      {
        property: "og:description",
        content: "WhatsApp or call Roto Tanks Direct for water tank enquiries in Kenya.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const wa = whatsappLink("Hello Roto Tanks Direct, I'd like to make an enquiry.");

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
            Get in touch
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-balance sm:text-6xl">
            Contact us for tank pricing and availability.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">
            Send a WhatsApp message or call us to confirm your preferred tank capacity, delivery
            location, current availability, and price.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative overflow-hidden rounded-3xl bg-whatsapp p-10 text-white shadow-elegant transition-smooth hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl transition-smooth group-hover:scale-110" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold">WhatsApp us</h2>
              <p className="mt-2 max-w-sm text-white/85">
                Share your preferred tank capacity, location, and installation site details.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-semibold text-whatsapp">
                Open chat - {PHONE_DISPLAY}
              </div>
            </div>
          </a>

          <a
            href={telLink()}
            className="group relative overflow-hidden rounded-3xl bg-gradient-amber p-10 text-amber-cta-foreground shadow-amber transition-smooth hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/30 blur-2xl transition-smooth group-hover:scale-110" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-cta-foreground/15 backdrop-blur">
                <Phone className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold">Call us</h2>
              <p className="mt-2 max-w-sm text-amber-cta-foreground/85">
                Prefer voice? Tap to call and speak with the Roto Tanks Direct team.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-cta-foreground px-5 py-3 text-sm font-semibold text-amber-cta">
                Call now - {PHONE_DISPLAY}
              </div>
            </div>
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Info icon={Phone} title="Phone" lines={[PHONE_DISPLAY, "Call or SMS"]} />
          <Info icon={MapPin} title="Location" lines={["Kenya", "Delivery details confirmed by order"]} />
          <Info icon={Clock} title="Hours" lines={["Mon-Sat: 8am - 6pm", "Sun: by request"]} />
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-balance text-ink sm:text-4xl">
            What to share when you reach out
          </h2>
          <p className="mt-4 text-foreground/70">
            To receive an accurate quote, mention your <strong>tank size</strong> (in litres), your{" "}
            <strong>delivery location</strong>, and whether you need any{" "}
            <strong>installation guidance</strong>. We will respond with availability, pricing, and
            delivery information.
          </p>
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, title, lines }: { icon: typeof Phone; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-aqua text-aqua-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 font-display text-lg font-semibold text-ink">{title}</div>
      <div className="mt-1.5 space-y-0.5 text-sm text-foreground/70">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
  );
}
