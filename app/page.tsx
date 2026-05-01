import Image from "next/image";
import Link from "next/link";
import { apartments } from "./lib/siteContent";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { getLocaleFromCookies } from "./lib/i18n.server";
import { t } from "./lib/i18n.shared";

export default async function Home() {
  const a = apartments[0];
  const b = apartments[1];
  const locale = await getLocaleFromCookies();
  const dict = t(locale);

  return (
    <div className="flex min-h-dvh flex-col bg-white dark:bg-black">
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:py-14">
          <div className="flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-600 dark:text-zinc-400">
              {dict.home.kicker}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              {dict.home.title}
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
              {dict.home.subtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <SplitPanel
              href={`/${a.slug}`}
              title={a.name}
              subtitle={a.tagline}
              meta={a.locationLine}
              imageSrc={a.heroImage.src}
              imageAlt={a.heroImage.alt}
            />
            <SplitPanel
              href={`/${b.slug}`}
              title={b.name}
              subtitle={b.tagline}
              meta={b.locationLine}
              imageSrc={b.heroImage.src}
              imageAlt={b.heroImage.alt}
            />
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <InfoCard
              title={dict.home.info1Title}
              description={dict.home.info1Desc}
            />
            <InfoCard
              title={dict.home.info2Title}
              description={dict.home.info2Desc}
            />
            <InfoCard
              title={dict.home.info3Title}
              description={dict.home.info3Desc}
            />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function SplitPanel(props: {
  href: string;
  title: string;
  subtitle: string;
  meta: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <Link
      href={props.href}
      className="group relative isolate flex h-[320px] items-end overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-950 shadow-sm transition hover:shadow-md dark:border-white/10"
    >
      <Image
        src={props.imageSrc}
        alt={props.imageAlt}
        fill
        className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
        sizes="(min-width: 1024px) 560px, 100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.22),transparent_55%)]" />

      <div className="relative w-full p-6 sm:p-10">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
          {props.meta}
        </div>
        <div className="mt-3 flex items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {props.title}
            </h1>
            <p className="max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {props.subtitle}
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur sm:inline-flex">
            View
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function InfoCard(props: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
      <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
        {props.title}
      </div>
      <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {props.description}
      </div>
    </div>
  );
}
