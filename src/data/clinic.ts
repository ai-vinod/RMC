import type { ImageMetadata } from 'astro';
import logo from '../assets/images/logo/logo-raw.png';
import entrance from '../assets/images/clinic/clinic-entrance.jpeg';

export type DayName = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface Session {
  label: string;
  /** 24h, for schema and the open-now chip */
  opens: string;
  closes: string;
  /** For display */
  display: string;
  days: DayName[];
}

const allDays: DayName[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const clinic = {
  /** The signboard name. Never add services or the town to it. */
  name: 'Rani Multi Speciality Clinic',
  town: 'Kanchipuram',
  /** Practice has run since 1985; rebranded as Rani Multi Speciality Clinic in 2015 */
  established: 1985,
  rebranded: 2015,

  /** The one address, used for the visible text and for schema. Never write it anywhere else. */
  address: {
    /** The street on its own, for prose. `street` below is what goes in the address. */
    streetName: 'Sangupani Vinayagar Koil Street',
    street: '5B, Sangupani Vinayagar Koil Street',
    locality: 'Big Kanchipuram',
    region: 'Tamil Nadu',
    postalCode: '631502',
    country: 'IN',
  },
  geo: { latitude: 12.8380649, longitude: 79.7055714 },
  mapsUrl:
    'https://www.google.com/maps/place/Rani+Multi+Speciality+Clinic+-+Skin,+Diabetic,+Dental,+Bones+%26+Joints,+Orthopaedic+Care+%7C+Kanchipuram,+Tamil+Nadu/@12.8380649,79.7055714,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52c2574e3c75d5:0xfa48903076d3144a!8m2!3d12.8380649!4d79.7055714!16s%2Fg%2F11f3bkkyg2?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
  /** Short link behind "Read all reviews on Google" */
  reviewsUrl: 'https://maps.app.goo.gl/UnBQ3r3yjymLFgN96',
  /** Google Business Profile rating, per requirements.md. Refresh with the reviews. */
  googleRating: '4.6',

  phone: {
    display: '99453 89639',
    tel: '+919945389639',
  },
  whatsapp: {
    display: '99453 89639',
    /** wa.me takes the number without + */
    number: '919945389639',
    /** Stays generic. Never put anything patient-specific here. */
    message: "Hello, I'd like to book an appointment at the clinic.",
  },
  email: 'info@raniclinickanchi.com',

  timings: [
    {
      label: 'Morning',
      opens: '10:30',
      closes: '13:30',
      display: '10.30am–1.30pm',
      days: allDays,
    },
    {
      label: 'Evening',
      opens: '18:30',
      closes: '20:30',
      display: '6.30–8.30pm',
      days: allDays.filter((d) => d !== 'Sunday'),
    },
  ] satisfies Session[],

  /** Imported so astro:assets can process them. Schema and og:image wrap them with absoluteUrl(). */
  logo: logo as ImageMetadata,
  image: entrance as ImageMetadata,
};

/** The visible address, assembled from clinic.address: two lines */
export const addressLines = [
  `${clinic.address.street},`,
  `${clinic.address.locality}, ${clinic.address.region} ${clinic.address.postalCode}`,
];

export const whatsappUrl = `https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(clinic.whatsapp.message)}`;
