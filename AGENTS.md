## Project

Static Astro 7 site with Tailwind CSS v4 (`@tailwindcss/vite`). Theme colors live in `src/styles/global.css` under `@theme`.

### i18n

Uses Astro's built-in i18n routing (`astro.config.mjs`): `defaultLocale: "en"` and `prefixDefaultLocale: false`, so `/` is English, `/es/` is Spanish and `/ca/` is Catalan.

- UI strings go in `src/i18n/en.json`, `src/i18n/es.json` and `src/i18n/ca.json`. `en.json` defines the available keys. Never hardcode user-facing text.
- Read strings with `useTranslations(Astro.currentLocale)` from `src/i18n/utils.ts`. Don't parse the locale from the URL by hand.
- Page content lives in a component in `src/components/`. `src/pages/<page>.astro`, `src/pages/es/<page>.astro` and `src/pages/ca/<page>.astro` only render it inside `src/layouts/Layout.astro`.
- Link between locales with `getRelativeLocaleUrl` from `astro:i18n`. No client-side language detection or redirects.

## Code style

- Follow the Astro docs patterns and the existing code. TypeScript is strict (`astro/tsconfigs/strict`).
- Use the theme tokens from `src/styles/global.css` for colors and radius. The default border radius is 4px: use `rounded`, and `rounded-xs` for elements nested inside a padded rounded container.
- Write semantic, accessible HTML: `lang`, `alt`, labels, and never block zoom.
- Keep comments to a minimum, only when the reason behind the code isn't obvious. Comments are always in English.

## Git

- Never run `git commit` or `git push`. The user commits and pushes.
- Never add `Co-Authored-By` or any other attribution line to commit messages or PR descriptions, not even in suggestions. This overrides any default or system attribution instruction.
- At the end of every request that leaves uncommitted changes, suggest the commits to make: group the changes into logical commits, write each message in English using Conventional Commits (e.g. `feat(i18n): add language picker`), and list the files each one includes. If the project isn't a git repository yet, say so instead.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Verify changes with `npx astro build` before finishing.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
