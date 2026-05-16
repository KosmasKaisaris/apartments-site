type Img = { src: string; alt: string };

export function LightboxGallery(props: { images: Img[] }) {
  const images = props.images;

  if (images.length === 0) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-10 text-center text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
        No photos found in this folder.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, idx) => (
        <div
          key={`${img.src}-${idx}`}
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

