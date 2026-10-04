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

export const specialities = {
  kicker: 'What we treat',
  heading: 'Three specialities, one clinic',
  cards: [
    {
      title: 'Skin & Diabetes',
      icon: 'skin',
      line: 'Skin specialist care for acne, hair fall, allergies and diabetes.',
      linkText: 'See treatments →',
      href: '/skin-and-diabetes/',
    },
    {
      title: 'Bones & Joints',
      icon: 'bones',
      line: 'Orthopaedic care for knee pain, back pain and joint problems.',
      note: 'In clinic one Sunday a month. Video consultations on other days.',
      linkText: 'See treatments →',
      href: '/bones-and-joints/',
    },
    {
      title: 'Dental',
      icon: 'tooth',
      line: 'Root canal treatment, implants and routine dental care.',
      linkText: 'Contact us →',
      // No dental page in v1; repoint when it is built
      href: '/contact/',
    },
  ],
} as const;

export const doctorsSection = {
  kicker: 'Meet the team',
  heading: 'Our doctors',
  /** The small label above each name, matching the speciality card titles */
  fieldLabels: { skin: 'Skin & Diabetes', ortho: 'Bones & Joints', dental: 'Dental' },
} as const;

export const whyUs = {
  kicker: 'Why patients come to us',
  heading: 'Why patients choose Rani Multi Speciality Clinic',
  // The three reasons settled 4 Oct, from requirements.md (Homepage layout). content.md's "Final copy" block still has the first set.
  reasons: [
    { title: 'Here since 1985', text: 'Two generations of the same family treating patients in Kanchipuram.' },
    { title: 'Three specialities, one visit', text: 'Skin, bones and teeth seen under one roof, without being sent elsewhere.' },
    { title: 'Specialist-led care', text: 'Each doctor practises in one field rather than general medicine.' },
  ],
} as const;

export const videosSection = {
  kicker: 'In their own words',
  heading: 'Patient stories',
  /** Names on the source badge */
  platformLabels: { instagram: 'Instagram', youtube: 'YouTube' },
  /** Fallback link under the player, always shown: "Watch on Instagram ↗" */
  watchOn: 'Watch on',
  /** Screen-reader labels, not visible text */
  a11y: { play: 'Play video:', previous: 'Previous', next: 'Next', close: 'Close video' },
} as const;

export const reviewsSection = {
  kicker: 'Patient reviews',
  heading: 'What our patients say',
  countLine: '130+ reviews on Google',
  linkText: 'Read all reviews on Google →',
} as const;

export const blogSection = {
  kicker: 'From the clinic',
  heading: 'Health advice from our doctors',
} as const;
