# Rani Clinic Website — Requirements

Oct 1, 2026 · @Vin

## How this project runs

Three documents, three jobs. They do not overlap.

| Document | Holds | Who reads it |
| --- | --- | --- |
| **This one** — Requirements | Decisions, what is parked, what is still open | Vin, when a decision needs checking |
| **Website Content** | The actual words for every page | Vin and the writers fill it; the doctors approve it |
| **seo-brief.md** | Rules for titles, meta descriptions and schema | Claude Code, at build time |

Claude Code reads `CLAUDE.md` automatically at the start of every session — the index and the standing rules, nothing more. All three documents also sit in `docs/` inside the repo as exported snapshots, so the code and the thinking behind it travel together. Those snapshots are read-only: Claude Code reads them and never edits them. When a decision changes, the Claude Doc is updated first and the snapshot re-exported before the next build session.

**Phases, in order.** Content first, because it is the bottleneck and everything else waits on it.

1. Fill the Website Content document — **homepage copy done and edited by Vin**
2. Send it to Dr. Madhavan for approval, one document, one approver, with a date. Practise on dotwin.xyz while waiting
3. Build — current phase. Direction picked, CLAUDE.md written, pages assembled
4. Launch — the Setup and launch checklist below covers it

**The rule when something new comes up** — a decision, a question, an asset: write it in this document and carry on with the current phase. Do not act on it straight away.

## Project snapshot

Approved 1 Oct 2026. Five-page static website plus a blog for Rani Multi Speciality Clinic, Kanchipuram, on the Growth plan.

| Item | Detail |
| --- | --- |
| Status | Approved. Holding page live; full build starts next |
| Client contact | Dr. P Madhavan (sole approver) |
| Specialties in v1 | Skin & Diabetes, Bones & Joints. Dental dropped on budget — see Parked for later |
| Primary focus | The skin page. Dr. Paramanantham is the clinic's main draw and the one doctor consulting in person |
| Build fee | Rs. 22,000, down from Rs. 25,000. 50% upfront, 50% on launch |
| Monthly retainer | Rs. 5,000 — Growth plan, billed quarterly in advance |
| Hosting | Vin's own server, Rs. 6,000/year |
| Domain | Bought by Vin at Dr. Madhavan's request and held in Vin's account, confirmed in writing. Client will take it over later |
| Domain name | www.raniclinickanchi.com. The www host is canonical; non-www 301s to it, and every URL ends in a trailing slash. Settled 4 Oct |
| Enquiry email | info@raniclinickanchi.com, on the clinic's own domain rather than a Gmail address. Settled 4 Oct. The mailbox still has to be created in Hostinger before the address goes on a live page |
| Holding page | Single page live on the domain: doctors, timings, address, phone, open-now status, clinic schema. Replaced at launch |
| Phone | 99453 89639 |
| Timings | Morning 10.30am–1.30pm every day including Sunday. Evening 6.30–8.30pm, Monday to Saturday only |
| Ortho availability | In clinic one Sunday a month, date not fixed in advance. Video consultations on other days. Both bookable |
| Google Business Profile | 4.6 rating, live |
| Instagram | 76 posts, 60 followers, dormant. Also the source for testimonial videos |
| Timeline | 4 weeks from receiving content |

Clinic history, confirmed 4 Oct: the practice has run since **1985** and was rebranded as Rani Multi Speciality Clinic in **2015**. Dr. Paramanantham's forty years of experience sits alongside that. "Caring for Kanchipuram since 1985" is checkable, unmatched locally, and the strongest line available for the site.

Growth plan covers: 4 articles a month up to 1,500 words, keyword research, 4 hours of content edits a month, 4 revision rounds during the build, 1 extra page and 1 campaign landing page a year.

Background: the clinic left a previous agency that gave no progress updates and promised SEO results that never came. Transparency and regular reporting are the differentiators here, not price.

## The doctors

As supplied by the clinic 1 Oct. Use these spellings and credential strings exactly, everywhere.

| Doctor | Qualifications | Role |
| --- | --- | --- |
| Dr. Paramanantham | MBBS, DD, Dip. in Diabetes Medicine | Dermatologist and diabetologist. 40 years of experience |
| Dr. P Madhavan | MBBS, MS (Ortho), FIJR, FIRJR | Trauma and robotic joint replacement surgeon. In clinic one Sunday a month; video consultations on other days |
| Dr. P. Sudharsan | BDS, MDS (Conservative & Endodontic Dentistry) | Consultant endodontist — root canal treatment |
| Dr. Niranjani | BDS, FICD, FIC (IMP) | Consultant cosmetologist and implantologist |

