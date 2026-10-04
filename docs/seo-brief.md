# Rani Clinic Website — SEO, Schema & Tracking Implementation Brief

Oct 4, 2026 · @Vin

This is the full build specification for the clinic website's search, structured data and tracking, written section by section for Claude Code. It replaces my original SEO/AEO/GEO brief and includes every correction from the review.

## How to use this brief

Give Claude Code three things: the requirements document, the filled-in website brief (design, photos and page copy), and this brief, exported as Markdown. Nothing else, not my older SEO documents or ChatGPT's review.

- **Each part has numbered rules.** Each rule says what to build and, in one line, why. Rules marked *Optional* are not needed for launch; rules marked *Do not build* are there so nobody adds them back.
- **Facts live only in the table below.** Type the answer into the Value cell and set Status to Confirmed. Claude Code may use only Confirmed values; everything else stays a placeholder and blocks launch.
- **I am not a lawyer.** Part G flags rules that affect a medical site in India; the clinic should check anything unusual with its own adviser.

### Project facts

**Fix first: the Google Business Profile name.** It currently reads "Rani Multi Speciality Clinic - Skin, Diabetic, Dental, Bones & Joints, Orthopaedic Care | Kanchipuram". Google's rules say the name must be the clinic's real-world name; added services and locations are not allowed and can get the profile suspended. The website must use the real name only, and the profile name should be corrected to match. Given the current edit rejections, change it carefully, after the duplicate listing is sorted out.

| Fact | Value | Status |
| --- | --- | --- |
| Real-world clinic name, as on the signboard | Rani Multi Speciality Clinic (check exact spacing) | Confirmed |
| Google Business Profile name | Has services and town added; correct it to the real name | Action needed |
| Domain | www.raniclinickanchi.com | Confirmed |
| Street address and PIN code | 5b, Near Aruna mahal kalayana mandapam, 2, Sangupani Vinayagar Koil St, Kanchipuram, Tamil Nadu 631502 | Confirmed |
| Google Maps link and coordinates (5+ decimals) | <https://www.google.com/maps/place/Rani+Multi+Speciality+Clinic+-+Skin,+Diabetic,+Dental,+Bones+%26+Joints,+Orthopaedic+Care+%7C+Kanchipuram,+Tamil+Nadu/@12.8380649,79.7055714,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52c2574e3c75d5:0xfa48903076d3144a!8m2!3d12.8380649!4d79.7055714!16s%2Fg%2F11f3bkkyg2?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D> | Confirmed |
| Phone, WhatsApp, email | 99453 89639 (Phone)\
99453 89639 (WhatsApp)\
drmadhavanortho@gmail.com | Confirmed |
| Opening hours | Mon–Sat 10:30–13:30 and 18:30–20:30; Sun 10:30–13:30. Public holidays: ask | Confirmed |
| Year opened | 2015 | Confirmed |
| Clinic or hospital (any inpatient beds?) | Clinic | Confirmed |
| v1 specialties | Skin & Diabetes; Bones & Joints (Dental later) | Confirmed |
| Services under each specialty (nail surgery, HydraFacial, cosmetology, PRP, laser, physiotherapy, lab tests) | Dermatologist --------------------- Acne treatment \
derma clinic near me \
Dermatologist \
Fungal skin infection treatment \
Hair fall treatment \
laser skin treatment \
PRP hair therapy \
Skin allergy treatment \
Skin clinic \
Skin doctor \
Skin specialist \
skin tag removal \
Skin treatment  Ortho -------- arthritis treatment \
back pain treatment \
back specialist \
bone doctor \
Bone specialist \
fracture treatment \
joint pain treatment \
knee pain treatment \
knee replacement \
Knee specialist \
knee surgery \
Ortho doctor \
orthopaedic surgeon \
Orthopedic doctor \
physiotherapy \
rheumatologist \
robotic knee replacement \
Total knee replacement surgeon \
Trauma and robotic joint replacement surgeon  Dental --------- Dental clinic \
Dental implants \
Dentist \
Root canal treatment \
Teeth Cleaning \
Tooth Extraction \
Toothache treatment | Confirmed |
| v1 doctors: Dr. Madhavan (MBBS, MS Ortho, FIJR, FIRJR); Dr. Paramanantham (MBBS, DD, Dip. Diabetes Medicine). Spelling, photo, years in practice, languages, consultation times | Display names: Dr. Paramanantham and **Dr. P Madhavan** (not "Dr. Paramanantham Madhavan"). Dr. P Madhavan: video consultation only until about Oct 2027. Still needed: short bios, languages | Confirmed |
| Dental doctors shown on v1? | Yes | Confirmed |
| "The Knee Clinic" logo on the Bones & Joints page? | Yes | Confirmed |
| Medical registration numbers published? Consultation fee shown? | No | Not needed |
| Written consent for any testimonial or patient photo | No | Not needed |
| Medical reviewer for blog posts (name, credentials) | Dr Madhavan | Confirmed |
| Where appointment requests go, who replies, how fast | Dr Madhavan's phone/email | Confirmed |
| GA4, GTM, Google Ads, Search Console IDs and access; privacy contact person | GA4 **G-0JR621K377** live on the holding page via gtag.js (no GTM). Search Console verified and linked to GA4. Still needed: Google Ads conversion setup when campaigns move to Search | Action needed |

