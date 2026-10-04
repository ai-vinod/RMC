import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { clinic } from '../data/clinic';
import { doctors, type Speciality } from '../data/doctors';
import { social } from '../data/social';
import { absoluteUrl } from './images';

/**
 * JSON-LD nodes. Everything is read from src/data/, so every marked-up value is also on the page.
 * Not built, by design (seo-brief Part F): AggregateRating, Review, SearchAction, microdata.
 */

const specialtyIri = {
  skin: ['Dermatology', 'Endocrine'],
  ortho: ['Musculoskeletal'],
  dental: ['Dentistry'],
} satisfies Record<Speciality, string[]>;

const iri = (names: string[]) => names.map((n) => `https://schema.org/${n}`);

/** A build-time resize of an imported image, as an absolute URL */
async function absoluteImage(image: ImageMetadata, site: URL, width: number, format: 'jpg' | 'png') {
  return absoluteUrl(await getImage({ src: image, width, format }), site);
}

export async function clinicNode(site: URL) {
  const id = new URL('/', site).href;
  return {
    '@type': 'MedicalClinic',
    '@id': `${id}#clinic`,
    name: clinic.name,
    url: id,
    logo: await absoluteImage(clinic.logo, site, 512, 'png'),
    image: await absoluteImage(clinic.image, site, 1200, 'jpg'),
    telephone: clinic.phone.tel,
    email: clinic.email,
    foundingDate: String(clinic.established),
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.locality,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    hasMap: clinic.mapsUrl,
    // One entry per session, each with its own days: morning runs all seven days, evening Monday to Saturday
    openingHoursSpecification: clinic.timings.map((t) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: t.days,
      opens: `${t.opens}:00`,
      closes: `${t.closes}:00`,
    })),
    medicalSpecialty: iri([...new Set(Object.values(specialtyIri).flat())]),
    sameAs: [clinic.mapsUrl, social.instagram, social.facebook, social.youtube],
  };
}

export function websiteNode(site: URL) {
  const id = new URL('/', site).href;
  return {
    '@type': 'WebSite',
    '@id': `${id}#website`,
    name: clinic.name,
    url: id,
    publisher: { '@id': `${id}#clinic` },
  };
}

/** For the About page, where all four doctors are shown. Each entry's anchor is the doctor's id. */
export async function physicianNodes(site: URL) {
  const clinicId = `${new URL('/', site).href}#clinic`;
  return Promise.all(
    doctors.map(async (doc) => {
      const url = new URL(`/about/#${doc.id}`, site).href;
      return {
        '@type': 'IndividualPhysician',
        '@id': url,
        name: doc.name,
        url,
        ...(doc.photo ? { image: await absoluteImage(doc.photo, site, 800, 'jpg') } : {}),
        medicalSpecialty: iri(specialtyIri[doc.speciality]),
        practicesAt: { '@id': clinicId },
        // Credentials exactly as supplied, one entry per comma-separated item
        hasCredential: doc.qualifications
          .split(/,\s*(?![^()]*\))/)
          .map((name) => ({ '@type': 'EducationalOccupationalCredential', name })),
      };
    }),
  );
}

/** For inner pages, matching the visible breadcrumb. The last item has no URL. */
export function breadcrumbNode(site: URL, trail: { name: string; path?: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: new URL(item.path, site).href } : {}),
    })),
  };
}
