import type { ImageMetadata } from 'astro';
import paramanantham from '../assets/images/doctors/dr-paramanantham-skin.jpeg';
import madhavan from '../assets/images/doctors/dr-madhavan-ortho.jpeg';

export type Speciality = 'skin' | 'ortho' | 'dental';

export interface Doctor {
  /** Anchor on the About page, per seo-brief B3 */
  id: 'dr-paramanantham' | 'dr-p-madhavan' | 'dr-p-sudharsan' | 'dr-niranjani';
  /** Display name, spelt exactly as in requirements.md */
  name: string;
  /** Credential string, exactly as supplied */
  qualifications: string;
  role: string;
  speciality: Speciality;
  /** Imported photo, or null while the photo is outstanding */
  photo: ImageMetadata | null;
  /** Service page this doctor links to, or null where none exists in v1 */
  page: string | null;
  /** Extra line shown with the role */
  note?: string;
}

export const doctors: Doctor[] = [
  {
    id: 'dr-paramanantham',
    name: 'Dr. Paramanantham',
    qualifications: 'MBBS, DD, Dip. in Diabetes Medicine',
    role: 'Dermatologist and diabetologist',
    speciality: 'skin',
    photo: paramanantham as ImageMetadata,
    page: '/skin-and-diabetes/',
    note: '40 years of experience',
  },
  {
    id: 'dr-p-madhavan',
    name: 'Dr. P Madhavan',
    qualifications: 'MBBS, MS (Ortho), FIJR, FIRJR',
    // Training and title, not a statement about equipment at this clinic. See requirements.md, "The doctors".
    role: 'Trauma and robotic joint replacement surgeon',
    speciality: 'ortho',
    photo: madhavan as ImageMetadata,
    page: '/bones-and-joints/',
    note: 'In clinic one Sunday a month',
  },
  {
    id: 'dr-p-sudharsan',
    name: 'Dr. P. Sudharsan',
    qualifications: 'BDS, MDS (Conservative & Endodontic Dentistry)',
    role: 'Consultant endodontist — root canal treatment',
    speciality: 'dental',
    photo: null,
    page: null,
  },
  {
    id: 'dr-niranjani',
    name: 'Dr. Niranjani',
    qualifications: 'BDS, FICD, FIC (IMP)',
    role: 'Consultant cosmetologist and implantologist',
    speciality: 'dental',
    photo: null,
    page: null,
  },
];
