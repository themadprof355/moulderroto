import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/roto-logo.png";
import { PHONE_DISPLAY, telLink } from "@/lib/products";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Tanks & Prices" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logoImg}
            alt="Roto Tanks logo"
            width={140}
            height={48}
            className="h-10 w-auto object-contain transition-smooth group-hover:scale-105"
          />
          <div className="hidden leading-tight sm:block">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Kenya
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground/75 transition-smooth hover:bg-secondary hover:text-ink"
              activeProps={{ className: "rounded-md px-3.5 py-2 text-sm font-semibold text-ink bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telLink()}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-amber px-5 py-2.5 text-sm font-semibold text-amber-cta-foreground shadow-amber transition-smooth hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "block rounded-md px-3 py-2.5 text-base font-semibold text-ink bg-secondary" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={telLink()}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-amber px-5 py-3 text-sm font-semibold text-amber-cta-foreground shadow-amber"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