## Part A — Technical SEO

These rules apply to every page. They make the site easy for Google to crawl, understand and show, and easy for patients to use on a phone.

### A1 — Head tags

1. **A unique `<title>` on every page**, describing that page plainly, e.g. "Skin & Diabetes Care | Rani Multi Speciality Clinic, Kanchipuram". Google sets no length limit but cuts titles to fit the screen, so put the important words first.
2. **A unique meta description on every page**, one or two plain sentences on what the page offers. Google may rewrite it from page text; a good one still helps.
3. **`<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1">`** on every page.
4. **A self-referencing canonical** on every page: `<link rel="canonical" href="https://DOMAIN/page-path/">`, using the final https URL with the trailing slash. It tells Google which address is the real one.
5. **Open Graph tags** (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and `twitter:card`. These control the preview when a link is shared on WhatsApp or social media; they do not affect ranking.
6. **`<html lang="en">`** on every page.
7. *Do not build:* `<meta name="robots" content="index, follow">`. It is the default and does nothing. The only robots tag on the site is `noindex` on preview copies (A8, rule 6); the live site needs no robots meta tag.
8. *Do not build:* meta keywords. Google ignores them.

### A2 — URLs

1. **Lowercase words separated by hyphens**, e.g. `/bones-and-joints/`. Google recommends hyphens, and treats different letter cases as different URLs.
2. **One trailing-slash style:** set `trailingSlash: 'always'` in Astro, and add a 301 rule in the site's `.htaccess` on Hostinger so `/about` redirects to `/about/`. Two versions of one page split its signals.
3. **Short, descriptive paths** matching the page plan in Part F. No dates or IDs in page URLs.
4. Query parameters are allowed where a feature needs them (the UTM tag on the Google Business Profile link, for example); the canonical tag keeps the clean URL as the real one.

### A3 — Headings

1. **One clear `<h1>` per page** saying what the page is. This is good practice, not a Google rule, so never force a keyword into it.
2. **`<h2>` and `<h3>` follow the page's real structure.** Google does not mind heading order, but screen-reader users do.
3. **Never use a heading tag just to make text big;** style with CSS.

### A4 — Images

1. **Meaningful images get alt text that says what they show**, e.g. "Dr. Madhavan in the consultation room". Decorative images get `alt=""` so screen readers skip them.
2. **Descriptive file names** before upload: `clinic-reception.jpg`, not `IMG_0042.jpg`.
3. **Use Astro's `<Image>` component** so images are resized, served as WebP or AVIF, and carry width and height (which prevents layout jumps).
4. **Lazy-load images below the first screen only.** Never lazy-load the hero image; it is usually the largest element and lazy-loading it slows the page.

### A5 — Speed (Core Web Vitals)

1. **Targets, measured on mobile at the 75th percentile:** LCP (main content visible) ≤ 2.5 s, INP (response to a tap) ≤ 200 ms, CLS (layout shift) ≤ 0.1. These are Google's "good" thresholds.
2. **Lighthouse 90+ on mobile in all four categories,** as the requirements set.
3. **Ship as little JavaScript as possible.** Astro sends none by default; keep it that way except for the form, the click listener and analytics.
4. **Keep third-party code light.** GA4 uses Google's standard async gtag.js snippet. The Google map loads only when the visitor scrolls to it.
5. **At most two web-font families,** self-hosted, with `font-display: swap`.
6. **Judge by measurement, not rules of thumb:** run PageSpeed Insights on the home page and both specialty pages before launch.

### A6 — Mobile and accessibility

1. **Fully responsive, no horizontal scrolling at 320 px wide.** Most patients will come from a phone.
2. **Tap targets at least 24 × 24 px** (WCAG 2.2 AA), and about 44 px for the main Call, WhatsApp and Book buttons.
3. **Body text at least 16 px** and good colour contrast; many patients are older.
4. **Every link, button and form field reachable by keyboard,** with visible focus and proper `<label>`s on form fields.
5. **Phone and WhatsApp as real links:** `<a href="tel:+91XXXXXXXXXX">` and `<a href="https://wa.me/91XXXXXXXXXX">`.

### A7 — Internal links and breadcrumbs

1. **Link where it helps the patient:** each specialty page links to its doctor, each doctor profile on the About page links to their specialty, and blog posts link to the relevant specialty page. No fixed link counts.
2. **Descriptive link text:** "See Dr. Madhavan's profile", not "click here".
3. **A footer on every page** with the main pages, the clinic name, address, phone and hours.
4. **Visible breadcrumbs on inner pages** (Home › Doctors › Dr. Madhavan), matched by BreadcrumbList markup (Part B).

### A8 — Crawl files and redirects

1. **robots.txt** allows all search crawlers and lists the sitemap: `Sitemap: https://DOMAIN/sitemap-index.xml`. Do not block Googlebot, Bingbot or OAI-SearchBot.
2. **sitemap.xml** via `@astrojs/sitemap`, listing every indexable page. Add `lastmod` only when a page's content really changes; Google ignores `priority` and `changefreq`, so leave them out.
3. **A custom 404 page** that returns a real 404 status (`ErrorDocument 404 /404.html` in `.htaccess` on Hostinger) and links back to the main pages.
4. **HTTPS everywhere and one host,** set in `.htaccess`: http → https and www → non-www (or the reverse), each a single 301 redirect.
5. **No broken internal links** at launch.
6. **Test copies stay out of Google.** Keep the GitHub repository private. If a preview is published anywhere (GitHub Pages or a test subdomain), it carries `noindex` on every page and a robots.txt with `Disallow: /`. Neither may reach the live Hostinger site.

### A9 — Local SEO

1. **The clinic's name, address and phone appear identically on every page** and match the Google Business Profile word for word (once its name is fixed). Mismatches make Google less sure the site and the profile are the same clinic.
2. **The address is real text in an `<address>` element**, never only an image or a map.
3. **The contact page embeds the Google map** and has a "Get directions" link to the clinic's Maps listing.
4. **Mention Kanchipuram naturally** where it is true and useful ("our clinic in Kanchipuram"), not repeated for keywords.
5. *Do not build:* pages for nearby towns (Chengalpattu, Sriperumbudur and others). Those stay in Google Ads; thin location pages can hurt the site.

## Part B — Structured data (schema)

Structured data is JSON-LD code that tells Google, in a fixed vocabulary, what the clinic is, where it is, when it opens and who its doctors are. It does not guarantee any special search result; its job is to describe the clinic accurately.

### B1 — Principles

1. **JSON-LD only,** in a `<script type="application/ld+json">` tag in each page's head.
2. **Every value must also be visible on the page** and come from a Confirmed fact. Google's rules forbid marking up content readers cannot see.
3. **One data file feeds everything:** `src/data/clinic.ts` holds name, address, phone, hours and doctors, and the footer, contact page, metadata and JSON-LD all read from it. Then they can never disagree.
4. **Link the entities with `@id`:** the clinic is `https://DOMAIN/#clinic`, and doctor profiles and blog posts point to it.
5. **Validate before launch** with the Schema.org validator and Google's Rich Results Test (Part H).

### B2 — MedicalClinic and WebSite (home page)

`MedicalClinic` is the right type for a clinic without inpatient beds; use `Hospital` only if that is true. Google requires `name` and `address` and recommends `geo` (at least 5 decimals), `openingHoursSpecification`, `telephone` and `url`.

- **Hours use `openingHoursSpecification`,** with two Monday–Saturday entries because the clinic closes between sessions.
- **`medicalSpecialty` must use values from Schema.org's MedicalSpecialty list:** `Dermatology` (skin), `Endocrine` (diabetes), `Musculoskeletal` (bones and joints). Add `Physiotherapy` only if the clinic offers it.
- **`WebSite` gives Google the site's name.** Its old SearchAction (the sitelinks search box) was retired in November 2024; do not add it.
- **Logo** at least 112 × 112 px, on a crawlable URL.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://DOMAIN/#clinic",
      "name": "CONFIRM: real-world clinic name",
      "url": "https://DOMAIN/",
      "logo": "https://DOMAIN/images/logo.png",
      "image": "https://DOMAIN/images/clinic-front.jpg",
      "telephone": "CONFIRM: +91 phone",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "CONFIRM: street address",
        "addressLocality": "Kanchipuram",
        "addressRegion": "Tamil Nadu",
        "postalCode": "CONFIRM: PIN",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 0.00000, "longitude": 0.00000 },
      "hasMap": "CONFIRM: Google Maps URL",
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:30:00", "closes": "13:30:00" },
        { "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "18:30:00", "closes": "20:30:00" },
        { "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday", "opens": "10:30:00", "closes": "13:30:00" }
      ],
      "medicalSpecialty": [
        "https://schema.org/Dermatology",
        "https://schema.org/Endocrine",
        "https://schema.org/Musculoskeletal"
      ],
      "sameAs": ["CONFIRM: Google Business Profile URL", "CONFIRM: Instagram URL"]
    },
    {
      "@type": "WebSite",
      "@id": "https://DOMAIN/#website",
      "name": "CONFIRM: same name as the clinic",
      "url": "https://DOMAIN/",
      "publisher": { "@id": "https://DOMAIN/#clinic" }
    }
  ]
}
```

### B3 — IndividualPhysician (About page)

All four doctor profiles live on the About page, so all four `IndividualPhysician` entries go there, in one `@graph`. Each profile has its own anchor (`#dr-paramanantham`, `#dr-p-madhavan`, `#dr-p-sudharsan`, `#dr-niranjani`), and each entry's `@id` and `url` use that anchor. The specialty pages link to their doctor's anchor.

