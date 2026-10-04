export type VideoCategory = 'Ortho' | 'Dental' | 'Skin';
export type VideoPlatform = 'instagram' | 'youtube';

export interface Video {
  platform: VideoPlatform;
  url: string;
  /** Card title, as supplied */
  title: string;
  category: VideoCategory;
}

// Supplied row 3 is not included: its URL is a Google Maps link (maps.app.goo.gl/UY6T8RumLCZ99iiH9), not a video.
// Add it back here once the real video URL is supplied.
export const videos: Video[] = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DPrR3XXjYwv/',
    title: 'Real patient success after knee replacement',
    category: 'Ortho',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/reel/DH1KqBEyQQZ/',
    title: 'Laser gum treatment - Gum depigmentation',
    category: 'Dental',
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/C8cOBV9SW3P/',
    title: 'Invisalign day!',
    category: 'Dental',
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DGOQ45eya1R/',
    title: 'Examine patient Teeth & Overall Health',
    category: 'Dental',
  },
];
