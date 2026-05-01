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
import { getLocaleFromCookies } from "../lib/i18n.server";
import { t } from "../lib/i18n.shared";

const apartment = getApartment("ivory-boutique-stay-nafplio");

export const metadata: Metadata = {
  title: apartment.name,
  description: apartment.tagline,
};

export default async function IvoryBoutiqueStayNafplioPage() {
  const dict = t(await getLocaleFromCookies());
  const images = await getImagesFromPublicFolder({
    folder: "appartment-b",
    altPrefix: apartment.name,
  });

  return (
    <div className="flex min-h-dvh flex-col bg-white dark:bg-black">
      <SiteHeader />
      <main className="flex-1">
        <ApartmentHero apartment={apartment} />

        <Container>
          <Section
            eyebrow={dict.apartment.whyLoveEyebrow}
            title={dict.apartment.highlightsTitle}
            description={dict.apartment.highlightsDesc}
          >
            <Highlights highlights={apartment.highlights} />
          </Section>

          <Section
            eyebrow={dict.apartment.comfortEyebrow}
            title={dict.apartment.amenitiesTitle}
            description={dict.apartment.amenitiesDesc}
          >
            <Amenities items={apartment.amenities} />
          </Section>

          <Section
            eyebrow={dict.apartment.photosEyebrow}
            title={dict.apartment.galleryTitle}
            description={dict.apartment.galleryDesc}
          >
            <LightboxGallery images={images} />
          </Section>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

