/**
 * Homepage words, from docs/content.md ("Final copy — homepage" and "Homepage labels and microcopy").
 * Never take wording from docs/design/homepage-approved.html.
 */
export const hero = {
  kicker: 'Multi speciality clinic · Kanchipuram',
  lineOne: 'Skin, Ortho and Dental Clinic',
  lineTwo: 'Caring for Kanchipuram Since 1985',
  subLine: 'Four qualified doctors across dermatology, diabetes, orthopaedics and dentistry.',
  /** Chip states, built from clinic.timings: "Open now until 1.30 pm", "Closed · Opens 6.30 pm", "Closed · Opens 10.30 am tomorrow" */
  chip: { open: 'Open now until', closed: 'Closed', opens: 'Opens', tomorrow: 'tomorrow' },
  whatsappButton: 'WhatsApp',
  timingsButton: 'Clinic timings',
  bookButton: 'Book an appointment',
  /** The timings panel in Find us */
  timingsHref: '#timings',
  bookHref: '/contact/',
};

export const facts = {
  /** The founding year comes from clinic.established, the doctor count from doctors.ts */
  establishedLabel: 'Caring for Kanchipuram',
  doctorsLabel: 'Qualified doctors',
  generations: 2,
  generationsLabel: 'Generations of doctors',
};
