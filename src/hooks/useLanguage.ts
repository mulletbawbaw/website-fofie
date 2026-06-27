"use client";

import { useState, useCallback } from "react";
import type { Lang } from "@/types";
import { TRANSLATIONS } from "@/lib/i18n";

export function useLanguage(defaultLang: Lang = "pt") {
  const [lang, setLang] = useState<Lang>(defaultLang);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  return { lang, toggle, t: TRANSLATIONS[lang] };
}
