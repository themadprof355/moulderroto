import { createFileRoute } from "@tanstack/react-router";
import { Award, Droplets, MessageCircle, Phone, Shield, Truck, Users } from "lucide-react";
import lineupImg from "@/assets/tanks-lineup.jpg";
import { PHONE_DISPLAY, telLink, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Roto Tanks Kenya — Heavy-Duty Water Storage" },
      {
        name: "description",
        content:
          "Roto Tanks Kenya supplies heavy-duty plastic water storage tanks built for African conditions. UV-stabilized, ribbed-wall design, nationwide delivery.",
      },
      { property: "og:title", content: "About Roto Tanks Kenya" },
      {
        property: "og:description",
        content: "Heavy-duty plastic water tanks for Kenyan homes, farms and industry.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const wa = whatsappLink("Hello Roto Tanks, I'd like to know more about your company.");

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              About Roto Tanks
            </div>
            <h1 className="mt-3 font-display text-5xl font-bold text-balance sm:text-6xl">
              Storing Kenya's water — one tank at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Reliable water storage is the backbone of every home, farm, and business in Kenya. We
              supply heavy-duty plastic tanks engineered for the African sun, daily wear, and
              long-term reserves — all backed by transparent pricing and friendly support.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-aqua opacity-30 blur-2xl" />
              <img
                src={lineupImg}
                alt="A lineup of Roto Tanks"
                width={1600}
                height={900}
                loading="lazy"
                className="relative rounded-3xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              Our promise
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold text-balance text-ink sm:text-5xl">
              Tanks built for Kenya. Service built for you.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              Every tank we sell is UV-stabilized to handle direct sun, ribbed for structural
              strength, and designed with a stable base for easy installation. From a 1,000L starter
              tank to a 24,000L industrial reserve — there's a Roto Tank for every demand.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              We keep ordering simple. Send a WhatsApp or place a call, and a real person will
              confirm your tank size, delivery slot and final price. No drawn-out forms. No
              guesswork.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Pillar icon={Shield} title="UV stabilized" copy="Engineered to resist degradation under daily Kenyan sun." />
            <Pillar icon={Award} title="Industrial grade" copy="Thick, ribbed walls for impact resistance and shape stability." />
            <Pillar icon={Truck} title="Nationwide delivery" copy="Stock dispatch for popular sizes and scheduled logistics for large tanks." />
            <Pillar icon={Users} title="Real support" copy="Friendly people on WhatsApp and phone — no chatbots." />
          </div>
        </div>
      </section>

      <section className="bg-gradient-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          <Metric value="11" label="Tank sizes available" />
          <Metric value="1,000L" label="Starting capacity" />
          <Metric value="24,000L" label="Maximum capacity" />
          <Metric value="100%" label="Transparent pricing" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-aqua/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-aqua">
                <Droplets className="h-3.5 w-3.5" />
                Talk to us
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold text-balance sm:text-4xl">
                Ready when you are. Call or WhatsApp anytime during the day.
              </h2>
            </div>
            <div className="flex flex-wrap justify-start gap-3 md:justify-end">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-glow"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-amber px-6 py-3.5 text-base font-semibold text-amber-cta-foreground shadow-amber"
              >
                <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ icon: Icon, title, copy }: { icon: typeof Shield; title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-aqua text-aqua-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 font-display text-lg font-semibold text-ink">{title}</div>
      <div className="mt-1.5 text-sm text-foreground/70">{copy}</div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-5xl font-bold text-aqua sm:text-6xl">{value}</div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-foreground/65">
        {label}
      </div>
    </div>
  );
}
