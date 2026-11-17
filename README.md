# Fort website

Landing page for **Fort**, an offline workout tracker for Android. The site presents the app, links to Google Play and hosts its privacy policy and license.

It is live at [fort.marcel14.dev](https://fort.marcel14.dev), in English (`/`) and Spanish (`/es/`).

## Stack

- [Astro 7](https://docs.astro.build), as a static site
- [Tailwind CSS 4](https://tailwindcss.com), through `@tailwindcss/vite`
- Astro's built-in i18n routing, fonts and image optimization

There is no client-side framework. The only JavaScript is two small inline scripts: the header's section indicator and the language picker.

## Commands

Requires Node 22.23.4 or later.

| Command              | Action                                          |
| :------------------- | :---------------------------------------------- |
| `npm install`        | Install dependencies                            |
| `npm run dev`        | Start the dev server, reachable on your network |
| `npm run background` | Start the dev server in the background          |
| `npm run stop`       | Stop the background dev server                  |
| `npm run check`      | Type-check `.astro` and `.ts` files             |
| `npm run build`      | Build the site into `dist/`                     |
| `npm run preview`    | Serve the build locally                         |

## Project structure

```text
src/
├── assets/         Logo, icons, photos and app screenshots (per language)
├── components/
│   ├── home/       Sections of the home page
│   ├── layout/     Header, footer and language picker
│   ├── legal/      Privacy policy and license pages
│   └── ui/         Shared pieces: buttons and section headers
├── i18n/           Translations (en.json, es.json) and helpers
├── layouts/        Page shell: <head>, SEO tags, header and footer
├── pages/          Routes. Each one only renders a component inside the layout
├── styles/         Theme tokens and custom Tailwind utilities
├── license.txt     The repository license, shown on the license page
└── links.ts        External links and contact email
```

## Translations

Every user-facing string lives in `src/i18n/en.json` and `src/i18n/es.json`, under the same key. `en.json` defines the available keys, so a key missing from it is a type error.

Components read strings with `useTranslations(Astro.currentLocale)` from `src/i18n/utils.ts`, and link between languages with `getRelativeLocaleUrl` from `astro:i18n`.

To add a page, create its component in `src/components/`, then render it from `src/pages/<page>.astro` and `src/pages/es/<page>.astro`.

## Deployment

`npm run build` outputs a static site in `dist/`, which can be served by any static host.

The site is not indexed on purpose for now: `src/layouts/Layout.astro` sets `noindex, nofollow`. Remove that tag when it should show up in search engines.

## License

All rights reserved. See [the license page](https://fort.marcel14.dev/license/) or `src/license.txt`.
