import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Container } from "../components/Ui";
import {
  Amenities,
  ApartmentHero,
  Highlights,
} from "../components/ApartmentSections";
import { LightboxGallery } from "../components/LightboxGallery";
import { LocalizedSection } from "../components/LocalizedSection";
import { getApartment } from "../lib/siteContent";
import { getImagesFromPublicFolder } from "../lib/publicImages";

const apartment = getApartment("stone-villa-parga");

export const metadata: Metadata = {
  title: apartment.name,
  description: apartment.tagline,
  keywords: [
    "Parga villa",
    "stone villa Parga",
    "Parga hotel alternative",
    "amazing villa Greece",
    "family villa Parga",
    "sea view villa Parga",
  ],
  openGraph: {
    title: "Wood and Stone Villa Parga",
    description:
      "Amazing stone villa in Parga, Greece with sea views, ideal for families and direct booking.",
    type: "website",
  },
};

export default async function StoneVillaPargaPage() {
  const images = await getImagesFromPublicFolder({
    folder: "appartment-a",
    altPrefix: apartment.name,
  });

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ApartmentHero apartment={apartment} />

        <Container>
          <LocalizedSection kind="highlights">
            <Highlights apartment={apartment} />
          </LocalizedSection>

          <LocalizedSection kind="amenities">
            <Amenities apartment={apartment} />
          </LocalizedSection>

          <LocalizedSection kind="gallery">
            <LightboxGallery images={images} />
          </LocalizedSection>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

