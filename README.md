# Culture Lens

Culture Lens is a bilingual React guide to Palestinian cities, heritage places, and cultural stories. The current release includes English and Arabic interfaces, city and place routes, responsive navigation, legal pages, and a contact-by-email workflow.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
```

This runs ESLint, content/data tests, and the production Vite build.

## Content structure

- City and place routing data: `src/data/cities.js`
- English content: `src/locales/en/common.json`
- Arabic content: `src/locales/ar/common.json`
- English legal content: `src/locales/en/legal.json`
- Arabic legal content: `src/locales/ar/legal.json`
- Public imagery and logo: `public/`

Every place requires a unique slug, a city association, local image paths, and matching English/Arabic translation entries. The tests enforce these contracts.

## Deployment

The project builds to `dist/`. `vercel.json` and `public/_redirects` provide single-page-application route fallbacks for Vercel and Netlify-style hosting.

## Editorial note

The cultural descriptions are project copy and should receive source review, local expert review, and image-rights verification before a public production launch.
