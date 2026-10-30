import { createContext, useContext, useState, useCallback } from "react";
import en from "../locales/en.json";
import de from "../locales/de.json";

const locales = { en, de };

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("kraftigo-lang") || "de";
  });

  const toggle = useCallback(() => {
    setLang((prev) => {
      const newLang = prev === "en" ? "de" : "en";
      localStorage.setItem("kraftigo-lang", newLang);
      return newLang;
    });
  }, []);

  /**
   * t(key) – dot-notated key into the current locale JSON.
   * e.g.  t("hero.cta")  →  "Find a krafter"  or  "Krafter finden"
   */
  const t = useCallback(
    (key) => {
      const parts = key.split(".");
      let val = locales[lang];
      for (const part of parts) {
        if (val == null) return key;
        val = val[part];
      }
      return val ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
