"use client";

import { useState } from "react";
import Image from "next/image";
import type { Translation, GalleryImage } from "@/types";
import { GALLERY_IMAGES } from "@/lib/i18n";
import { RevealDiv } from "@/components/RevealDiv";
import { GalleryModal } from "@/components/GalleryModal";

interface GalleryProps {
  t: Translation;
}

export function Gallery({ t }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section id="galeria" className="section-wrap">
      <RevealDiv className="section-header reveal">
        <p className="eyebrow">{t.gallery.eyebrow}</p>
        <h2 className="section-title">{t.gallery.title}</h2>
        <p className="section-note">{t.gallery.note}</p>
      </RevealDiv>

      <div className="gallery-grid">
        {GALLERY_IMAGES.map((img) => (
          <RevealDiv
            key={img.src}
            className="gallery-card reveal"
            onClick={() => setSelected(img)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelected(img);
            }}
            aria-label={`Ver arte: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={480}
              height={480}
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1100px) 25vw, 280px"
              style={{ width: "100%", height: "auto", display: "block" }}
              quality={80}
            />
            <div className="gallery-card-overlay">
              <span className="gallery-card-hint">
                {t.gallery.close === "Fechar" ? "Ver completo" : "View full"}
              </span>
            </div>
          </RevealDiv>
        ))}
      </div>

      {selected && (
        <GalleryModal
          image={selected}
          closeLabel={t.gallery.close}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
