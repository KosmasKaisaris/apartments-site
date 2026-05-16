"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "../lib/i18n.shared";

function getInitialLocale(): Locale {
  if (typeof document === "undefined") return "en";
  const match = document.cookie
    .split(";")
    .map((x) => x.trim())
    .find((x) => x.startsWith(`${LOCALE_COOKIE}=`));
  const v = match?.split("=")[1];
  return v === "el" || v === "en" ? v : "en";
}

export function LanguageToggle() {
  const router = useRouter();
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());


  const next: Locale = locale === "en" ? "el" : "en";

  return (
    <button
      type="button"
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
        try {
          localStorage.setItem(LOCALE_COOKIE, next);
        } catch {}
        setLocale(next);
        router.refresh();
      }}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/80 px-3.5 py-2 text-[0.7rem] font-semibold tracking-[0.28em] text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:text-zinc-950 dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/10 dark:hover:text-white"
      aria-label="Switch language"
    >
      <span className={locale === "en" ? "text-zinc-950 dark:text-white" : "text-zinc-400 dark:text-zinc-400"}>
        EN
      </span>
      <span className="text-zinc-400 dark:text-zinc-500">/</span>
      <span className={locale === "el" ? "text-zinc-950 dark:text-white" : "text-zinc-400 dark:text-zinc-400"}>
        GR
      </span>
    </button>
  );
}

