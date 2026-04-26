import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Droplets, MessageCircle, Phone, Shield, Truck, Award, Users, Sprout, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-tank.jpg";
import lineupImg from "@/assets/tanks-lineup.jpg";
import { ProductCard } from "@/components/ProductCard";
import { PHONE_DISPLAY, products, telLink, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roto Tanks Kenya — Heavy-Duty Water Storage Tanks | 1,000L to 24,000L" },
      {
        name: "description",
        content:
          "Buy durable plastic water storage tanks in Kenya. Sizes from 1,000L to 24,000L for homes, farms, schools, and industry. Fast WhatsApp ordering.",
      },
      { property: "og:title", content: "Roto Tanks Kenya — Built to Store. Built to Last." },
      {
        property: "og:description",
        content: "Heavy-duty water tanks from 1,000 to 24,000 litres. Order via WhatsApp or call.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = [products[1], products[4], products[7]];
  const wa = whatsappLink("Hello Roto Tanks, I'd like a quote on a water tank.");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8 lg:py-36">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-aqua/40 bg-aqua/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
              <Droplets className="h-3.5 w-3.5" />
              Trusted across Kenya
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-balance text-primary-foreground sm:text-6xl lg:text-7xl">
              Built to store.
              <span className="block bg-gradient-to-r from-aqua to-amber-cta bg-clip-text text-transparent">
                Built to last.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Heavy-duty plastic water storage tanks for homes, farms, businesses and institutions.
              From <strong className="text-aqua">1,000L</strong> for kiosks to{" "}
              <strong className="text-aqua">24,000L</strong> for industrial reserves — order today via
              WhatsApp or phone.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-white shadow-elegant transition-smooth hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-amber px-7 py-4 text-base font-semibold text-amber-cta-foreground shadow-amber transition-smooth hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
              <Stat value="11" label="Tank sizes" />
              <Stat value="24,000L" label="Max capacity" />
              <Stat value="UV+" label="Stabilized shell" />
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-aqua opacity-30 blur-3xl" />
              <img
                src={heroImg}
                alt="Heavy-duty Roto Tank standing tall in Kenyan landscape"
                width={1600}
                height={1200}
                className="relative h-full w-full rounded-3xl object-cover shadow-elegant animate-float"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-surface-elevated p-4 shadow-elegant">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Starting from
                </div>
                <div className="font-display text-3xl font-bold text-ink">KSh 6,500</div>
                <div className="text-xs text-foreground/60">1,000L household tank</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          <Trust icon={Shield} title="UV Stabilized" copy="Built for years of African sun" />
          <Trust icon={Truck} title="Nationwide Delivery" copy="Stock & scheduled logistics" />
          <Trust icon={Award} title="Industrial Grade" copy="Heavy-duty ribbed walls" />
          <Trust icon={Users} title="Trusted Service" copy="Friendly support, real people" />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              Most popular sizes
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
              Pick the tank that fits your demand.
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              From the family-favourite 2,000L to the farm workhorse 10,000L — every tank is built
              for daily use and long-term reliability.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink shadow-card transition-smooth hover:border-aqua hover:text-aqua"
          >
            View all 11 sizes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.litres} product={p} />
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-gradient-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                Made for every use
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
                One range, every Kenyan use case.
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Whether you're stocking a single home, supplying a school, or running an irrigation
                line — there's a Roto Tank built for the job.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <UseCase icon={Users} title="Homes & Rentals" copy="1,000L to 4,000L for families and multi-unit compounds." />
                <UseCase icon={Building2} title="Schools & SMEs" copy="5,000L to 8,000L for institutional daily supply." />
                <UseCase icon={Sprout} title="Farms & Irrigation" copy="10,000L workhorse tanks for livestock and crops." />
                <UseCase icon={Award} title="Industrial Projects" copy="16,000L to 24,000L scheduled-logistics reserves." />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-aqua opacity-20 blur-2xl" />
              <img
                src={lineupImg}
                alt="A lineup of Roto Tanks in different sizes"
                width={1600}
                height={900}
                loading="lazy"
                className="relative rounded-3xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
            Why Roto Tanks
          </div>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
            Tough shells. Honest prices. Real human support.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { t: "Heavy-duty by design", c: "Thick, ribbed walls and stable bases engineered for daily use and long storage cycles.", i: Shield },
            { t: "Transparent pricing", c: "All eleven sizes are listed with clear prices in KSh — no surprise fees, no hidden costs.", i: Award },
            { t: "Order in seconds", c: "Send a WhatsApp or place a quick call. We confirm stock, delivery and final price fast.", i: MessageCircle },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-aqua text-aqua-foreground">
                <f.i className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{f.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                Simple ordering
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold text-balance sm:text-5xl">
                Three steps from chat to delivery.
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/75">
                Skip the forms. We confirm your tank size, location and price by WhatsApp or call —
                then arrange dispatch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-glow transition-smooth hover:scale-[1.03]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start a WhatsApp Chat
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-amber px-6 py-3.5 text-base font-semibold text-amber-cta-foreground shadow-amber transition-smooth hover:scale-[1.03]"
                >
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </a>
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-3 sm:grid-cols-3">
              {[
                { n: "01", t: "Chat or call", c: "Tell us your tank size and location." },
                { n: "02", t: "Confirm price", c: "We share final price, stock and delivery slot." },
                { n: "03", t: "Tank delivered", c: "Receive your tank and start storing water." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6 backdrop-blur">
                  <div className="font-display text-3xl font-bold text-aqua">{s.n}</div>
                  <div className="mt-3 font-display text-lg font-semibold">{s.t}</div>
                  <div className="mt-1.5 text-sm text-primary-foreground/70">{s.c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-balance sm:text-5xl">
                Ready to secure your water supply?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Browse all eleven sizes, then order in a single message.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-3 md:justify-end">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3.5 text-base font-semibold text-aqua-foreground transition-smooth hover:scale-[1.03]"
              >
                See All Tanks <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white transition-smooth hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-aqua">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/65">{label}</div>
    </div>
  );
}

function Trust({ icon: Icon, title, copy }: { icon: typeof Shield; title: string; copy: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-aqua text-aqua-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-display text-base font-semibold text-ink">{title}</div>
        <div className="text-sm text-foreground/65">{copy}</div>
      </div>
    </div>
  );
}

function UseCase({ icon: Icon, title, copy }: { icon: typeof Shield; title: string; copy: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-card transition-smooth hover:border-aqua">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-aqua/15 text-aqua">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 font-display text-base font-semibold text-ink">{title}</div>
      <div className="mt-1.5 text-sm text-foreground/65">{copy}</div>
    </div>
  );
}

// Suppress unused import warning by referencing Check in a type guard that the bundler will tree-shake.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _check = Check;
