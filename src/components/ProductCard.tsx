import { MessageCircle, Phone, Check, Truck } from "lucide-react";
import {
  type Product,
  formatKsh,
  formatLitres,
  telLink,
  whatsappLink,
} from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const message =
    `Hello Roto Tanks,\n\nI'm interested in the ${formatLitres(product.litres)} tank ` +
    `(${product.profile}) listed at ${formatKsh(product.priceKsh)}.\n\nPlease share availability and delivery details. Thank you.`;
  const wa = whatsappLink(message);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
      {product.badge && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-amber px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-cta-foreground shadow-amber">
          {product.badge}
        </div>
      )}

      <div className="relative flex items-center justify-center bg-gradient-to-br from-secondary to-accent/40 px-6 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.16_210/0.18),transparent_60%)]" />
        <div className="relative text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua">
            {product.category}
          </div>
          <div className="mt-2 font-display text-5xl font-bold text-ink lg:text-6xl">
            {product.litres.toLocaleString("en-KE")}
            <span className="ml-1 text-2xl font-medium text-muted-foreground">L</span>
          </div>
          <div className="mt-1 text-sm font-medium text-foreground/70">{product.profile}</div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <p className="text-sm leading-relaxed text-foreground/75">{product.use}</p>

        <ul className="space-y-2">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-aqua">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Truck className="h-3.5 w-3.5" />
          {product.leadTime}
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-border pt-5">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              From
            </div>
            <div className="font-display text-2xl font-bold text-ink">
              {formatKsh(product.priceKsh)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-whatsapp px-3 py-2.5 text-sm font-semibold text-white transition-smooth hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={telLink()}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </article>
  );
}
