import en from "./en.json";
import es from "./es.json";

const ui = { en, es };

export type Lang = keyof typeof ui;
export type UIKey = keyof typeof en;

export const defaultLang: Lang = "en";

// Each language's name in its own language, for the language picker
export const languages: Record<Lang, string> = {
  en: "English",
  es: "Español",
};

export function isLang(lang: string | undefined): lang is Lang {
  return lang !== undefined && lang in ui;
}

export function useTranslations(lang: string | undefined) {
  const dict: Partial<Record<UIKey, string>> = ui[isLang(lang) ? lang : defaultLang];
  return (key: UIKey) => dict[key] ?? ui[defaultLang][key];
}

// "/es/about/" -> "/about/", so the same page can be linked in another language
export function pathWithoutLocale(pathname: string, lang: string) {
  return pathname.replace(new RegExp(`^/${lang}(?=/|$)`), "") || "/";
}
