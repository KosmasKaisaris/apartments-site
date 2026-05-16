import Link from "next/link";
import { apartments } from "../lib/siteContent";
import { t } from "../lib/i18n.shared";

export function SiteFooter() {
  const primaryContact = apartments[0]?.contact;
  const phoneHref = primaryContact?.phoneE164
    ? `tel:${primaryContact.phoneE164}`
    : undefined;
  const emailHref = primaryContact?.email
    ? `mailto:${primaryContact.email}`
    : undefined;

  const year = new Date().getFullYear();
  const dict = t("en");

  return (
    <footer className="mt-auto border-t border-zinc-200/70 bg-white/72 backdrop-blur-sm dark:border-white/10 dark:bg-black/38">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-zinc-200/70 dark:bg-white dark:ring-white/10">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  className="h-full w-full object-contain p-1 dark:invert"
                />
              </span>
              <div className="min-w-0 leading-tight">
                <div className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Luxery Apartments 
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {dict.footer.directBooking}
                </div>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {dict.footer.about}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                {dict.footer.quickInfo}
              </div>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>{dict.footer.q1}</li>
                <li>{dict.footer.q2}</li>
                <li>{dict.footer.q3}</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                {dict.footer.contact}
              </div>
              <div className="space-y-2 text-sm">
                {phoneHref ? (
                  <a
                    href={phoneHref}
                    className="block text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                  >
                    {primaryContact.phoneDisplay}
                  </a>
                ) : (
                  <div className="text-zinc-600 dark:text-zinc-400">
                    {dict.footer.phoneSoon}
                  </div>
                )}

                {emailHref ? (
                  <a
                    href={emailHref}
                    className="block text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                  >
                    {primaryContact.email}
                  </a>
                ) : (
                  <div className="text-zinc-600 dark:text-zinc-400">
                    {dict.footer.emailSoon}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200/70 pt-6 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {year} Luxery Apartments. {dict.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}

