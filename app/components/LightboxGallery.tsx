"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Img = { src: string; alt: string };

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  const mod = i % len;
  return mod < 0 ? mod + len : mod;
}

export function LightboxGallery(props: { images: Img[] }) {
  const images = props.images;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const activeIndex = useMemo(
    () => (openIndex === null ? 0 : clampIndex(openIndex, images.length)),
    [openIndex, images.length],
  );

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const thumbStripRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? 0 : i - 1)),
    [],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? 0 : i + 1)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;

    // Focus a predictable control for accessibility.
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, prev, next]);

  useEffect(() => {
    if (!isOpen) return;
    const strip = thumbStripRef.current;
    if (!strip) return;

    const el = strip.querySelector<HTMLElement>(`[data-thumb-index="${activeIndex}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [isOpen, activeIndex]);

  if (images.length === 0) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-10 text-center text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
        No photos found in this folder.
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <button
            key={`${img.src}-${idx}`}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm outline-none ring-zinc-950/10 transition hover:shadow-md focus-visible:ring-4 dark:border-white/10 dark:bg-zinc-950 dark:ring-white/20"
            aria-label={`Open photo ${idx + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onMouseDown={(e) => {
            // Close when clicking backdrop (but not the image/control panel).
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col">
            <div className="flex items-center justify-between gap-3 pb-3">
              <div className="text-sm font-medium text-white/80">
                {activeIndex + 1} / {images.length}
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
                onClick={close}
              >
                Close
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                key={images[activeIndex]?.src}
                src={images[activeIndex]!.src}
                alt={images[activeIndex]!.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
                aria-label="Previous photo"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
                aria-label="Next photo"
              >
                →
              </button>
            </div>

            <div className="pt-3">
              <div
                ref={thumbStripRef}
                className="flex gap-2 overflow-x-auto rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent]"
                aria-label="Thumbnail strip"
              >
                {images.map((img, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={`${img.src}-thumb-${idx}`}
                      type="button"
                      data-thumb-index={idx}
                      onClick={() => setOpenIndex(idx)}
                      className={[
                        "relative aspect-square h-16 shrink-0 overflow-hidden rounded-xl ring-1 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25 sm:h-20",
                        isActive
                          ? "ring-white/60"
                          : "ring-white/15 hover:ring-white/35",
                      ].join(" ")}
                      aria-label={`View photo ${idx + 1}`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className={[
                          "object-cover",
                          isActive ? "" : "opacity-80 hover:opacity-100",
                        ].join(" ")}
                        sizes="80px"
                      />
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 text-xs text-white/60">
                Use ←/→ to navigate, Esc to close.
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

