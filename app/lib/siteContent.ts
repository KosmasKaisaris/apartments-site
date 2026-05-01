export type Apartment = {
  slug: "apartment-a" | "apartment-b";
  name: string;
  tagline: string;
  locationLine: string;
  heroImage: { src: string; alt: string };
  quickFacts: Array<{ label: string; value: string }>;
  highlights: string[];
  amenities: string[];
  gallery: Array<{ src: string; alt: string }>;
  contact: {
    phoneDisplay: string;
    phoneE164: string;
    email: string;
  };
};

export const apartments: Apartment[] = [
  {
    slug: "apartment-a",
    name: "Apartment A",
    tagline: "Bright, calm, and minimal — perfect for couples.",
    locationLine: "Agia · Parga, Greece",
    heroImage: { src: "/appartment-a/parga%20(15).jpg", alt: "Apartment A" },
    quickFacts: [
      { label: "Guests", value: "2–3" },
      { label: "Bedrooms", value: "1" },
      { label: "Beds", value: "1 queen + sofa" },
      { label: "Bathroom", value: "1" },
    ],
    highlights: [
      "Walkable location close to restaurants and cafés",
      "Fast Wi‑Fi for remote work",
      "Sunlit balcony with outdoor seating",
    ],
    amenities: [
      "Air conditioning",
      "Fast Wi‑Fi",
      "Smart TV",
      "Fully equipped kitchen",
      "Coffee machine",
      "Washing machine",
      "Fresh linens & towels",
    ],
    gallery: [
      { src: "/appartment-a/gallery-1.jpg", alt: "Apartment A — photo 1" },
      { src: "/appartment-a/gallery-2.jpg", alt: "Apartment A — photo 2" },
      { src: "/appartment-a/gallery-3.jpg", alt: "Apartment A — photo 3" },
      { src: "/appartment-a/hero.jpg", alt: "Apartment A — photo 4" },
    ],
    contact: {
      phoneDisplay: "+30 69 0000 0000",
      phoneE164: "+306900000000",
      email: "hello@example.com",
    },
  },
  {
    slug: "apartment-b",
    name: "Apartment B",
    tagline: "Spacious and family-friendly — ideal for longer stays.",
    locationLine: "Your area · City, Greece",
    heroImage: { src: "/appartment-b/Nafplio%20(16).jpg", alt: "Apartment B" },
    quickFacts: [
      { label: "Guests", value: "4–5" },
      { label: "Bedrooms", value: "2" },
      { label: "Beds", value: "2 double" },
      { label: "Bathroom", value: "1" },
    ],
    highlights: [
      "Large living room for families",
      "Dedicated workspace corner",
      "Quiet neighborhood with easy parking nearby",
    ],
    amenities: [
      "Air conditioning",
      "Fast Wi‑Fi",
      "Smart TV",
      "Fully equipped kitchen",
      "Dishwasher",
      "Washing machine",
      "Fresh linens & towels",
    ],
    gallery: [
      { src: "/appartment-b/gallery-1.jpg", alt: "Apartment B — photo 1" },
      { src: "/appartment-b/gallery-2.jpg", alt: "Apartment B — photo 2" },
      { src: "/appartment-b/gallery-3.jpg", alt: "Apartment B — photo 3" },
      { src: "/appartment-b/hero.jpg", alt: "Apartment B — photo 4" },
    ],
    contact: {
      phoneDisplay: "+30 69 0000 0000",
      phoneE164: "+306900000000",
      email: "hello@example.com",
    },
  },
];

export function getApartment(slug: Apartment["slug"]) {
  const apt = apartments.find((a) => a.slug === slug);
  if (!apt) {
    throw new Error(`Unknown apartment slug: ${slug}`);
  }
  return apt;
}

