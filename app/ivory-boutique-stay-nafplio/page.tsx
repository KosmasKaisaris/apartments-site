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

const apartment = getApartment("ivory-boutique-stay-nafplio");

export const metadata: Metadata = {
  title: apartment.name,
  description: apartment.tagline,
  keywords: [
    "Nafplio apartment",
    "Nafplio hotel alternative",
    "boutique stay Nafplio",
    "amazing stay Nafplio",
    "couples apartment Nafplio",
    "Greece city break apartment",
  ],
  openGraph: {
    title: "Ivory Boutique Stay Nafplio",
    description:
      "Amazing boutique apartment in Nafplio, Greece. Perfect for couples and longer stays.",
    type: "website",
  },
};

export default async function IvoryBoutiqueStayNafplioPage() {
  const images = await getImagesFromPublicFolder({
    folder: "appartment-b",
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

