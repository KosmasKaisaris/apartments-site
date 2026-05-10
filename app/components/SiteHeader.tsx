import Link from "next/link";
import Image from "next/image";
import { apartments } from "../lib/siteContent";
import { getLocaleFromCookies } from "../lib/i18n.server";
import { t } from "../lib/i18n.shared";
import { LanguageToggle } from "./LanguageToggle";

export async function SiteHeader() {
  const a = apartments[0];
  const b = apartments[1];
  const locale = await getLocaleFromCookies();
  const dict = t(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/50">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-5 py-3 sm:gap-6 sm:py-4">
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center gap-3 font-semibold tracking-tight text-zinc-950 transition-colors dark:text-zinc-50"
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200/70 transition-transform duration-200 group-hover:-translate-y-0.5 dark:bg-black dark:ring-white/10">
            <Image
              src="/Logo.png"
              alt="Logo"
              fill
              className="object-contain p-1.5"
              sizes="40px"
              priority
            />
          </span>
          <span className="text-[0.72rem] uppercase tracking-[0.24em] text-zinc-700 transition-colors group-hover:text-zinc-950 dark:text-zinc-300 dark:group-hover:text-white">
            {dict.header.title}
          </span>
        </Link>

        <nav className="ml-auto flex items-center gap-1.5 text-sm sm:gap-2">
          <Link
            href={`/${a.slug}`}
            className="rounded-full px-3.5 py-2 text-zinc-700 transition-colors hover:bg-zinc-100/80 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {dict.header.parga}
          </Link>
          <Link
            href={`/${b.slug}`}
            className="rounded-full px-3.5 py-2 text-zinc-700 transition-colors hover:bg-zinc-100/80 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {dict.header.nafplio}
          </Link>
          <div className="pl-2 sm:pl-3">
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

