import { createContext, useContext } from "react";
import { Lang, Translations } from "./translations";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
