// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fort.marcel14.dev",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", es: "es", ca: "ca" },
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Sans",
      cssVariable: "--font-instrument-sans",
      weights: ["400 700"],
      styles: ["normal"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: ["100 800"],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ca"],
    routing: { prefixDefaultLocale: false },
  },
});
