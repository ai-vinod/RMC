import { clinic } from './clinic';
import { doctors } from './doctors';
import { formatTime } from '../lib/time';

/**
 * About page words, from docs/content.md ("About page — draft copy").
 * Facts that live in src/data/ (years, names, street, timings) are filled in from there, so they cannot drift.
 * GAPs in the draft are left out, not stubbed: the Dr. P Madhavan and Dr. Niranjani bios, and the gallery.
 * Doctor names always come from doctors.ts, so they carry the settled display spelling.
 */
const doc = (id: (typeof doctors)[number]['id']) => doctors.find((d) => d.id === id)!.name;
const [morning, evening] = clinic.timings;
const range = (s: { opens: string; closes: string }) => `${formatTime(s.opens)} to ${formatTime(s.closes)}`;

export const about = {
  title: `About Our Clinic | Rani Clinic, Kanchipuram Since ${clinic.established}`,
  description: `Four qualified doctors across skin, diabetes, bones, joints and dental care — two generations of the same family in Kanchipuram since ${clinic.established}.`,
  headline: `Four doctors, one clinic, since ${clinic.established}`,
  story: [
    `${clinic.name} has been treating families in Kanchipuram since ${clinic.established}. It took its present name in ${clinic.rebranded}, by which time the practice covered three specialities rather than one.`,
    `Four qualified doctors see patients here. ${doc('dr-paramanantham')}, who has practised for forty years, consults in dermatology and diabetes. ${doc('dr-p-madhavan')} is an orthopaedic surgeon. ${doc('dr-p-sudharsan')} and ${doc('dr-niranjani')} look after the dental side. Two generations of the same family, each working in their own field.`,
    `${doc('dr-paramanantham')} opened the clinic as a small practice forty years ago, treating patients from Kanchipuram and the villages around it. In those decades he has seen a great many cases of vitiligo, psoriasis, eczema, contact and allergic dermatitis and fungal infections. His sons and daughter-in-law joined later — ${doc('dr-p-sudharsan')} and ${doc('dr-niranjani')} brought dental and root canal treatment to the clinic, and ${doc('dr-p-madhavan')} consults in orthopaedics. What began as one doctor's room is now three specialities under one roof.`,
  ],
  facilitiesHeading: 'Facilities',
  facilities: [
    'The clinic has three consulting rooms, with a laboratory and a pharmacy on the premises — so tests and medicines usually mean one visit rather than three.',
    `Morning consultations run every day including Sunday, ${range(morning)}. Evening consultations run Monday to Saturday, ${range(evening)}.`,
  ],
};

/** Doctor bios by id. Dr. P Madhavan and Dr. Niranjani have none yet, and show none. */
export const bios: Partial<Record<(typeof doctors)[number]['id'], string>> = {
  'dr-paramanantham': `${doc('dr-paramanantham')} opened the clinic forty years ago and has practised in Kanchipuram ever since. He treats skin conditions and diabetes, and sees vitiligo, psoriasis, eczema, contact and allergic dermatitis and fungal infections most often, in patients from the town and the villages around it.`,
  'dr-p-sudharsan': `${doc('dr-p-sudharsan')} is a certified endodontist. He worked at Apollo Hospitals in Chennai before returning to Kanchipuram to practise here, and handles root canal treatment at the clinic.`,
};
