import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200/70 dark:bg-black dark:ring-white/10">
            <Image
              src="/Logo.png"
              alt="Logo"
              fill
              className="object-contain p-1"
              sizes="36px"
              priority
            />
          </span>
          <span className="text-sm uppercase tracking-[0.18em] text-zinc-700 group-hover:text-zinc-950 dark:text-zinc-300 dark:group-hover:text-white">
            Luxery Apartments Theodoras
          </span>
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/apartment-a"
            className="rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Parga
          </Link>
          <Link
            href="/apartment-b"
            className="rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Nafplio
          </Link>
        </nav>
      </div>
    </header>
  );
}