In Schema.org, `Physician` is an organisation type, so the `worksFor` property in my original brief was invalid; `IndividualPhysician` describes one doctor and links them to the clinic with `practicesAt`. Credentials are copied exactly from the requirements document's doctor table.

| Doctor | `medicalSpecialty` |
| --- | --- |
| Dr. Paramanantham | `Dermatology`, `Endocrine` |
| Dr. P Madhavan | `Musculoskeletal` |
| Dr. P. Sudharsan | `Dentistry` |
| Dr. Niranjani | `Dentistry` |

Example with two of the four (add the dental doctors the same way):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "IndividualPhysician",
      "@id": "https://DOMAIN/about/#dr-p-madhavan",
      "name": "Dr. P Madhavan",
      "url": "https://DOMAIN/about/#dr-p-madhavan",
      "image": "https://DOMAIN/images/doctors/dr-p-madhavan.jpg",
      "medicalSpecialty": "https://schema.org/Musculoskeletal",
      "practicesAt": { "@id": "https://DOMAIN/#clinic" },
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MBBS" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MS (Ortho)" }
      ]
    },
    {
      "@type": "IndividualPhysician",
      "@id": "https://DOMAIN/about/#dr-paramanantham",
      "name": "Dr. Paramanantham",
      "url": "https://DOMAIN/about/#dr-paramanantham",
      "image": "https://DOMAIN/images/doctors/dr-paramanantham.jpg",
      "medicalSpecialty": ["https://schema.org/Dermatology", "https://schema.org/Endocrine"],
      "practicesAt": { "@id": "https://DOMAIN/#clinic" }
    }
  ]
}
```

The markup says nothing about in-person availability, so Dr. P Madhavan's video-only period needs no change to it. Registration numbers are not added yet; they come later.

### B4 — BreadcrumbList (inner pages)

One per inner page, matching the visible breadcrumb exactly. Google stopped showing breadcrumbs in mobile results in January 2025 but still shows them on desktop. The last item may leave out its URL.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://DOMAIN/" },
    { "@type": "ListItem", "position": 2, "name": "Bones & Joints" }
  ]
}
```

