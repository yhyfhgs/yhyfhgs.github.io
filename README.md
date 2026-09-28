# Haoyang Ye — Academic Profile

The source for Haoyang Ye's English-first, bilingual academic website.

- Public site: [yhyfhgs.github.io](https://yhyfhgs.github.io/)

The GitHub Pages site is the canonical public version.

## Site contents

- Research experience, education, honors, and source-backed profile details
- Owner-supplied homepage portrait on both English and Chinese routes
- Collapsible homepage Research entries with visible titles and metadata, and a combined methods-and-contributions section that opens on demand
- Individual research pages for the two ICLR 2027 submissions, with June–September 2026 project periods, authorship, full original abstracts, methods, and Figure 1 from each manuscript
- Publication index and individual publication pages with official metadata
- Homepage and footer contact links for email, GitHub, ORCID, and X
- Undergraduate dual-degree, current doctoral study, and advisor details below the homepage research interests
- Separate Blog, friend-links, and Academic Index pages
- A Hackthon group on the friend-links page for friends met at hackathons, with a direct homepage link
- Compact friend cards in a responsive grid, with circular avatars and linked names above each introduction
- Crawlable English and Chinese routes with light/dark controls
- Reserved News, Talks, Teaching, Projects & Software, Service, and CV areas

The site intentionally contains no internship section, private CV file, grades, test scores, GPA, or inferred biographical claims. The CV control is a disabled download placeholder until a public file is supplied.

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
npm test
```

GitHub Pages is deployed by the workflow in `.github/workflows/pages.yml` after updates reach `main`.

## Search and scholarly discovery

- The public GitHub Pages URL is the canonical origin for every indexable page.
- English and Simplified Chinese pages have self-canonicals and reciprocal `hreflang` links.
- Research detail pages use `/research/<slug>/` and `/zh/research/<slug>/`, link from the homepage Research entries, and are included in the sitemap.
- The sitemap contains only canonical pages with substantive academic content; the empty Blog and Academic Index plus the currently thin Links page remain `noindex, follow`.
- The homepage publishes `WebSite`, `ProfilePage`, and `Person` JSON-LD.
- The publication archive publishes `CollectionPage`, `ItemList`, and breadcrumb data.
- Each paper page publishes `ScholarlyArticle`, breadcrumb data, and Google Scholar-compatible Highwire citation metadata.
- Submission research pages identify their under-review status in scholarly metadata; they do not claim an acceptance or publication date. Only the extracted figures are included as public assets, not the source manuscripts.
- Route-specific Open Graph and X Card metadata use a 1200×630 social image.

Google Search Console verification tokens are intentionally not committed. Add them only after the public property is verified by its owner.