**Display name settled 4 Oct: "Dr. P Madhavan".** Use that form everywhere — the doctors table above, page titles, meta descriptions, body copy and schema. His father, the dermatologist, shares the first name and sits directly above him on the About page, which is why the short form was chosen. The full form "Dr. Paramanantham Madhavan" is not used on the site.

**On "robotic joint replacement".** That is his training and title, which is not the same as the Kanchipuram clinic having the equipment. He almost certainly operates at a larger hospital. Confirm where those procedures actually happen before any page or article implies the clinic performs them.

**Registration numbers are not shown at launch** (decided 4 Oct). They go in as a later update once the clinic supplies them. Nothing on the site waits on them.

## Site structure

Five pages plus a blog. The two service pages are what rank for local searches like "skin specialist Kanchipuram" — they carry the SEO weight, not the blog.

**Skin is the lead page.** Dr. Paramanantham is the clinic's main draw and the only specialist consulting in person right now, so skin and diabetes gets the deepest content and the first pass of effort.

**The ortho page is a long game.** Dr. Madhavan consults at the clinic one Sunday a month, with the date set only a short while ahead, and by video on the other days. Both are bookable through the contact form. Write the page around that availability rather than treating it as a limitation — a monthly in-person clinic plus video access is a real offer, not an apology. When a clinic date is confirmed, add it to the ortho page and the homepage a week or two beforehand.

| Page | Contains |
| --- | --- |
| Home | Hero, fact strip, three speciality cards, all four doctors, why patients choose, patient story videos, Google reviews, latest blog posts, find us. Full order in Homepage layout |
| Skin & Diabetes | Conditions treated, treatments, Dr. Paramanantham, FAQs, CTA |
| Bones & Joints | Conditions treated, treatments, Dr. Madhavan, FAQs, CTA. Carries Dr. Madhavan's sub-brand The Knee Clinic — in the page body, in the page title and meta description, and its logo beside the clinic logo. Not in the navigation, and nowhere else on the site |
| About | Clinic background, facilities, photo gallery, and profiles of all four doctors including the dental team — dental has no service page in v1 but is still part of the clinic |
| Contact | Enquiry form, phone, WhatsApp, map, directions, doctor availability by day |
| Blog | Listing page plus article pages; two articles live at launch |

Every page carries a call button and a WhatsApp button. Patient reading on a phone is never more than one tap from reaching the clinic.

## Homepage layout

Ordered the way a patient decides: what you do, who does it, whether others trust you, how to reach you. Reviews sit above the map because that is where the decision gets made.

1. **Top bar** — logo on a charcoal plate, clinic name, and a charcoal Call Now button carrying the number
2. **Navigation** — orange gradient band
3. **Hero** — orange gradient. Line one carries the search terms; line two, smaller and in white, carries "Caring for Kanchipuram Since 1985". Open-now chip, then Call and WhatsApp buttons, then outline buttons for Clinic timings and Book an appointment
4. **Fact strip** — charcoal: 1985 / 4 qualified doctors / 2 generations of doctors
5. **Three specialities** — cards with gradient headers and line icons. Skin and Ortho link to their pages; Dental links to Contact, since it has no page in v1
6. **Our doctors** — all four doctors, each with photo, qualifications and role — confirmed 4 Oct. The skin and ortho names link through to their pages; the two dental doctors have no page in v1
7. **Why patients choose Rani Multi Speciality Clinic** — three numbered reasons
8. **Patient stories** — a horizontal rail of 9:16 vertical video cards, three to six of them, opening in a lightbox. Confirmed in at launch on 4 Oct — the doctor approved the section
9. **Google reviews** — charcoal band. Rating bar, five hand-picked reviews on a rail, link to the full listing
10. **Blog** — three most recent articles with category tags
11. **Find us** — address, directions note, map button, timings panel
12. **Footer** — brand and tagline, page links, specialities, contact block, social icons, copyright

**The three reasons in section 7**, settled 4 Oct after the first set was judged too weak: *Here since 1985 — two generations of the same family treating patients in Kanchipuram*; *Three specialities, one visit — skin, bones and teeth under one roof, without being sent elsewhere*; *Specialist-led care — each doctor practises in one field rather than general medicine*. Opening hours are not a reason to choose a clinic, which is what the first version got wrong.