### B5 — BlogPosting (each blog post)

Dates come from the post's front-matter; `dateModified` changes only when the content really changes.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "CONFIRM: post title",
  "image": "https://DOMAIN/images/blog/post-slug.jpg",
  "datePublished": "2026-10-15",
  "dateModified": "2026-10-15",
  "author": { "@type": "Person", "name": "CONFIRM: writer's name" },
  "publisher": { "@id": "https://DOMAIN/#clinic" },
  "mainEntityOfPage": "https://DOMAIN/blog/post-slug/"
}
```

### B6 — Not used, and why

- *Do not build:* **AggregateRating or Review markup.** Google never shows stars for a business that marks up reviews of itself, and the example numbers in my original brief were invented.
- *Do not build:* **SearchAction.** The feature it powered was retired in November 2024.
- *Do not build:* **microdata** (`itemscope`) alongside the JSON-LD. It duplicates the same facts.
- *Do not build:* `priceRange` or `paymentAccepted` unless the clinic confirms them.
- *Optional:* **FAQPage** markup on a page that shows FAQs. Google stopped showing FAQ rich results for all sites on 7 May 2026; the markup is harmless but earns nothing in Google.

## Part C — Answering patient questions (AEO)

Pages that answer the questions patients actually ask, clearly and early, do well in Google's normal results, in its AI answers and in tools like ChatGPT. There is no special format for this; it is good writing, structured so the answer is easy to find.

### C1 — FAQs

1. **Add an FAQ section only where patients really ask questions,** typically on the two specialty pages and the contact page. No fixed number of questions.
2. **Use real questions** from the clinic's front desk, WhatsApp chats and Google search terms, e.g. "Do I need an appointment, or can I walk in?", "Is parking available?", "Which doctor should I see for knee pain?".
3. **Answer first, then explain.** Start with "Yes", "No" or the fact, then add detail. Answers are as long as they need to be; there is no 40–60-word rule.
4. **Use `<details>` and `<summary>`** for collapsible FAQs. Answers must stay in the HTML (not loaded by JavaScript), so search engines can read them.

### C2 — Formatting that helps

1. **Lists for lists:** conditions treated, what to bring, how to book. Use real `<ul>` and `<ol>` tags.
2. **Numbered steps for processes:** "How to book: 1. Call or WhatsApp… 2. …".
3. **Tables only for genuine comparisons,** such as consultation times by doctor.
4. **Short paragraphs and plain words.** Explain each specialty in the opening lines of its page, in natural language, without forced "What is X?" headings.

### C3 — Question research

1. **Collect questions from three places:** Google Ads search terms (already audited), Google's "People also ask" for the main services, and what patients ask the clinic.
2. **General questions only.** Answers describe services and what to expect; they never diagnose or advise an individual ("Your knee pain is probably…").
3. **Every medical answer is checked by the relevant doctor** before publishing (Part G).

### C4 — Key facts, easy to find

1. **A quick-facts block on the home page:** clinic name, address, phone, WhatsApp, hours and the two specialties, each on its own labelled line.
2. **Hours shown as text,** with the afternoon break clear: "Mon–Sat: 10:30 am–1:30 pm and 6:30–8:30 pm. Sun: 10:30 am–1:30 pm."
3. **Write naturally.** There is no need for fixed phrases like "Rani Clinic is located at…"; clear labels do the job.

## Part D — AI search visibility (GEO)

Google's May 2026 guide on AI search says there is no separate trick: a page has to be indexed, eligible to show a snippet, and genuinely useful. So this part is mostly about being crawlable, consistent and trustworthy, not about special files.

### D1 — Say clearly who the clinic is

1. **The home page's first lines name the clinic, the town and what it offers,** e.g. "Rani Multi Speciality Clinic in Kanchipuram treats skin conditions, diabetes, and bone and joint problems. Open since 2015." Only confirmed facts.
2. **The About page tells the clinic's story** in specifics: when it opened, who the doctors are, what facilities exist. Specific, checkable facts are what search engines and AI tools can repeat; vague praise ("world-class care") gives them nothing.

### D2 — Trust signals (E-E-A-T)

Google says E-E-A-T (experience, expertise, authoritativeness, trust) is not a ranking factor by itself, but its systems look for these qualities, especially on health pages.

1. **Each doctor profile on the About page shows real credentials:** degrees, specialty, years in practice, languages, consultation times, and a real photo.
2. **Each health article shows who wrote it, which doctor reviewed it, and when** (Part F5).
3. **Real photos** of the clinic and doctors, with consent. Stock photos only for generic illustrations.
4. **A privacy policy** and clear contact details on every page.
5. **Patient counts, awards and press mentions only if verified,** and only if they pass the guardrails in Part G.

### D3 — One consistent identity

1. **The same clinic name, address and phone** on the website, Google Business Profile, Instagram, WhatsApp Business and any directory listing. Search engines and AI tools compare these to decide they describe one clinic.
2. **Fix the profile name and the duplicate listing** (see Project facts). Two listings and a keyword-stuffed name both weaken that identity.
3. **List the clinic's real profiles in `sameAs`** (Part B2): the Google Business Profile and Instagram.

### D4 — Let AI search crawlers in

1. **robots.txt must not block search crawlers:** Googlebot, Bingbot, and OAI-SearchBot (which decides whether ChatGPT search can show the site). Blocking OAI-SearchBot removes the site from ChatGPT search.
2. **Training crawlers are a separate choice:** blocking GPTBot (OpenAI's model training) does not affect ChatGPT search. Default: allow everything, unless the client objects.
3. **No `nosnippet` or `max-snippet:0`** on any page; Google's AI features only use pages that can show a snippet.
4. **Important content is in the HTML,** not hidden behind JavaScript, images or PDFs.

### D5 — llms.txt

*Optional.* llms.txt is a proposed file that summarises a site for AI tools. Google's guide says sites do not need it and that it neither helps nor harms Google Search; Chrome's Lighthouse checks for it only under "agentic browsing" and marks a missing file as not applicable. If the client wants one, it is a short Markdown file at `/llms.txt` listing the clinic's facts and main pages. Not a launch item.

### D6 — Semantic HTML

1. **Use `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>` (blog posts), `<address>` and `<time datetime="…">`** where they fit. They help screen readers and keep the code clear.
2. **`<div>` is fine** for layout; semantic tags are not an AI ranking trick.

## Part E — Tracking and conversions

The goal is to count calls, WhatsApp chats and appointment requests exactly once each, so Google Ads can optimise, while nothing about any patient reaches Google.

### E1 — Setup

1. **GA4 through the standard gtag.js snippet** in the base layout (the wrapper every page shares), so every page is tracked. Measurement ID **G-0JR621K377**, already live on the holding page. No Google Tag Manager.
2. **One delegated click listener in the same base layout,** carried over from the holding page: it checks whether a tap landed inside a `tel:`, `wa.me` or Google Maps link and sends the matching event. Nothing is wired to a single button, so new pages are tracked automatically.
3. **Search Console** is already verified (domain property) and linked to GA4. Submit the sitemap at launch.
4. **Check after the build:** open two different pages and watch both appear in GA4 Realtime. A site can look perfect and pass the build with no tracking at all.

### E2 — Events

| Event | Fires when | Parameters | Status |
| --- | --- | --- | --- |
| `call_click` | A `tel:` link is tapped | `link_url`, `placement` (`main_button`, `header` or `footer`) | Live on the holding page; keep the name |
| `directions_click` | The Google Maps link is tapped | `link_url` | Live on the holding page; keep the name |
| `whatsapp_click` | A `wa.me` link is tapped | `placement` | New |
| `generate_lead` | The form service confirms the enquiry was sent | `form_name: contact` | New |

`placement` is already registered in GA4 as an event-scoped custom dimension. Keep these exact event names: renaming them would break the reports already collecting. A tap on a phone link is intent to call, not a completed call. Never send a name, phone number, email or anything the visitor typed.

### E3 — Google Ads conversions

1. **Mark `call_click`, `whatsapp_click` and `generate_lead` as key events in GA4** once each has fired at least once.
2. **When the account moves from Smart to Search campaigns, import those key events into Google Ads.** Do not add a separate Ads tag for the same actions, or every conversion counts twice.
3. **There is no thank-you page,** so no page view can double-count a lead. `generate_lead` is the only lead count.
4. *Do not build:* remarketing tags, remarketing lists or Customer Match. Google's health advertising policy bars advertiser-built audiences for health services.
5. *Optional, client's decision:* enhanced conversions. They send hashed patient phone numbers or emails to Google and need the "Customer data terms" accepted. Off at launch.

### E4 — Privacy rules

1. **No personal data in GA4,** as Google Analytics policy requires: no names, phone numbers or emails in events, URLs or page titles.
2. **The form submits by POST, never GET,** and the success message shows on the same page, so nothing the patient typed ends up in a URL.
3. **The WhatsApp link's prefilled text stays generic:** "Hello, I'd like to book an appointment at the clinic."
4. **In GA4, turn off Google signals and ads personalisation.** The clinic cannot use them for health ads anyway.
5. **The form shows a short notice** of what it collects, why, who sees it and how long it is kept, linking to the privacy policy. India's DPDP Rules (notified 18 Nov 2025, phased in over 18 months) make this a good idea now. Whether analytics also needs a consent banner is for the client's adviser.

### E5 — Conversion elements on the page

1. **A Call button and a WhatsApp button on every page,** so a patient on a phone is never more than one tap from the clinic. On mobile the header with the Call button stays visible while scrolling.
2. **The floating WhatsApp button** sits bottom right and never covers text, form fields or other buttons.
3. **The enquiry form is on the Contact page,** sent by POST through Web3Forms (or a similar service) to the enquiry email in Project facts. Fields: name, phone, specialty, preferred day. No free-text symptoms box, so patients are not asked for health details the clinic does not need.
4. **On success the form shows a message on the same page**, e.g. "Thank you. The clinic will call you to confirm a time.", and fires `generate_lead`. No separate thank-you page.
5. **Bones & Joints calls to action say "Book a video consultation"** while Dr. P Madhavan is away (until about Oct 2027). Never show in-person times for him.

## Part F — Pages and content

v1 is the approved five pages plus the blog, as set in the requirements document, and a privacy policy. A dental page, booking with time slots and patient videos are parked for later.

### F1 — Page list and URLs

| Page | URL | In sitemap | Structured data |
| --- | --- | --- | --- |
| Home | `/` | Yes | MedicalClinic, WebSite |
| Skin & Diabetes | `/skin-and-diabetes/` | Yes | BreadcrumbList |
| Bones & Joints | `/bones-and-joints/` | Yes | BreadcrumbList |
| About | `/about/` | Yes | IndividualPhysician × 4, BreadcrumbList |
| Contact | `/contact/` | Yes | BreadcrumbList |
| Blog | `/blog/` | Yes | BreadcrumbList |
| Blog post | `/blog/<slug>/` | Yes | BlogPosting, BreadcrumbList |
| Privacy policy | `/privacy-policy/` | Yes | BreadcrumbList |

Navigation: logo, Skin & Diabetes, Bones & Joints, About, Blog, Contact, and a Call Now button. The privacy policy is linked from the footer and the form.

### F2 — Home page

Ordered the way a patient decides: what the clinic does, who does it, whether others trust it, how to reach it.

1. **Hero:** H1 with the clinic name and "skin, diabetes and orthopaedic care in Kanchipuram", plus Call and WhatsApp buttons.
2. **Two specialty cards,** side by side, each linking to its page.
3. **Meet your doctors:** photo and qualifications for Dr. Paramanantham and Dr. P Madhavan, noting that Dr. P Madhavan offers video consultations for now. Registration numbers are added later.
4. **Why patients choose the clinic:** years in Kanchipuram (since 2015), specialties in one place, timings. True, specific points only.
5. **Google reviews:** the rating, "130+ reviews" written as text (never an exact count), and the five most recent reviews from Google's Places API. Fetch them at build time so the API key stays secret, rebuild the site daily so they stay fresh, show reviewers' names as Google supplies them, credit Google and link to the clinic's Google profile.
6. **From our blog:** the three latest posts, updating automatically.
7. **Find us:** map (loads on scroll), timings by day, address, directions link.
8. **Footer:** contact details, page links, hours, social profiles.
9. *Not at launch:* patient testimonial videos.

### F3 — Specialty pages

These two pages carry the local searches ("skin specialist Kanchipuram"), so they get the deepest content. Skin & Diabetes is the lead page and is written first.

1. **H1** like "Skin & Diabetes Care in Kanchipuram", then a plain opening paragraph on what the clinic offers.
2. **Conditions treated and treatments:** only services the clinic has confirmed it provides (Part G, rule 3).
3. **The doctor:** a card linking to their profile on the About page.
4. **FAQs** from real patient questions (Part C1).
5. **Call and WhatsApp buttons,** and a link to the other specialty.

**Bones & Joints only:**

- **The Knee Clinic** (Dr. P Madhavan's sub-brand) appears in this page's body, title and meta description, with its logo beside the clinic logo. Nowhere else on the site, and not in the navigation.
- **Calls to action say "Book a video consultation"** until Dr. P Madhavan returns (about Oct 2027), then switch to in-person.
- **Page title:** the client picks between two versions, one leading with the search term and one with The Knee Clinic.
- **No wording that implies the clinic performs robotic joint replacement** (Part G, rule 4).

### F4 — About page

1. **The clinic:** when it opened (2015), facilities, how a visit works, and a photo gallery of real clinic photos.
2. **All four doctors,** dental team included, each with its own anchor (Part B3): photo, name and qualifications exactly as in the requirements document, role, and a short bio once received.
3. **No dental service page in v1,** but the dental doctors still appear here because they are part of the clinic.
4. **Registration numbers** are added in a later update.

### F5 — Blog posts

1. **Patient-focused topics** from real questions (Part C3), at the agreed four posts a month.
2. **Byline:** writer's name, "Medically reviewed by Dr. …", published date and last-reviewed date, shown at the top.
3. **Every post is approved by the reviewing doctor before publishing.** AI drafts are fine as a start, never published unedited.
4. **Each post links to the relevant specialty page** and ends with a gentle call to book.
5. **General information only,** with a line such as "This article is general information, not a diagnosis. Please consult a doctor about your own symptoms."

### F6 — Contact page

1. **The enquiry form** (Part E5), with the privacy notice beside the submit button.
2. **Phone, WhatsApp, email,** and the address as text in an `<address>` element.
3. **Map embed and a "Get directions" link.**
4. **Doctor availability by day:** clinic hours for Dr. Paramanantham; video consultations only for Dr. P Madhavan.

### F7 — Privacy policy

What the form collects (name, phone, specialty, preferred day), why, who sees it, how long it is kept, that analytics is used without personal data, and who to contact. Have the client's adviser check it.

## Part G — Medical and legal guardrails

On a medical site, accuracy and restraint come before keywords. Google holds health pages to a higher standard: they must be accurate and match expert consensus. Indian rules also limit how doctors may promote themselves. This is not legal advice.

1. **No self-praise.** Never "best", "No. 1", "only centre", "leading", "trusted", "world-class", "centre of excellence" or "painless". The Indian Medical Council's 2002 ethics regulations, still in force (the NMC's 2023 rules are on hold), bar doctors from self-aggrandising promotion.
2. **No cure or outcome claims.** Never "cure", "reverse diabetes", "permanent solution", "guaranteed" or success rates. The same regulations bar boasting of cures, and the Drugs and Magic Remedies Act 1954 restricts advertising remedies for listed conditions, including diabetes and leucoderma.
3. **Only services the clinic actually provides.** Keywords such as PRP hair therapy, laser skin treatment, physiotherapy, rheumatology and robotic knee replacement are targeted only after the clinic confirms each one. A patient who calls and is told "we don't do that" is lost.
4. **Training is not equipment.** "Trauma and robotic joint replacement surgeon" describes Dr. P Madhavan's training. No page may imply the Kanchipuram clinic performs robotic surgery unless the clinic confirms where those procedures happen and that wording is approved.
5. **No testimonial videos or written testimonials at launch.** Live Google reviews on the home page (Part F2) are fine: they are written on Google by patients, credited to Google, and never marked up as structured data.
6. **No device brand names, no before-and-after images, no patient faces.** Check every clinic photo for standees or posters carrying superlative claims before using it.
7. **Review count as "130+",** never an exact number, in all copy.
8. **Only confirmed facts.** Anything not Confirmed in Project facts, or stated in the requirements document, stays off the site, including titles, descriptions and structured data.
9. **Every health article is drafted, then approved by the relevant doctor before publishing,** names the reviewer, and shows a last-reviewed date. The approver is the doctor named in Project facts; ideally each article is also checked by the doctor whose specialty it covers.
10. **General information, never individual advice.** No symptom checkers or "you probably have…" content.
11. **Names exactly as the requirements document spells them:** Dr. Paramanantham, Dr. P Madhavan, Dr. P. Sudharsan, Dr. Niranjani, and Rani Multi Speciality Clinic.

## Part H — Pre-launch testing checklist

Run every check on the live domain. Claude Code reports each as pass or fail with evidence; the site is not ready while any item fails.

**Crawling and indexing**

- [ ] robots.txt loads, lists the sitemap, and blocks no search crawler (Googlebot, Bingbot, OAI-SearchBot)
- [ ] The sitemap lists the 8 page types in Part F1 and every blog post, nothing else; lastmod only where content changed
- [ ] Every page has a self-referencing https canonical with the trailing slash
- [ ] On Hostinger: http → https, www/non-www and no-slash → slash each 301-redirect in one hop; the 404 page returns status 404
- [ ] No live page has `noindex`, `nosnippet` or `max-snippet:0`
- [ ] Any GitHub preview copy is `noindex` and blocked in its robots.txt, and that robots.txt is not on the live site
- [ ] Search Console: sitemap submitted, URL Inspection shows the home page as indexable
- [ ] Screaming Frog crawl: no missing titles, descriptions or alt text, no broken links

**Metadata and content**

- [ ] Every page has a unique title and meta description, with no superlatives
- [ ] One clear H1 per page; headings follow the page structure
- [ ] Meaningful images have alt text; decorative images have `alt=""`
- [ ] Name, address, phone and hours are identical on every page and match the (corrected) Google Business Profile
- [ ] No `CONFIRM`, `DOMAIN`, `REPLACE-WITH-DOMAIN`, `XXXX` or other placeholder text anywhere in the built HTML
- [ ] Every service mentioned is one the clinic has confirmed; nothing implies robotic surgery at the clinic
- [ ] Bones & Joints: every call to action says video consultation; The Knee Clinic appears on that page only
- [ ] Doctor names and credentials match the requirements document exactly, on every page

**Structured data**

- [ ] Home, About, both specialty pages and a blog post pass the Schema.org validator with no errors
- [ ] Google's Rich Results Test shows no errors on the same pages
- [ ] Every value in the markup is visible on the page; breadcrumbs match the visible trail
- [ ] No AggregateRating, Review, SearchAction or microdata anywhere, including around the Google reviews section

**Speed, mobile and accessibility**

- [ ] Lighthouse on mobile: 90+ in all four categories on home and both specialty pages
- [ ] PageSpeed Insights (mobile): LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1
- [ ] Checked on real phones, not only a laptop: no horizontal scroll at 320 px, the WhatsApp button covers nothing
- [ ] Tap targets at least 24 × 24 px; main buttons about 44 px; no white text on the orange (#F7941D)
- [ ] Keyboard-only use reaches every link and the form

**Tracking**

- [ ] Two different pages both appear in GA4 Realtime (the tag is in the base layout)
- [ ] DebugView shows exactly one `call_click`, `whatsapp_click`, `directions_click` and `generate_lead` per action, with `placement` set
- [ ] A test enquiry reaches the enquiry email and is counted once
- [ ] No name, phone or typed text appears in any GA4 event, URL or page title
- [ ] GA4 Google signals and ads personalisation are off; no remarketing tag is present
- [ ] The Google reviews section shows Google attribution and links to the clinic's profile

## Part I — Prompt for Claude Code

Put three files in a `docs` folder in the project: the requirements document as `docs/requirements.md` (or .docx), the website brief as `docs/website-brief.md` (or .docx), and this brief, exported as Markdown, as `docs/seo-brief.md`. Then paste this prompt as your first message to Claude Code:

```text
Read these three documents in full before writing any code:
- docs/requirements.md   (what the client wants: scope, services, content)
- docs/website-brief.md  (design, layout, page copy)
- docs/seo-brief.md      (SEO, structured data, tracking, wording rules, testing)
Build the Rani Multi Speciality Clinic website in Astro, following all three.

