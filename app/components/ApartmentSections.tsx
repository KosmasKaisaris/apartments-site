import Image from "next/image";
import { Card, Pill, PrimaryLink, SecondaryLink } from "./Ui";
import type { Apartment } from "../lib/siteContent";
import { t } from "../lib/i18n.shared";

export function ApartmentHero(props: { apartment: Apartment }) {
  const { apartment } = props;
  const dict = t("en");

  return (
    <div className="relative overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white dark:border-white/10 dark:from-black dark:to-black">
      <div className="absolute inset-0 opacity-[0.65] [background:radial-gradient(1200px_circle_at_20%_-10%,rgba(0,0,0,0.08),transparent_55%),radial-gradient(900px_circle_at_90%_0%,rgba(0,0,0,0.06),transparent_55%)] dark:opacity-100 dark:[background:radial-gradient(1200px_circle_at_20%_-10%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(900px_circle_at_90%_0%,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-5 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="space-y-4 lg:col-span-6">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              {apartment.locationLine}
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
              {apartment.name}
            </h1>
            <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base sm:leading-7 lg:text-lg">
              {apartment.tagline}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {apartment.quickFacts.map((f) => (
                <Pill key={f.label}>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    {f.value}
                  </span>
                  <span className="px-2 text-zinc-400">•</span>
                  <span>{f.label}</span>
                </Pill>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <PrimaryLink href={`mailto:${apartment.contact.email}`} external>
                {apartment.contact.email}
              </PrimaryLink>
              <SecondaryLink href={`tel:${apartment.contact.phoneE164}`} external>
                {dict.apartment.call} {apartment.contact.phoneDisplay}
              </SecondaryLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950 sm:rounded-3xl">
              <Image
                src={apartment.heroImage.src}
                alt={apartment.heroImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Highlights(props: { highlights: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.highlights.map((h) => (
        <Card key={h}>
          <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            {h}
          </div>
        </Card>
      ))}
    </div>
  );
}

export function Amenities(props: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {props.items.map((x) => (
        <div
          key={x}
          className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300"
        >
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-[11px] font-semibold text-white dark:bg-white dark:text-black">
            ✓
          </span>
          <span>{x}</span>
        </div>
      ))}
    </div>
  );
}

export function Gallery(props: { images: Array<{ src: string; alt: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      {props.images.map((img, idx) => {
        const span =
          idx === 0 ? "md:col-span-7" : idx === 1 ? "md:col-span-5" : "md:col-span-4";
        return (
          <div
            key={`${img.src}-${idx}`}
            className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950 ${span}`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        );
      })}
    </div>
  );
}

