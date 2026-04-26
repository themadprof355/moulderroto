export type Product = {
  litres: number;
  priceKsh: number;
  use: string;
  category: string;
  profile: string;
  leadTime: string;
  benefits: string[];
  badge?: string;
};

export const products: Product[] = [
  {
    litres: 1000,
    priceKsh: 6500,
    use: "Compact reserve for starter homes and kiosks",
    category: "Domestic",
    profile: "Daily backup",
    leadTime: "Fast local dispatch",
    benefits: ["Compact footprint", "Easy base preparation", "Ideal for single-family compounds"],
  },
  {
    litres: 2000,
    priceKsh: 10500,
    use: "Balanced storage for family homes and rentals",
    category: "Residential",
    profile: "Best seller",
    leadTime: "Fast local dispatch",
    benefits: ["Popular household size", "Fits most compounds", "Great for 5 to 8 people"],
    badge: "Popular",
  },
  {
    litres: 3000,
    priceKsh: 14500,
    use: "Extended reserve for larger homes",
    category: "Residential",
    profile: "Longer reserve",
    leadTime: "Stock dependent",
    benefits: ["Longer storage cycle", "Low maintenance finish", "UV-stabilized shell"],
  },
  {
    litres: 4000,
    priceKsh: 18500,
    use: "Reliable supply for rentals and staff housing",
    category: "Rental",
    profile: "Multi-unit support",
    leadTime: "Stock dependent",
    benefits: ["Serves multiple occupants", "Durable ribbed wall design", "Built for repeat daily use"],
  },
  {
    litres: 5000,
    priceKsh: 24500,
    use: "Workhorse capacity for busy homes and SMEs",
    category: "Commercial",
    profile: "Value capacity",
    leadTime: "Stock dependent",
    benefits: ["Strong price-to-capacity value", "Heavy-duty structure", "Stable for long storage cycles"],
    badge: "Best Value",
  },
  {
    litres: 6000,
    priceKsh: 27500,
    use: "Reliable storage for businesses and institutions",
    category: "Commercial",
    profile: "Business ready",
    leadTime: "Planned dispatch",
    benefits: ["High-volume daily supply", "Stable base design", "Suitable for schools and car washes"],
  },
  {
    litres: 8000,
    priceKsh: 32500,
    use: "Large community reserve for compounds and campuses",
    category: "Institutional",
    profile: "Institution scale",
    leadTime: "Planned dispatch",
    benefits: ["Supports shared usage", "Industrial-grade strength", "Low maintenance over time"],
  },
  {
    litres: 10000,
    priceKsh: 45500,
    use: "Heavy outdoor storage for farms and projects",
    category: "Agriculture",
    profile: "Farm favorite",
    leadTime: "Planned dispatch",
    benefits: ["Supports irrigation cycles", "Reliable livestock supply", "Rugged outdoor shell"],
    badge: "Farm Favourite",
  },
  {
    litres: 16000,
    priceKsh: 67500,
    use: "Large reserve for estates, projects, and production sites",
    category: "Industrial",
    profile: "High-volume reserve",
    leadTime: "Scheduled logistics",
    benefits: ["Massive reserve capacity", "Thick industrial-grade walls", "Strong long-term value"],
  },
  {
    litres: 20000,
    priceKsh: 98500,
    use: "Estate and commercial backup for serious demand",
    category: "Industrial",
    profile: "Estate scale",
    leadTime: "Scheduled logistics",
    benefits: ["Estate-level storage", "Backed by warranty support", "Suitable for emergency reserve planning"],
  },
  {
    litres: 24000,
    priceKsh: 135000,
    use: "Maximum capacity for institutions and public projects",
    category: "Industrial",
    profile: "Maximum capacity",
    leadTime: "Scheduled logistics",
    benefits: ["Large infrastructure reserve", "Heavy-duty ribbed walls", "Built for long-term projects"],
  },
];

export const PHONE_NUMBER = "+254756619002";
export const PHONE_DISPLAY = "+254 756 619 002";
export const WHATSAPP_NUMBER = "254756619002";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${PHONE_NUMBER}`;
}

export function formatKsh(amount: number): string {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

export function formatLitres(litres: number): string {
  return `${litres.toLocaleString("en-KE")} L`;
}