Rules:
1. Clinic facts (name, address, phone, hours, doctors, services) come only from values
   marked Confirmed in the "Project facts" table of seo-brief.md, or stated in
   requirements.md. Never invent names, numbers, hours, credentials, ratings, IDs or claims.
2. If two documents disagree on anything (a fact, a page, a feature, a wording rule),
   do not choose. Stop and list every conflict for me to decide.
3. Put every clinic fact in one file, src/data/clinic.ts. The footer, contact page,
   metadata and all JSON-LD must read from it.
4. Build only the pages in Part F1 of seo-brief.md, at those exact URLs, unless I
   approve a change.
5. Implement Parts A to E of seo-brief.md as written. Anything marked "Do not build"
   must not appear. Items marked "Optional" are left out unless I ask for them.
6. Follow Part G of seo-brief.md for all wording, including copy taken from the
   other two documents.
7. Before writing code, show me your plan: file structure, components, how you will
   handle each Part of seo-brief.md, and any conflicts found. Wait for my approval.
8. When the build is done, run the Part H checklist and report every item as pass or
   fail with evidence. Do not call the site ready while anything fails.
```

## Sources

All opened on 4 Oct 2026. Re-check Google's pages at build time; they change.

**Google Search Central**

- [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (AI features, llms.txt, structured data; updated 10 Jul 2026)
- [FAQ structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage) (FAQ rich results ended 7 May 2026)
- [Review snippet guidelines](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) (self-serving reviews)
- [Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) (required and recommended properties)
- [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization) (logo size)
- [Title links](https://developers.google.com/search/docs/appearance/title-link) and [snippets](https://developers.google.com/search/docs/appearance/snippet) (no length limits)
- [Robots meta tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) (index and follow are defaults)
- [Build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) (lastmod, priority, changefreq)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) (headings, word counts)
- [URL structure](https://developers.google.com/search/docs/crawling-indexing/url-structure) (hyphens, case, parameters)
- [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) (health topics, E-E-A-T, bylines)

**Google Business Profile, Ads and Analytics**

- [Guidelines for representing your business on Google](https://support.google.com/business/answer/3038177?hl=en) (business name rules)
- [Health in personalized advertising](https://support.google.com/adspolicy/answer/16701855?hl=en) (no Customer Match or advertiser audiences)
- [Avoid sending PII to Google Analytics](https://support.google.com/analytics/answer/6366371?hl=en)

**Standards and specifications**

- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [Schema.org IndividualPhysician](https://schema.org/IndividualPhysician), [MedicalClinic](https://schema.org/MedicalClinic) and [MedicalSpecialty values](https://google.schema.org/MedicalSpecialty) (mirror)
- [Schema App: the v24 Physician change](https://www.schemaapp.com/schema-app-news/schema-org-v24-0-release-changes-to-physician-schema-markup/)
- [W3C: decorative images](https://w3.org/WAI/tutorials/images/decorative/) and [WCAG 2.2 target size](https://kb.daisy.org/publishing/docs/wcag/target-size-minimum.html)
- [OpenAI crawlers](https://developers.openai.com/api/docs/bots)

**News and legal**

- [Search Engine Land: sitelinks search box removed, Nov 2024](https://searchengineland.com/google-search-to-drop-sitelinks-search-box-447682)
- [Sitebulb: breadcrumbs removed from mobile results, Jan 2025](https://sitebulb.com/resources/guides/breadcrumbs-in-seo-what-googles-mobile-change-actually-means/)
- [TechWyse: Google's AI guide and the Lighthouse llms.txt audit](https://www.techwyse.com/news/ai-search/google-ai-search-optimization-guide-llms-txt-lighthouse-audit)
- [ThePrint: doctor advertising rules, IMC 2002 and NMC 2023](https://theprint.in/health/advertisement-norms-for-doctors-corporate-hospitals-cant-be-different-says-nmc-panel/2019838/) (Apr 2024)
- [Indian Infrastructure: DPDP Rules notified 18 Nov 2025](https://indianinfrastructure.com/2025/11/18/government-notifies-digital-personal-data-protection-rules-2025/)
- [Drugs and Magic Remedies Act 1954, Schedule](https://tilakmarg.com/acts/drugs-and-magic-remedies-objectionable-advertisements-act-1954-sections-10-to-16-and-schedule/)
