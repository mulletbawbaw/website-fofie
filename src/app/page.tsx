"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Commissions } from "@/components/Commissions";
import { HowToOrder } from "@/components/HowToOrder";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Terms } from "@/components/Terms";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const { lang, toggle, t } = useLanguage("pt");

  return (
    <>
      <Background />
      <div id="topo" style={{ position: "relative", zIndex: 1 }}>
        <Header t={t} lang={lang} onToggleLang={toggle} />
        <Hero t={t} />
        <Commissions t={t} />
        <HowToOrder t={t} />
        <Gallery t={t} />
        <Contact t={t} lang={lang} />
        <Terms t={t} />
        <Footer t={t} />
      </div>
    </>
  );
}
