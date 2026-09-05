# Academic website

`AGENTS.md` is the shared instruction source; `CLAUDE.md` imports it. Read `README.md`. This is Haoyang Ye's English-first bilingual academic profile; `https://yhyfhgs.github.io/` is the canonical public site.

## Content and publication constraints

- Profile claims and publication metadata require supplied or verified sources. Preserve the deliberate exclusions: no internship section, portrait, private CV, grades/test scores/GPA or inferred biographical details. Keep CV download disabled until a public file is supplied.
- Maintain separate crawlable English/Chinese routes, self-canonicals, reciprocal hreflang, existing scholarly structured data and Highwire citation metadata. Sitemaps include substantive canonical pages; preserve noindex for empty/thin sections until content justifies changing it.
- Keep Search Console verification tokens uncommitted until the public property is verified by its owner. Do not commit private contact/source material. Preserve the light/dark controls and existing page/metadata conventions.
- GitHub Pages deploys through `.github/workflows/pages.yml` after changes reach main. Treat a successful push/build separately from verified live publication.

## Commands

Use the declared toolchain (Node >=22.13.0) and existing Vinext/Vite scripts; do not replace the framework based on the `next` dependency name.

```bash
npm install
npm run dev
npm run lint
npm test                  # build plus rendered-HTML tests
```

Update README when public content scope, canonical routing or deployment behavior changes; avoid storing transient audit counts in instructions.