**Patient videos are back in for launch**, reversing the 4 Oct decision. Five links supplied, in the content document. The compliance point returns with them: still needed in writing from Dr. Madhavan that he has chosen to publish patient video content.

**Doctor photographs** appear in three places, cropped differently: small circular headshots on the homepage, one larger photo on each service page, and all four at a larger size on About. Dr. Paramanantham and Dr. P Madhavan are in hand; the two dental doctors are still outstanding.

## Design direction

Client likes sunshinebji.com and its orange, #F7941D. That orange is the primary; the rest of the palette is built around it.

| Role | Value | Where it is used |
| --- | --- | --- |
| Primary orange | #F7941D | The brand colour. Nav band, hero, icons, section rules, card headers |
| Orange light | #FDBB5C | End stop of the gradient |
| Orange gradient | linear-gradient(118deg, #EE8109 0%, #F7941D 46%, #FDBB5C 100%) | Nav band, hero, card headers, section rules |
| Orange text | #A85C03 | Orange type that has to sit on white and stay readable |
| Cream wash | #FDF3E6 | Alternating section backgrounds |
| Cream wash deep | #F9E3C6 | Panel fills, timings panel |
| Charcoal (ink) | #1A1E22 | Body text, fact strip, review band, and every call-to-action button |
| Ink secondary | #5A636B | Secondary text, captions, metadata |
| Hairline | #E7EBEE | Borders and dividers |
| Text on orange | #241703 or #1A1206 | Any type sitting on an orange ground |

**Contrast rule:** #F7941D scores 2.3:1 against white, so white text on an orange ground fails accessibility. Type on orange is #241703 or #1A1206 (around 9:1); orange type on white darkens to #A85C03. The single exception is hero line two, recorded below. **There is no teal anywhere in this palette** — an earlier draft paired orange with #0E4559 and the client rejected it. Orange leads, charcoal partners it, cream softens the gaps.

**Typography: Archivo and Archivo Narrow** — settled 4 Oct. One family, two widths. Archivo Narrow for headings, the hero, large numerals and the clinic name; Archivo for everything else. Chosen over Barlow for being sturdier and less generic.

**Direction: A, with D's fact strip** — settled 4 Oct, from four options. White base, charcoal type, orange carried by the nav band, the hero, icons, section rules and card headers. Sections alternate white, cream (#FDF3E6) and charcoal so the page has rhythm rather than one flat field. A charcoal fact strip sits directly under the hero.

**Call-to-action rule: charcoal is the action colour, orange is the brand colour.** A call to action should be the one thing that is not the brand colour; when the nav, hero and buttons are all orange the eye has nowhere to land. Applied as one rule: maximum contrast against whatever sits behind it. On white the call button is charcoal (15:1); on the orange hero it is white. The same holds on every page built from here, so service-page call buttons are charcoal too.

**The rule governs the primary action; the secondary action takes the opposite end** — clarified 4 Oct after Claude Code spotted the ambiguity. On a white ground: Call is charcoal. On the orange hero: Call is white, and WhatsApp beside it is charcoal at 90% opacity, `rgba(26,30,34,.9)`, as built. Two buttons at maximum contrast would compete, so only one wins per surface.

**There is no WhatsApp green on this site.** The approved design uses none, and #25D366 has been removed from the palette. The WhatsApp glyph carries the recognition on its own, green clashes badly with the orange hero, and it was the one colour in the palette belonging to somebody else's brand.

**Green that is not WhatsApp green.** The open-now chip's dot is `#5DCB94`, a status indicator meaning the clinic is open. It stays. The rule above bans borrowing WhatsApp's brand green for a button; it is not a ban on the colour green.

**Text on orange is a short scale, not one value** — read off the approved design 4 Oct: hero headline `#241703`, hero paragraph `#3E2807`, hero kicker `#50340A`, nav labels `#2B1B03`. The smaller and lighter the element, the darker the brown, so each one holds its weight against the gradient. Review text on the charcoal band is `#C9D2D8`.

**Platform brand colours** for the Instagram, Facebook, YouTube and Google marks are approved — the client asked for the social icons in their own colours. They appear on those marks and nowhere else.

**Container width is not settled by the design.** The approved file was drawn inside a 968px preview frame and has no site container of its own — its sections just pad 24px and fill whatever width they are given. 968px is therefore an artefact of the mock, not a decision. Hero and body copy are already capped by `max-width` in `ch`, so a wider container does not stretch the text.

**The white-on-orange exception is a text rule, not a button rule.** It covers hero line two and nothing else. Buttons on orange follow the sentence above.

**Section headings** carry an uppercase kicker, a 23–30px heading in Archivo Narrow, and a short gradient rule beneath. Small grey labels were what made the first draft read as empty.

**White on orange is one deliberate exception** — settled 4 Oct. Hero line two, *Caring for Kanchipuram Since 1985*, stays white on the orange gradient because it carries the founding claim and should read as a highlight. The cost is real and worth knowing: white on #F7941D is about 2.3:1, below the 3:1 WCAG AA minimum even for large text. It is the only place on the site where white sits on orange. Everywhere else, text on an orange ground is #241703 or #1A1206.

**Reference:** sunshinebji.com for colour and general feel. Do not copy its badges — "Only Centre in India", "Certified Centre of Excellence" and the equipment brand names are exactly the superlative and brand claims that medical advertising norms rule out, and the client may ask for something similar after seeing them.

Non-negotiables for all copy and design: no superlatives, no "best", no cure or outcome claims, no device brand names, no before/after images.

Review count is written as "130+", never an exact number — it keeps climbing and a hardcoded figure goes stale. Same rule in the proposal and any client-facing copy.

## Content and assets tracker

Logos and doctor photos received 1 Oct. Photo selection is not final — the client may send more.

- [x] Doctor photographs — Dr. Paramanantham and Dr. Madhavan received
- [ ] Dental doctor photographs — Dr. Sudharsan and Dr. Niranjani, needed for the About page
- [ ] Clinic photographs — 8 received so far. Final selection pending; the client may send more
- [x] Clinic logo — raw and finished versions received
- [x] The Knee Clinic logo — received, for the ortho page only
- [x] Clinic timings — morning 10.30am–1.30pm all seven days, evening 6.30–8.30pm Mon to Sat. Revised 2 Oct
- [ ] Ortho timings — pending. Video consultation only for now
- [x] Phone number — 99453 89639
- [x] Domain — purchased, held by Vin
- [x] Enquiry email address — info@raniclinickanchi.com, settled 4 Oct
- [ ] Registration numbers and short bios for all four doctors — names and qualifications received 1 Oct, recorded in The doctors
- [ ] Services list — confirmed treatments under each specialty. Several keyword terms need verifying first
- [ ] Testimonial videos — in at launch, decided 4 Oct. Five links supplied in the content document; three to six get used
- [x] Doctor interviews — not happening. Articles get drafted first and sent to the doctors for approval before publishing

**On the photos:** once the set is final, check each shot for branded standees carrying superlative claims before using it. Everything gets compressed and converted to WebP.

## Project structure

The folder layout to build into. The point of all of it is that a change six months from now touches one file, not nine.

```
rani-clinic/
├─ CLAUDE.md              # index + standing rules. Read automatically every session
├─ README.md              # how to run and deploy, for whoever inherits this
├─ .gitignore
├─ astro.config.mjs       # site: https://www.raniclinickanchi.com, trailingSlash: 'always'
├─ package.json
│
├─ docs/                  # snapshots of the Claude Docs, so the repo is self-contained
│  ├─ requirements.md
│  ├─ content.md
│  └─ seo-brief.md
│
├─ public/                # copied to the server as-is
│  ├─ .htaccess           # 301 non-www → www, add missing trailing slash, ErrorDocument 404
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ fonts/              # self-hosted woff2, two families at most
│
└─ src/
   ├─ assets/
   │  └─ images/          # doctors/, clinic/, logo/ — processed by astro:assets
   │
   ├─ data/               # everything that changes without the design changing
   │  ├─ clinic.ts         # name, address, phone, WhatsApp, email, timings, maps link
   │  ├─ doctors.ts        # name, qualifications, role, photo, which page
   │  ├─ reviews.ts        # the five hand-picked Google reviews
   │  ├─ videos.ts         # patient video links, titles, categories
   │  └─ social.ts         # Instagram, Facebook, YouTube
   │
   ├─ styles/
   │  └─ tokens.css        # colours, type scale, spacing. Nothing else defines a colour
   │
   ├─ layouts/
   │  └─ Base.astro        # html head, GA4, call-click listener, header, footer
   │
   ├─ components/
   │  ├─ Header.astro
   │  ├─ Footer.astro
   │  ├─ Hero.astro
   │  ├─ CallButton.astro
   │  ├─ SpecialityCards.astro
   │  ├─ DoctorCards.astro
   │  ├─ VideoRail.astro
   │  ├─ ReviewRail.astro
   │  └─ Schema.astro      # JSON-LD, fed from clinic.ts and doctors.ts
   │
   ├─ content/
   │  └─ blog/             # one .md file per article
   │
   └─ pages/
      ├─ index.astro
      ├─ skin-and-diabetes.astro
      ├─ bones-and-joints.astro
      ├─ about.astro
      ├─ contact.astro
      ├─ privacy.astro     # needed the moment the contact form collects anything
      ├─ 404.astro
      └─ blog/
         ├─ index.astro
         └─ [slug].astro
```

**Why `src/data/` matters more than anything else here.** The phone number appears in the header, the hero, the footer, the contact page and the schema. In `clinic.ts` it exists once. Same for timings, the address, the five reviews and the video links. A year from now, changing the clinic's evening hours is one line in one file and every page follows. Without this it is a hunt through six pages and the certainty of missing one.

**TypeScript, not JSON, for the data files** — settled 4 Oct, matching seo-brief.md. A `.ts` file is typed and imported directly by the components, so a missing phone number or a misspelt key fails the build. The same mistake in a `.json` file renders `undefined` onto a live page and nobody notices for a month.

**Photographs live in `src/assets/images/`, not `public/images/`** — corrected 4 Oct. Astro's image pipeline only processes what sits under `src/`; anything in `public/` is copied to the server untouched, at whatever size it arrived. Measured 4 Oct: the logo was a 597 kB PNG at 1197×1314 displayed at 26×32, and comes out of the pipeline at 2 kB. The clinic entrance photo went from 671 kB to 149 kB. The two doctor photos were already small, 28 kB and 70 kB. The claim that these were "several MB each" was wrong — the saving is real but it sits in the logo and the clinic gallery, not the headshots. The data files hold imports rather than path strings, and Astro emits resized WebP with a hashed filename.

**Two things stay in `public/`:** `favicon.svg`, because it is referenced at a fixed path the pipeline cannot rewrite, and the fonts. Everything else that is an image moves.

**Consequence for schema.** An imported image gives a build-time path like `/_astro/dr-madhavan.a1b2c3.webp`, which is relative. JSON-LD needs absolute URLs, so `Schema.astro` wraps each one: `new URL(photo.src, Astro.site).href`. Miss this and the schema validates but every image URL in it is broken.

**Why `tokens.css`.** Every colour and type size defined in one place. No component invents a hex value. When the client asks for a slightly deeper orange, it is one line.

**Why `docs/` sits in the repo.** The code and the decisions behind it travel together, and anyone who inherits the project gets both. The Claude Docs remain the master copies; the repo versions are dated snapshots, refreshed when something material changes. The risk is drift, so the rule is: when a decision changes, update the Claude Doc, then copy it into `docs/` in the same session.

**Commit discipline.** Commit after every change that works, with a message saying what changed in plain words. Not for anyone else's benefit — so that when a session goes wrong, going back is one command rather than an afternoon.

## Technical setup

Static site built with Astro, deployed from a git repo. No database, no plugins, nothing to patch or get hacked.

| Area | Decision |
| --- | --- |
| Framework | Astro + Tailwind |
| Build tool | Claude Code |
| Version control | Git + GitHub — set up before the first line of code. Used for version history and for testing |
| Deploy | Vin's own Hostinger server. Built locally or in CI, uploaded to Hostinger. Decided 4 Oct, replacing Netlify/Cloudflare Pages |
| Preview copies | Any staging or preview copy is noindex, so it cannot compete with the live site in search |
| Hosting billed to client | Rs. 6,000 / year |
| Contact form | Web3Forms or similar — static sites have no backend |
| Blog | Markdown files; Astro content collection with required title and description, so the build fails if either is missing |
| Google reviews | Five hand-picked, hardcoded. Decided 4 Oct — no API, no key, no cost, nothing tied to the hosting. Copied from the public listing, with a button through to it. Refresh once or twice a year. Quoted exactly as the patient wrote them — never reworded, corrected or shortened in the data file. A card that runs long is truncated visually with an ellipsis and a link through to the listing; the stored text stays whole. Choosing which five to show is ours; editing what they say is not |
| Analytics | GA4 and Search Console, both under the clinic's own Google account |
| SEO foundation | As specified in seo-brief.md: MedicalClinic and IndividualPhysician schema |
| Canonical host | https://www.raniclinickanchi.com/ — www canonical, HTTPS, trailing slash on every URL. Set once as site in astro.config.mjs with trailingSlash: 'always'; .htaccess 301s the non-www host and adds a missing slash. Decided 4 Oct |
| Fonts | Self-hosted woff2 from /fonts, two families at most, font-display: swap. No Google Fonts CDN — it is a third-party connection before first paint and it costs LCP. Decided 4 Oct |
| Privacy page URL | /privacy/ — settled 4 Oct. seo-brief.md says /privacy-policy/; that is overridden. Nothing is live yet, so there is no redirect to keep |
| Versions | Astro 7. TypeScript pinned to 5 because @astrojs/check conflicts with TypeScript 7. Scaffold committed 4 Oct as 9dc80f0 |

**Patient videos.** Vertical 9:16 cards in a horizontal rail, because phone footage, Shorts and Reels are all vertical. Three to six links. Tapping a card opens a lightbox that loads the embed then — never five iframes sitting in the page, which would cost most of the mobile Lighthouse score. The thumbnail comes from the video.

**Why no API for reviews.** A key cannot sit in a static page; anyone could read it from the source. Build-time fetching and a PHP proxy on Hostinger were both considered and both rejected in favour of hardcoding, which has no moving parts. Google's API terms also restrict how long review content may be retained, which is why the five are copied by hand from the public listing rather than pulled programmatically.

**Consequence for the proposal:** it currently promises reviews "pulled live from Google" that "refresh on their own". That is no longer what the site does, and the line needs changing before the proposal goes out.

Pre-launch audit: Screaming Frog crawl (free up to 500 URLs), Google Rich Results Test for the schema, Lighthouse 90+ on mobile, real-device check.

Optional but worth 30 minutes: Decap or Sveltia CMS gives the clinic an admin login to publish posts themselves. Strengthens the handover story and unblocks the blog if Vin is away.

### Tracking — GA4 and events

Live on the holding page since 2 Oct. All of this carries into the Astro build; none of it moves by itself.

| Item | Value |
| --- | --- |
| GA4 property | RMC website, under the clinic's own Google account |
| Measurement ID | G-0JR621K377 |
| Install | Standard gtag.js snippet in the head. Served from googletagmanager.com, which is just Google's delivery domain — Tag Manager is not in use |
| Search Console | Domain property, DNS TXT verified, linked to GA4, reports collection published |
| Custom dimension | "placement", event-scoped, registered 2 Oct |

**Events fired by the page.** GA4 has no define-then-fire step: an event exists because the code sent it, so neither appears under Admin, Events until it has fired at least once.

| Event | Fires on | Parameters |
| --- | --- | --- |
| call\_click | Any tap of a tel: link | link\_url, placement (main\_button or footer) |
| directions\_click | Tap of the Google Maps link | link\_url |

The click handler is one delegated listener at the foot of the page. It checks whether the clicked element sits inside a tel: link, and if so sends call\_click with the placement taken from whether the link carries the callbtn class. Maps links are handled the same way. Nothing is hard-wired to a specific button, so the same code keeps working as pages are added.

**The placement values**, fixed 4 Oct so every component reports the same vocabulary: `header` (top-bar call button), `hero`, `footer`, `floating` (any sticky mobile bar) and `contact_page`. The holding page sent `main_button`, which is now retired. GA4 keeps old values in historical rows, so any report spanning the switch shows both — expected, not a fault.

**Why it matters:** GA4 does not track tel: taps on its own. Without this the reports would show visits and nothing else, and on this clinic's site the phone call is the only conversion there is.

**Carry into the real site.** A layout in Astro is the wrapper every page shares — header, footer, meta tags, tracking — written once instead of pasted into each page. The gtag snippet and the click listener belong there. Mark call\_click as a key event once it has fired. The contact form will need its own event as the second conversion.

**Say this to Claude Code when the Astro project is set up**, word for word:

> Put the GA4 snippet and the call-tracking listener in the base layout so they apply to every page.

Left unsaid, it will happily generate six pages with no tracking on any of them, and nothing complains — the site looks right, the build passes, and the first sign of trouble is a month of reports reading zero. Verify after the build by loading two different pages and watching both appear in GA4 Realtime.

## Keywords and search targets

Keyword Planner run 1 Oct. Volume in Kanchipuram is low across almost every term. That is expected for a town this size and does not change the plan — it confirms where the effort goes: the service pages carry the local intent, the blog supports them.

| Page | Primary terms | Condition and procedure terms |
| --- | --- | --- |
| Skin & Diabetes | skin specialist, skin doctor, dermatologist, skin clinic, derma clinic near me, diabetologist | acne treatment, hair fall treatment, fungal skin infection treatment, skin allergy treatment, laser skin treatment, PRP hair therapy, skin tag removal |
| Bones & Joints | orthopaedic surgeon, orthopedic doctor, ortho doctor, bone doctor, bone specialist, knee specialist, back specialist | knee pain treatment, back pain treatment, joint pain treatment, arthritis treatment, fracture treatment, knee replacement, total knee replacement, knee surgery |
| Dental — parked with the dental page | dentist, dental clinic | dental implants, root canal treatment, teeth cleaning, tooth extraction, toothache treatment |

Each term pairs with "Kanchipuram" in page titles and headings. Low volume is fine: someone searching "knee specialist Kanchipuram" is close to booking, and the competition is a handful of local clinics rather than Practo and Healthline.

**Verify before targeting.** These appeared in the Planner list but may not be services the clinic actually provides:

- Robotic knee replacement, and "trauma and robotic joint replacement surgeon" — needs the equipment. This is Sunshine BJI's territory, not Rani's unless the clinic has it
- Physiotherapy — in-house, or referred out?
- Rheumatologist — is there one at the clinic?
- PRP hair therapy and laser skin treatment — confirm both are offered

Targeting a service the clinic does not provide is the fastest way to lose a patient who calls and is told no.

## Setup and launch checklist

Everything that needs doing, in the order it needs doing. Tick off anything already done.

### Now, while the holding page is live

- [ ] Replace REPLACE-WITH-DOMAIN in the canonical and og:url meta tags with https://www.raniclinickanchi.com/ — two spots in index.html
- [ ] Create the GA4 account signed in as Dr. Madhavan, not as Vin
- [ ] GA4 property: time zone India (GMT+5:30), currency INR. Painful to change later
- [ ] GA4: change event data retention from the 2-month default to 14 months
- [ ] GA4: add Vin as Administrator under Account access management
- [ ] Add the GA snippet to the holding page, plus a custom event on the call button — GA4 does not track tel: taps on its own, and the call is the only conversion this page has
- [ ] Point the Google Business Profile website field at the landing page, UTM-tagged: ?utm\_source=google&utm\_medium=organic&utm\_campaign=gbp
- [ ] Search Console: add as a Domain property, verify by DNS TXT at the registrar
- [ ] Link GA4 to Search Console under Admin, Product links
- [ ] Add a favicon
- [ ] Set up an UptimeRobot monitor — the proposal promises round-the-clock monitoring
- [ ] Leave Google Ads pointing at the Maps listing until the real site is live. Switching a working destination to a holding page for ten days risks what already works and teaches nothing
- [ ] Correct the proposal line promising reviews "pulled live from Google" that "refresh on their own". The site hardcodes five hand-picked ones. Fix the wording before the proposal goes out, not after
- [ ] Create the info@raniclinickanchi.com mailbox in Hostinger, before the address goes on any live page

### Content still needed before the build

- [ ] A short bio for each doctor
- [ ] Confirm where the robotic joint replacement procedures actually take place
- [ ] Verify which of the Planner keyword services the clinic genuinely offers
- [x] WhatsApp number confirmed 4 Oct — 99453 89639 is on WhatsApp
- [x] Enquiry email — settled 4 Oct as info@raniclinickanchi.com
- [ ] Dental doctors' photographs for the About page
- [ ] Final photo selection, each checked for branded standees
- [ ] Two or three design reference sites from the client, with specifics
- [ ] Ortho page title — show him both versions and let him pick
- [x] Ortho doctor's display name — "Dr. P Madhavan", settled 4 Oct
- [x] Registration numbers — not needed for launch, added in a later update
- [ ] Patient testimonial videos — in at launch, decided 4 Oct. Three to six links still to be picked and approved

### Build and pre-launch

- [ ] Git repo and deploy pipeline set up with Daniel, taking notes
- [ ] Decide whether to add a CMS admin login for the blog
- [ ] Privacy policy page — analytics on a medical site under the DPDP Act
- [ ] robots.txt and sitemap.xml
- [ ] Validate all schema with Google's Rich Results Test
- [ ] Screaming Frog crawl — missing titles, descriptions, alt text, broken links
- [ ] Lighthouse 90+ on mobile across all four metrics
- [ ] Test on real phones, not just a laptop
- [ ] Contact form wired and a test enquiry actually received
- [ ] Pre-launch review with Daniel, including the DNS cutover
- [ ] **Launch blocker.** Two of the five reviews in reviews.ts contain cure language — "completely cured" and "painfree". Replace both with reviews free of cure or outcome claims before the site goes live. Decided 4 Oct to build with them in place, since building publishes nothing; the swap is a data edit to reviews.ts, not a rebuild. A quoted review is never reworded, so the fix is choosing different ones

### At launch

- [ ] Submit the sitemap to Search Console
- [ ] Update the GBP website field to the full site
- [ ] Switch the Google Ads destination from the Maps listing to the site
- [ ] Record baseline numbers for the month-one report
- [ ] Capture screenshots and Lighthouse scores for the portfolio and the next healthcare pitch

### Ongoing

- [ ] Monthly report on the same date every month
- [ ] 4 articles a month, drafted and sent to the doctors for approval before publishing
- [ ] Remind the client of the domain renewal 30 days before it expires
- [ ] Review the content mix after three months against real data — if articles are not earning their keep, shift the time into GBP posts and reviews at the same price
- [ ] Around October 2027, switch every ortho call to action from video consultation to in-person
- [ ] Once patients start leaving skin reviews, swap one into reviews.ts so all three specialities are represented
- [ ] Replace the testimonial videos in videos.ts with patient-speaking footage as it becomes available
- [ ] Follow up on the Google Business Profile name correction once it clears the client's pipeline

## Open questions

- [ ] Verify which of the listed services the clinic actually offers before targeting those keywords — see Keywords
- [ ] Confirm where the robotic joint replacement procedures actually take place
- [x] WhatsApp number — confirmed 4 Oct that 99453 89639 is on WhatsApp. The WhatsApp buttons can go live
- [ ] Ortho page title — lead with the search term or with The Knee Clinic? Show him both versions rather than asking in the abstract
- [ ] Verify the GBP traffic figures used in the proposal are current, and state the date range they cover
- [x] Enquiry email — settled 4 Oct as info@raniclinickanchi.com, on the clinic's own domain
- [ ] Decide whether to add a CMS admin login for the blog
- [ ] Point the Google Business Profile website field at the domain once the holding page is up, and submit the domain to Search Console
- [x] Ortho surgeon's display name — settled 4 Oct as "Dr. P Madhavan"
- [x] Doctor qualifications — all four received, recorded in The doctors
- [x] Patient testimonial videos — settled 4 Oct, in at launch as three to six vertical videos in Patient stories
- [x] Registration numbers — decided 4 Oct, not needed for launch
- [ ] Google Business Profile listing name — raised and deferred 4 Oct. The client cannot change it yet; the correction is in their pipeline. Duplicate listing removal is already under way. Left unticked on purpose: the stuffed name stays a suspension risk until it is plain, and a suspension would cost the 130+ reviews. Revisit once the site is live
- [x] Skin review among the five — decided 4 Oct, deferred. The five ship as they are; one gets swapped for a skin review once patients leave one after launch. Nothing in the build blocks it — reviews.ts is five hand-edited entries
- [x] Testimonial video mix — decided 4 Oct, deferred. The five links ship as supplied and get replaced once real patient-speaking videos exist. videos.ts is five hand-edited entries, so swapping them is a data change, not a rebuild
- [x] Social handles — confirmed 4 Oct. The Instagram, Facebook and YouTube handles supplied are the live accounts and are correct as spelled, including the Facebook and YouTube spelling that differs from Instagram's. Use them exactly as given; the client may create new ones later, but not before launch

## Parked for later

Deliberately out of scope for v1. Each is a separate conversation and a separate fee.

| Item | Note |
| --- | --- |
| Dental service page | Dropped from v1 on budget. Adding it later is a new page at Rs. 3,000, or free under the Growth plan's 1 extra page a year |
| Appointment booking with time slots | Quoted on request. Needs a backend; different project |
| WhatsApp chat assistant | Quoted on request. Opens a conversation and gathers the patient's problem and preferred time before staff pick up |
| Online payment collection | Quoted on request |
| Tamil version of the site | Roughly Rs. 15,000. Doubles content work |
| Google review request setup | QR card for reception, short review link. Hold back as the opening of the GBP retainer conversation |
| Homepage banners for camps and events | Clinics run these often. Cap at 4 a year if ever included |
| Ongoing SEO campaign work | Link building, competitor analysis, reoptimisation. Propose after a few months of real data |
| Instagram revival | Account is dormant at 60 followers. Articles repurposed as posts would be the cheapest way in |
| Doctor registration numbers | Not shown at launch, decided 4 Oct. Added in a later update once the clinic supplies them. Worth doing — patients checking credentials is real behaviour. |
