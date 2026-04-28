import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import logoImg from "@/assets/roto-logo.png";
import { PHONE_DISPLAY, telLink, whatsappLink } from "@/lib/products";

export function SiteFooter() {
  const wa = whatsappLink("Hello Roto Tanks Direct, I'd like to learn more about your water tanks.");
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white px-3 py-2">
                <img src={logoImg} alt="Roto Tanks logo" width={120} height={40} className="h-9 w-auto object-contain" />
              </div>
              <div className="font-display text-xl font-bold">Kenya</div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Roto Tanks Direct manufactures and supplies plastic water storage tanks for homes,
              farms, businesses, institutions, and project sites across Kenya.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-smooth hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-amber px-5 py-2.5 text-sm font-semibold text-amber-cta-foreground transition-smooth hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
              Explore
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-primary-foreground/75 hover:text-aqua">Home</Link></li>
              <li><Link to="/products" className="text-primary-foreground/75 hover:text-aqua">Water Tanks</Link></li>
              <li><Link to="/about" className="text-primary-foreground/75 hover:text-aqua">About</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/75 hover:text-aqua">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
              Reach Us
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <a href={telLink()} className="text-primary-foreground/85 hover:text-aqua">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <a href={wa} target="_blank" rel="noreferrer noopener" className="text-primary-foreground/85 hover:text-aqua">
                  WhatsApp Enquiries
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <span className="text-primary-foreground/85">Kenya - delivery details confirmed by order</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Roto Tanks Direct. All rights reserved.</div>
          <div>We manufacture and supply our own water tank products. We do not sell counterfeit or imitation goods.</div>
        </div>
      </div>
    </footer>
  );
}
