# Rani Multi Speciality Clinic — website

Static site for a four-doctor clinic in Kanchipuram, Tamil Nadu. Astro + Tailwind, built
locally, uploaded to Hostinger. Five pages at launch plus a blog. The only conversion on
this site is a phone call.

## The three documents

Read the one that owns the question. Do not reconcile them yourself — if two disagree, stop
and say so.

| Document | Owns |
| --- | --- |
| `docs/requirements.md` | Decisions. What we are building, what was settled, what is still open. The record of the project. |
| `docs/content.md` | Words. Every line of copy that appears on the site, approved by the client. |
| `docs/seo-brief.md` | Technical rules. Schema, URLs, meta, performance budgets, the do-not-build list. |

This file is the index and the standing rules. Nothing else belongs in it.

## The documents in `docs/` are read-only

`docs/requirements.md` and `docs/content.md` are exported snapshots. The living versions are
Claude Docs on claude.ai, edited in conversation with the client's decisions as they happen.
`docs/seo-brief.md` was written once, outside this repo.

**Never edit anything in `docs/`.** The flow is one-way: Claude Doc → `docs/*.md` → the build.
Nothing flows back. If a snapshot says something that contradicts what you have just been
told, it is a stale snapshot, not a conflict to resolve — say so and stop, so it can be
re-exported before the build continues.

Re-export before starting each page. A snapshot more than a few days old is suspect.

## Facts that must never be wrong

- Clinic name: **Rani Multi Speciality Clinic**. "Multispeciality" is correct Indian English.
  Not "multispecialty".
- Ortho surgeon is **Dr. P Madhavan** everywhere. His father, the dermatologist, is
  **Dr. Paramanantham**. The two names are nearly identical — check which one you mean.
- Phone: **99453 89639**. Confirmed on WhatsApp.
- Email: **info@raniclinickanchi.com**. Never a Gmail address.
- Canonical host: **https://www.raniclinickanchi.com/** — www, HTTPS, trailing slash.
- Timings: morning **10.30am–1.30pm every day, Sunday included**. Evening **6.30–8.30pm,
  Monday to Saturday only**. Two `openingHoursSpecification` entries, not one.
- Founded **1985**, rebranded as Rani Multi Speciality Clinic in **2015**. The site says 1985.
- Review count is written **"130+"**, never an exact number.

Everything else comes from `src/data/`. Never hardcode a phone number, an address, a doctor's
name or a timing into a component.

## Compliance — the rules with legal weight

Indian medical advertising is governed by the IMC 2002 ethics regulations and the Drugs and
Magic Remedies Act 1954. These are not style preferences.

- No superlatives: best, No. 1, leading, trusted, world-class, centre of excellence, painless,
  advanced.
- No cure claims, no guaranteed outcomes, no recovery timelines.
- **No page may imply the clinic performs robotic surgery.** Dr. Madhavan trained in robotic
  joint replacement. Training is not equipment. Where the procedures actually happen is still
  an open question in `requirements.md`.
- No device or drug brand names, no before-and-after images, no patient faces without release.
- Never invent a clinical specific — recovery times, session counts, protocols, prices.
  Leave a blank and flag it for the doctor.
- Only services the clinic has confirmed it provides, whatever the keyword research says.

## Design rules

- Orange `#F7941D` is the brand colour. **Charcoal `#1A1E22` is the call-to-action colour.**
  The one thing you most want tapped is the one thing that is not orange.
- One exception: hero line two is white on the orange gradient. That is roughly 2.3:1, below
  WCAG AA, and it is deliberate. Nowhere else does white sit on orange — text on an orange
  ground is `#241703` or `#1A1206`.
- Every colour, type size and spacing value lives in `src/styles/tokens.css`. No component
  defines a colour.
- Two font families at most, self-hosted woff2 from `/fonts`, `font-display: swap`. No Google
  Fonts CDN.

## Technical rules

- `trailingSlash: 'always'` in `astro.config.mjs`; `.htaccess` in `public/` 301s non-www to www
  and adds a missing slash.
- Schema: `MedicalClinic` (no inpatient beds, so not `Hospital`) and `IndividualPhysician` with
  `practicesAt`. Not `Physician` + `worksFor` — invalid since Schema.org v24.
- GA4 is gtag.js in `src/layouts/Base.astro`, ID `G-0JR621K377`. No GTM. Events: `call_click`,
  `directions_click`, `whatsapp_click`, `generate_lead`, with `placement` as an event-scoped
  custom dimension. One delegated click listener, not per-button handlers.
- Never send a name, phone number or email to GA4 — not in an event, a URL or a page title.
- **No API key in page source.** The five Google reviews are hand-copied into
  `src/data/reviews.ts`, refreshed manually once or twice a year.
- Patient videos are 9:16, in a horizontal rail, loaded into a lightbox on tap. Never five
  iframes sitting in the page.
- Budgets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, Lighthouse mobile 90+.
- Any preview or staging copy carries `noindex` and `Disallow: /`. The repo stays private.

## Do not build

From `seo-brief.md`, section F. These look helpful and are not:
`AggregateRating` or `Review` markup, `SearchAction`, microdata, `robots` index/follow meta
tags, meta keywords, location landing pages, remarketing tags.

## How to work here

- **One thing at a time.** If something new comes up mid-task, write it into
  `requirements.md` under Open questions. Do not action it.
- Commit after every change that works. Small commits, plain messages.
- Content comes from `docs/content.md`. If a line is not there, it has not been approved —
  ask, do not write it.
- Blog articles are markdown in `src/content/blog/`. `title` and `description` are required by
  the collection schema, so the build fails without them. That is intentional.
- When a decision gets made in conversation, it goes into `requirements.md` the same day or it
  is lost.
