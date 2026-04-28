import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Droplets, MessageCircle, Phone, Shield, Truck, Award, Users, Sprout, Building2 } from "lucide-react";
import heroImg from "@/assets/roto-hero.png";
import lineupImg from "@/assets/roto-tank-range.jpg";
import { ProductCard } from "@/components/ProductCard";
import { PHONE_DISPLAY, products, telLink, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roto Tanks Direct - Plastic Water Storage Tanks | 1,000L to 24,000L" },
      {
        name: "description",
        content:
          "Roto Tanks Direct manufactures and supplies plastic water storage tanks in Kenya. Sizes from 1,000L to 24,000L for homes, farms, schools, businesses, and industry.",
      },
      { property: "og:title", content: "Roto Tanks Direct - Plastic Water Storage Tanks" },
      {
        property: "og:description",
        content: "Plastic water tanks from 1,000 to 24,000 litres. Contact Roto Tanks Direct for availability and pricing.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = [products[1], products[4], products[7]];
  const wa = whatsappLink("Hello Roto Tanks Direct, I'd like a quote on a water tank.");

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
              Roto Tanks Direct
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-balance text-primary-foreground sm:text-6xl lg:text-7xl">
              Plastic water storage
              <span className="block bg-gradient-to-r from-aqua to-amber-cta bg-clip-text text-transparent">
                for practical daily use.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              We manufacture and supply our own plastic water storage tanks for homes, farms, businesses and institutions.
              From <strong className="text-aqua">1,000L</strong> for kiosks to{" "}
              <strong className="text-aqua">24,000L</strong> for larger sites, contact us by
              WhatsApp or phone for current availability and pricing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-white shadow-elegant transition-smooth hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" />
                Request a Quote
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
              <Stat value="UV" label="Resistant finish" />
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-aqua opacity-30 blur-3xl" />
              <img
                src={heroImg}
                alt="Roto Tanks Direct plastic water tank"
                width={1600}
                height={1200}
                className="relative h-full w-full rounded-3xl object-cover shadow-elegant animate-float"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-surface-elevated p-4 shadow-elegant">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Price from
                </div>
                <div className="font-display text-3xl font-bold text-ink">KSh 6,500</div>
                <div className="text-xs text-foreground/60">1,000L plastic water tank</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          <Trust icon={Shield} title="UV-Resistant Finish" copy="Plastic tanks for outdoor storage" />
          <Trust icon={Truck} title="Delivery Support" copy="Availability and delivery confirmed by phone" />
          <Trust icon={Award} title="Ribbed Wall Design" copy="Structured tank walls for water storage" />
          <Trust icon={Users} title="Direct Support" copy="Speak with the Roto Tanks Direct team" />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              Product range
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
              Choose a tank by capacity and use.
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Browse plastic water tanks by litre capacity, material, and intended use for homes,
              farms, businesses, institutions, and project sites.
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
              Practical applications
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
                Water storage options for common site needs.
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Select a tank based on capacity, installation space, and intended storage use.
                Our range supports household backup, farm storage, schools, and commercial premises.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <UseCase icon={Users} title="Homes & Rentals" copy="1,000L to 4,000L options for domestic backup storage." />
                <UseCase icon={Building2} title="Schools & Businesses" copy="5,000L to 8,000L options for shared daily water storage." />
                <UseCase icon={Sprout} title="Farms & Irrigation" copy="Large tanks for livestock water storage and irrigation planning." />
                <UseCase icon={Award} title="Project Sites" copy="16,000L to 24,000L options arranged with scheduled delivery." />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-aqua opacity-20 blur-2xl" />
              <img
                src={lineupImg}
                alt="Roto Tanks Direct plastic water tanks in different sizes"
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
            Why Roto Tanks Direct
          </div>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
            Clear product information and direct customer support.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { t: "Own brand identity", c: "Our website represents Roto Tanks Direct water tank products only.", i: Shield },
            { t: "Clear capacity details", c: "Tank listings focus on litre capacity, material, intended use, pricing, and delivery information.", i: Award },
            { t: "Direct ordering support", c: "Contact us by WhatsApp or phone to confirm stock, delivery details, and final pricing.", i: MessageCircle },
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
              Ordering process
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold text-balance sm:text-5xl">
                Three steps to request a tank.
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/75">
                Contact us with your preferred tank capacity and location. We confirm availability,
                price, and delivery options before dispatch is arranged.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-glow transition-smooth hover:scale-[1.03]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Request by WhatsApp
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
                { n: "01", t: "Chat or call", c: "Share the tank capacity and delivery location." },
                { n: "02", t: "Confirm details", c: "We confirm availability, price, and delivery options." },
                { n: "03", t: "Arrange delivery", c: "Delivery is scheduled after order details are confirmed." },
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
                Need a plastic water storage tank?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Browse available capacities, then contact us for current pricing and delivery details.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-3 md:justify-end">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3.5 text-base font-semibold text-aqua-foreground transition-smooth hover:scale-[1.03]"
              >
                View Tank Range <ArrowRight className="h-4 w-4" />
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
