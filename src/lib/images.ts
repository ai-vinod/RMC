import type { ImageMetadata } from 'astro';

/**
 * An imported image gives a relative build path like /_astro/photo.a1b2c3.webp.
 * JSON-LD and og:image need absolute URLs, so wrap every image with this.
 * Without it the markup validates and every image URL in it is broken.
 */
export function absoluteUrl(image: ImageMetadata | { src: string }, site: URL | string | undefined): string {
  return new URL(image.src, site).href;
}
