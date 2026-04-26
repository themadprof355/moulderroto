import { MessageCircle, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/products";

export function FloatingContact() {
  const wa = whatsappLink("Hello Roto Tanks, I'd like a quote on a water tank.");
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={wa}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant transition-smooth hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ripple" aria-hidden />
        <MessageCircle className="relative h-6 w-6" />
      </a>
      <a
        href={telLink()}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-amber text-amber-cta-foreground shadow-amber transition-smooth hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
