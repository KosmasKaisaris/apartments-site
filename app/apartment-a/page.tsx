import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Container, Section } from "../components/Ui";
import {
  Amenities,
  ApartmentHero,
  Highlights,
} from "../components/ApartmentSections";
import { LightboxGallery } from "../components/LightboxGallery";
import { getApartment } from "../lib/siteContent";
import { getImagesFromPublicFolder } from "../lib/publicImages";

const apartment = getApartment("apartment-a");

export const metadata: Metadata = {
  title: apartment.name,
  description: apartment.tagline,
};

export default async function ApartmentAPage() {
  const images = await getImagesFromPublicFolder({
    folder: "appartment-a",
    altPrefix: apartment.name,
  });

  return (
    <div className="flex min-h-dvh flex-col bg-white dark:bg-black">
      <SiteHeader />
      <main className="flex-1">
        <ApartmentHero apartment={apartment} />

        <Container>
          <Section
            eyebrow="Why you’ll love it"
            title="Highlights"
            description="A quick overview of what makes this apartment special."
          >
            <Highlights highlights={apartment.highlights} />
          </Section>

          <Section
            eyebrow="Comfort"
            title="Amenities"
            description="Everything you need for a smooth, easy stay."
          >
            <Amenities items={apartment.amenities} />
          </Section>

          <Section
            eyebrow="Photos"
            title="Gallery"
            description="Tap a photo to view full screen. Use arrows to browse."
          >
            <LightboxGallery images={images} />
          </Section>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

