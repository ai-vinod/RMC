/**
 * Builds image URLs from the photo / logo / image fields in src/data/.
 * Components never write an image path themselves.
 */
export function imageUrl(path: string): string {
  return `/${path}`;
}

export function absoluteImageUrl(path: string, site: URL | string): string {
  return new URL(imageUrl(path), site).href;
}
