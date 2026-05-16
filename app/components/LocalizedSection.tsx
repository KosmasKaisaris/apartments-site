"use client";

import type { ReactNode } from "react";
import { Section } from "./Ui";
import { useI18n } from "./I18nClient";

type SectionKind = "highlights" | "amenities" | "gallery";

export function LocalizedSection(props: {
  kind: SectionKind;
  children: ReactNode;
}) {
  const { dict } = useI18n();

  const content =
    props.kind === "highlights"
      ? {
          eyebrow: dict.apartment.whyLoveEyebrow,
          title: dict.apartment.highlightsTitle,
          description: dict.apartment.highlightsDesc,
        }
      : props.kind === "amenities"
        ? {
            eyebrow: dict.apartment.comfortEyebrow,
            title: dict.apartment.amenitiesTitle,
            description: dict.apartment.amenitiesDesc,
          }
        : {
            eyebrow: dict.apartment.photosEyebrow,
            title: dict.apartment.galleryTitle,
            description: dict.apartment.galleryDesc,
          };

  return (
    <Section
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      {props.children}
    </Section>
  );
}
