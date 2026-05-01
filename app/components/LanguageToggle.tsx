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
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

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
      className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold tracking-[0.24em] text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 dark:border-white/15 dark:bg-black dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-white"
      aria-label="Change language"
    >
      {locale.toUpperCase()}
    </button>
  );
}

