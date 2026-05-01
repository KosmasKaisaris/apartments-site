import { readdir } from "node:fs/promises";
import path from "node:path";

type PublicImage = {
  src: string;
  alt: string;
};

function isImageFile(name: string) {
  const lower = name.toLowerCase();
  return (
    lower.endsWith(".jpg") ||
    lower.endsWith(".jpeg") ||
    lower.endsWith(".png") ||
    lower.endsWith(".webp")
  );
}

function sortByTrailingNumberThenName(a: string, b: string) {
  const getN = (s: string) => {
    const m = s.match(/(\d+)(?=\.[^.]+$)/);
    return m ? Number(m[1]) : Number.POSITIVE_INFINITY;
  };
  const na = getN(a);
  const nb = getN(b);
  if (na !== nb) return na - nb;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function toPublicUrl(folder: string, fileName: string) {
  // Ensure spaces / non-ascii are URL-safe.
  const encoded = encodeURIComponent(fileName).replace(/%2F/g, "/");
  return `/${folder}/${encoded}`;
}

export async function getImagesFromPublicFolder(params: {
  folder: string; // e.g. "appartment-a"
  altPrefix: string; // e.g. "Apartment A"
}): Promise<PublicImage[]> {
  const dir = path.join(process.cwd(), "public", params.folder);
  const items = await readdir(dir, { withFileTypes: true });

  const files = items
    .filter((x) => x.isFile())
    .map((x) => x.name)
    .filter(isImageFile)
    .sort(sortByTrailingNumberThenName);

  return files.map((fileName, idx) => ({
    src: toPublicUrl(params.folder, fileName),
    alt: `${params.altPrefix} — photo ${idx + 1}`,
  }));
}

