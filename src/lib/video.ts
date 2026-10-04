import type { Video } from '../data/videos';

/** The id inside an Instagram or YouTube URL, or null if the URL is not a video. */
export function videoId(video: Video): string | null {
  const { url, platform } = video;
  if (platform === 'instagram') {
    return url.match(/instagram\.com\/(?:reel|reels|p|tv)\/([A-Za-z0-9_-]+)/)?.[1] ?? null;
  }
  return (
    url.match(/[?&]v=([A-Za-z0-9_-]{11})/)?.[1] ??
    url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/)?.[1] ??
    url.match(/youtube\.com\/(?:shorts|embed)\/([A-Za-z0-9_-]{11})/)?.[1] ??
    null
  );
}

/** The player URL the lightbox loads, only after a card is tapped. */
export function embedUrl(video: Video): string | null {
  const id = videoId(video);
  if (!id) return null;
  return video.platform === 'instagram'
    ? `https://www.instagram.com/reel/${id}/embed/`
    : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
}
