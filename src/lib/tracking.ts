/**
 * The fixed vocabulary for the GA4 `placement` parameter, used by call_click and whatsapp_click.
 * Components set data-placement from this list; Base.astro's listener rejects anything else.
 */
export const placements = ['header', 'hero', 'footer', 'floating', 'contact_page'] as const;

export type Placement = (typeof placements)[number];
