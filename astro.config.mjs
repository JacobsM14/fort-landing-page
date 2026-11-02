// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Needed for canonical and hreflang links (see src/layouts/Layout.astro)
  // site: "https://your-domain.com",
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
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
});
