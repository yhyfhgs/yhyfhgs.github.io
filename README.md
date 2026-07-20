# Haoyang Ye — Academic Profile

The source for Haoyang Ye's English-first, bilingual academic website.

- Public site: [yhyfhgs.github.io](https://yhyfhgs.github.io/)

The GitHub Pages site is the canonical public version.

## Site contents

- Research experience, education, honors, and source-backed profile details
- Publication index and individual publication pages with official metadata
- Homepage and footer contact links for email, GitHub, ORCID, and X
- Separate Blog, friend-links, and Academic Index pages
- Crawlable English and Chinese routes with light/dark controls
- Reserved News, Talks, Teaching, Projects & Software, Service, and CV areas

The site intentionally contains no internship section, portrait, private CV file, grades, test scores, GPA, or inferred biographical claims. The CV control is a disabled download placeholder until a public file is supplied.

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
- The sitemap contains only canonical pages with substantive academic content; the empty Blog and Academic Index plus the currently thin Links page remain `noindex, follow`.
- The homepage publishes `WebSite`, `ProfilePage`, and `Person` JSON-LD.
- The publication archive publishes `CollectionPage`, `ItemList`, and breadcrumb data.
- Each paper page publishes `ScholarlyArticle`, breadcrumb data, and Google Scholar-compatible Highwire citation metadata.
- Route-specific Open Graph and X Card metadata use a 1200×630 social image.

Google Search Console verification tokens are intentionally not committed. Add them only after the public property is verified by its owner.
