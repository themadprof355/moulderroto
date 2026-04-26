import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MessageCircle, Phone, Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { PHONE_DISPLAY, products, telLink, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All Water Tanks & Prices — Roto Tanks Kenya" },
      {
        name: "description",
        content:
          "Full price list of Roto Tanks in Kenya. 1,000L to 24,000L plastic water storage tanks for homes, farms and industry. Order via WhatsApp.",
      },
      { property: "og:title", content: "All Water Tanks & Prices — Roto Tanks Kenya" },
      {
        property: "og:description",
        content: "Eleven sizes of heavy-duty plastic water tanks with transparent KSh pricing.",
      },
    ],
  }),
  component: ProductsPage,
});

const categories = ["All", "Domestic", "Residential", "Rental", "Commercial", "Institutional", "Agriculture", "Industrial"] as const;

function ProductsPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.use.toLowerCase().includes(q) ||
        p.profile.toLowerCase().includes(q) ||
        String(p.litres).includes(q);
      return matchCat && matchQ;
    });
  }, [category, query]);

  const wa = whatsappLink("Hello Roto Tanks, please share your full price list.");

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
            Tank catalogue
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-balance sm:text-6xl">
            Every size. Every use. One transparent price list.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">
            Eleven heavy-duty water tank sizes — from 1,000L kiosk tanks to 24,000L industrial
            reserves. Tap any tank to order on WhatsApp or call directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              <MessageCircle className="h-4 w-4" /> Request the price list
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-amber px-6 py-3 text-sm font-semibold text-amber-cta-foreground shadow-amber"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={
                  category === c
                    ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card"
                    : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/75 transition-smooth hover:border-aqua hover:text-ink"
                }
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search size, profile or use…"
              className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted-foreground focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/30"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.litres} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 rounded-2xl border border-dashed border-border p-12 text-center text-foreground/65">
            No tanks match your filter. Try clearing the search or selecting a different category.
          </div>
        )}
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-balance text-ink sm:text-4xl">
            Need help choosing the right tank?
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Tell us your household size, business type or daily water demand — we'll recommend the
            best capacity and confirm delivery to your area.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink("Hello Roto Tanks, please help me choose the right tank size for my needs.")}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              <MessageCircle className="h-4 w-4" /> Get a recommendation
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call our team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
