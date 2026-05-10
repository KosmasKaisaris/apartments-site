import Link from "next/link";
import type { ReactNode } from "react";

export function Container(props: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">{props.children}</div>;
}

export function Section(props: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-10 sm:py-16">
      <div className="space-y-3">
        {props.eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            {props.eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
          {props.title}
        </h2>
        {props.description ? (
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {props.description}
          </p>
        ) : null}
      </div>
      {props.children ? <div className="mt-8">{props.children}</div> : null}
    </section>
  );
}

export function Card(props: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
      {props.children}
    </div>
  );
}

export function Pill(props: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-300 sm:px-3 sm:text-sm">
      {props.children}
    </span>
  );
}

export function PrimaryLink(props: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:w-auto";

  if (props.external) {
    return (
      <a
        className={className}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link className={className} href={props.href}>
      {props.children}
    </Link>
  );
}

export function SecondaryLink(props: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "inline-flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:text-zinc-100 dark:hover:bg-white/5 sm:w-auto";

  if (props.external) {
    return (
      <a
        className={className}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link className={className} href={props.href}>
      {props.children}
    </Link>
  );
}

