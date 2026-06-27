"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types";

interface GalleryModalProps {
  image: GalleryImage;
  closeLabel: string;
  onClose: () => void;
}

export function GalleryModal({ image, closeLabel, onClose }: GalleryModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal
      aria-label={image.alt}
      onClick={onClose}
    >
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={closeLabel}
          title={closeLabel}
        >
          ×
        </button>

        <Image
          src={image.src}
          alt={image.alt}
          width={900}
          height={900}
          className="modal-img"
          style={{ maxHeight: "85vh", width: "auto", height: "auto" }}
          sizes="(max-width: 900px) 90vw, 900px"
          quality={95}
          priority
        />
        <p className="modal-alt">{image.alt}</p>
      </div>
    </div>
  );
}
