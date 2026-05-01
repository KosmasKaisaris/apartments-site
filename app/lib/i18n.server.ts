import { cookies } from "next/headers";
import { LOCALE_COOKIE, type Locale } from "./i18n.shared";

export async function getLocaleFromCookies(): Promise<Locale> {
  const store = await cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  return raw === "el" || raw === "en" ? raw : "en";
}

