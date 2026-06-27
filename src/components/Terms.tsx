import Image from "next/image";
import type { Translation } from "@/types";
import { RevealDiv } from "@/components/RevealDiv";

interface TermsProps {
  t: Translation;
}

export function Terms({ t }: TermsProps) {
  return (
    <section id="termos" style={{ maxWidth: 1000 }} className="section-wrap">
      <RevealDiv className="section-header reveal">
        <p className="eyebrow">{t.tos.eyebrow}</p>
        <h2 className="section-title">{t.tos.title}</h2>
        <p className="section-note">{t.tos.note}</p>
      </RevealDiv>

      <RevealDiv
        className="reveal"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 34,
          alignItems: "center",
          border: "1px solid rgba(196,110,240,.18)",
          borderRadius: 26,
          padding: "clamp(24px,4vw,42px)",
          background: "rgba(255,255,255,.02)",
        }}
      >
        {/* Illustration */}
        <div
          style={{
            flex: "0 0 auto",
            width: "100%",
            maxWidth: 220,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/download (2).png"
            alt=""
            width={220}
            height={220}
            aria-hidden
            style={{
              width: "100%",
              height: "auto",
              filter: "invert(1) drop-shadow(0 0 24px rgba(196,110,240,.55))",
              opacity: 0.85,
              animation: "floaty 7s ease-in-out infinite",
            }}
          />
        </div>

        {/* Terms list */}
        <ol
          style={{
            flex: "1 1 360px",
            minWidth: 280,
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
        >
          {t.tos.items.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span
                style={{
                  flex: "0 0 auto",
                  width: 26,
                  height: 26,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Cinzel'",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#c46ef0",
                  border: "1px solid rgba(196,110,240,.4)",
                  background: "rgba(196,110,240,.08)",
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: "#cdbce6" }}>
                {item}
              </span>
            </li>
          ))}
        </ol>
      </RevealDiv>
    </section>
  );
}
