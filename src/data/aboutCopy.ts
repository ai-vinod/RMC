import { clinic } from './clinic';
import { doctors } from './doctors';
import { formatTime } from '../lib/time';

/**
 * About page words, from docs/content.md ("About page — draft copy").
 * Facts that live in src/data/ (years, names, street, timings) are filled in from there, so they cannot drift.
 * GAPs in the draft are left out, not stubbed: the third story paragraph, the facilities detail,
 * the doctor bios and the gallery.
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
  ],
  facilitiesHeading: 'Facilities',
  facilities: [
    `The clinic is on ${clinic.address.streetName} in ${clinic.address.locality}, beside Aruna Mahal Kalyana Mandapam. Inside there are separate consulting rooms for dermatology, orthopaedics and dentistry, with a waiting area at the front.`,
    `Morning consultations run every day including Sunday, ${range(morning)}. Evening consultations run Monday to Saturday, ${range(evening)}.`,
  ],
};
