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
    use: "Compact plastic water storage for homes, kiosks, and small premises",
    category: "Domestic",
    profile: "Compact storage",
    leadTime: "Contact us for availability",
    benefits: ["Plastic water storage tank", "Suitable for above-ground use", "Practical for limited spaces"],
  },
  {
    litres: 2000,
    priceKsh: 10500,
    use: "Plastic water storage for households, rentals, and small compounds",
    category: "Residential",
    profile: "Household storage",
    leadTime: "Contact us for availability",
    benefits: ["Suitable for domestic backup storage", "Fits many residential compounds", "For general water storage needs"],
  },
  {
    litres: 3000,
    priceKsh: 14500,
    use: "Mid-size plastic water storage for larger homes and shared use",
    category: "Residential",
    profile: "Residential storage",
    leadTime: "Stock dependent",
    benefits: ["Plastic tank material", "UV-resistant finish", "Suitable for household water backup"],
  },
  {
    litres: 4000,
    priceKsh: 18500,
    use: "Plastic water storage for rentals, staff housing, and compounds",
    category: "Rental",
    profile: "Shared storage",
    leadTime: "Stock dependent",
    benefits: ["Suitable for shared daily use", "Ribbed wall design", "Above-ground storage option"],
  },
  {
    litres: 5000,
    priceKsh: 24500,
    use: "Plastic water storage for homes, small businesses, and light commercial sites",
    category: "Commercial",
    profile: "Medium capacity",
    leadTime: "Stock dependent",
    benefits: ["Medium capacity option", "Suitable for business water backup", "Stable above-ground storage"],
  },
  {
    litres: 6000,
    priceKsh: 27500,
    use: "Plastic water storage for businesses, institutions, and service premises",
    category: "Commercial",
    profile: "Commercial storage",
    leadTime: "Planned dispatch",
    benefits: ["For commercial water storage", "Stable base design", "Suitable for schools and service yards"],
  },
  {
    litres: 8000,
    priceKsh: 32500,
    use: "Large plastic water storage for compounds, campuses, and institutions",
    category: "Institutional",
    profile: "Institutional storage",
    leadTime: "Planned dispatch",
    benefits: ["Supports shared usage", "Plastic water tank material", "Suitable for regular water storage"],
  },
  {
    litres: 10000,
    priceKsh: 45500,
    use: "Large plastic water storage for farms, projects, and commercial sites",
    category: "Agriculture",
    profile: "Farm storage",
    leadTime: "Planned dispatch",
    benefits: ["Suitable for irrigation planning", "Useful for livestock water storage", "Outdoor above-ground use"],
  },
  {
    litres: 16000,
    priceKsh: 67500,
    use: "High-capacity plastic water storage for estates, projects, and production sites",
    category: "Industrial",
    profile: "High-capacity storage",
    leadTime: "Scheduled logistics",
    benefits: ["High capacity option", "Suitable for large premises", "Scheduled delivery coordination"],
  },
  {
    litres: 20000,
    priceKsh: 98500,
    use: "High-capacity plastic water storage for estates and commercial backup",
    category: "Industrial",
    profile: "Estate scale",
    leadTime: "Scheduled logistics",
    benefits: ["Large water storage capacity", "Suitable for backup reserve planning", "Delivery arranged by schedule"],
  },
  {
    litres: 24000,
    priceKsh: 135000,
    use: "Large plastic water storage for institutions, public projects, and industrial sites",
    category: "Industrial",
    profile: "Large-capacity storage",
    leadTime: "Scheduled logistics",
    benefits: ["Large infrastructure storage option", "Ribbed wall design", "Suitable for planned site water storage"],
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
