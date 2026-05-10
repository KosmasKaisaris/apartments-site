export type Apartment = {
  slug: "stone-villa-parga" | "ivory-boutique-stay-nafplio";
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
    slug: "stone-villa-parga",
    name: "Wood and Stone Villa Parga",
    tagline: "Bright, calm, and traditional — perfect for families.",
    locationLine: "Agia · Parga, Greece",
    heroImage: {
      src: "/appartment-a/parga%20(1).jpg",
      alt: "Wood Stone Villa Parga",
    },
    quickFacts: [
      { label: "Guests", value: "5 – 6" },
      { label: "Bedrooms", value: "2" },
      { label: "Beds", value: "2 double + 2 sofa beds" },
      { label: "Bathroom", value: "2" },
    ],
    highlights: [
      "Endless view of the Ionian Sea, the island of Paxos and the Historical Castle of Ali Pasa.",
      "Located in the historical settlementof Agia at the top of the hill.",
      "The terrace is surrounded by old olive trees.",
    ],
    amenities: [
      "Air conditioning",
      "Fast Wi‑Fi",
      "Smart TV",
      "Fully equipped kitchen",
      "Coffee machine",
      "Veranda with sea view",
      "Fresh linens & towels",
    ],
    gallery: [
      { src: "/appartment-a/gallery-1.jpg", alt: "Apartment A — photo 1" },
      { src: "/appartment-a/gallery-2.jpg", alt: "Apartment A — photo 2" },
      { src: "/appartment-a/gallery-3.jpg", alt: "Apartment A — photo 3" },
      { src: "/appartment-a/hero.jpg", alt: "Apartment A — photo 4" },
    ],
    contact: {
      phoneDisplay: "+30 697 699 4134",
      phoneE164: "+306976994134",
      email: "dimsmirlis7@gmail.com",
    },
  },
  {
    slug: "ivory-boutique-stay-nafplio",
    name: "Ivory Boutique Stay Nafplio",
    tagline: "Perfect for couples. Ideal for longer stays.",
    locationLine: "Nafplio, Greece",
    heroImage: {
      src: "/appartment-b/Nafplio%20(1).jpg",
      alt: "Ivory Boutique Stay Nafplio",
    },
    quickFacts: [
      { label: "Guests", value: "3 – 4" },
      { label: "Bedrooms", value: "1" },
      { label: "Beds", value: "1 double + 1 sofa bed" },
      { label: "Bathroom", value: "1" },
    ],
    highlights: [
      "Large living room.",
      "Dedicated workspace corner.",
      "With its own parking space.",
    ],
    amenities: [
      "Air conditioning",
      "Fast Wi‑Fi",
      "Smart TV",
      "Fully equipped kitchen",
      "Parking space",
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
      phoneDisplay: "+30 697 699 4134",
      phoneE164: "+306976994134",
      email: "dimsmirlis7@gmail.com",
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

