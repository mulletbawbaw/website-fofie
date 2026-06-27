import Image from "next/image";
import type { Translation } from "@/types";
import { RevealDiv } from "@/components/RevealDiv";

interface CommissionsProps {
  t: Translation;
}

const NORMAL_PRICES = ["R$25", "R$35", "R$60"] as const;
const CHIBI_PRICES = ["R$15", "R$20", "R$30"] as const;

export function Commissions({ t }: CommissionsProps) {
  const rowKeys = ["icon", "bust", "full"] as const;

  const normalRows = rowKeys.map((key, i) => ({
    label: t.comm.rows[key],
    price: NORMAL_PRICES[i],
  }));

  const chibiRows = rowKeys.map((key, i) => ({
    label: t.comm.rows[key],
    price: CHIBI_PRICES[i],
  }));

  return (
    <section id="comissoes" className="section-wrap">
      <RevealDiv className="section-header reveal">
        <p className="eyebrow">{t.comm.eyebrow}</p>
        <h2 className="section-title">{t.comm.title}</h2>
        <p className="section-note">{t.comm.note}</p>
      </RevealDiv>

      {/* Pricing cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 22,
        }}
      >
        {/* Normal style */}
        <RevealDiv className="comm-card reveal">
          <Badge gradient>{t.comm.promoTag}</Badge>
          <CardTitle>{t.comm.normalName}</CardTitle>
          <CardDesc>{t.comm.normalDesc}</CardDesc>
          <PriceList rows={normalRows} />
          <PromoNote>{t.comm.promo}</PromoNote>
        </RevealDiv>

        {/* Chibi style */}
        <RevealDiv
          className="comm-card comm-card-subtle reveal"
          style={{ transitionDelay: "80ms" }}
        >
          <Badge>{t.comm.chibiTag}</Badge>
          <CardTitle>{t.comm.chibiName}</CardTitle>
          <CardDesc>{t.comm.chibiDesc}</CardDesc>
          <PriceList rows={chibiRows} />
          <p style={{ margin: "16px 0 0", fontSize: 13, lineHeight: 1.5, color: "#b6a6cf" }}>
            {t.comm.chibiNote}
          </p>
        </RevealDiv>
      </div>

      {/* Payment & add-ons */}
      <RevealDiv
        className="reveal"
        style={{
          marginTop: 22,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
          gap: 18,
        }}
      >
        {/* Payment */}
        <div
          style={{
            overflow: "hidden",
            border: "1.5px solid rgba(196,110,240,.45)",
            borderRadius: 22,
            padding: 26,
            background:
              "linear-gradient(150deg,rgba(196,110,240,.16),rgba(255,255,255,.02))",
            boxShadow: "0 18px 50px rgba(123,63,160,.22)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <Image
              src="/images/download (3).png"
              alt="PIX"
              width={54}
              height={54}
              style={{
                borderRadius: 15,
                filter: "drop-shadow(0 0 12px rgba(196,110,240,.6))",
              }}
            />
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Cinzel'",
                  textTransform: "uppercase",
                  letterSpacing: ".2em",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#c46ef0",
                }}
              >
                {t.comm.payTitle}
              </p>
              <p
                style={{
                  margin: "3px 0 0",
                  fontFamily: "'Grenze Gotisch'",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#f3ecfb",
                  lineHeight: 1,
                  letterSpacing: ".04em",
                }}
              >
                PIX
              </p>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "#e0d2f4" }}>
            {t.comm.payText}
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
            {[t.comm.payTag1, t.comm.payTag2].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(196,110,240,.16)",
                  border: "1px solid rgba(196,110,240,.34)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#ecc6ff",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div
          style={{
            border: "1px solid rgba(196,110,240,.2)",
            borderRadius: 22,
            padding: 26,
            background: "rgba(255,255,255,.02)",
          }}
        >
          <p
            style={{
              fontFamily: "'Cinzel'",
              textTransform: "uppercase",
              letterSpacing: ".2em",
              fontSize: 12,
              fontWeight: 600,
              color: "#c46ef0",
              margin: "0 0 16px",
            }}
          >
            {t.comm.addonsTitle}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.comm.addons.map((a) => (
              <div
                key={a.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 14,
                  background: "rgba(196,110,240,.08)",
                  border: "1px solid rgba(196,110,240,.16)",
                }}
              >
                <span style={{ fontSize: 15, color: "#f3ecfb" }}>{a.label}</span>
                <span style={{ fontWeight: 700, fontSize: 19, color: "#ecc6ff" }}>
                  {a.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RevealDiv>
    </section>
  );
}

/* ── Small sub-components ──────────────────────────────────── */

function Badge({ children, gradient }: { children: React.ReactNode; gradient?: boolean }) {
  return (
    <div
      style={{
        display: "inline-block",
        fontFamily: "'Cinzel'",
        textTransform: "uppercase",
        letterSpacing: ".18em",
        fontSize: 11,
        fontWeight: 600,
        padding: "5px 12px",
        borderRadius: 999,
        ...(gradient
          ? { color: "#1a0a23", background: "linear-gradient(135deg,#e08bff,#c46ef0)" }
          : { color: "#c46ef0", border: "1px solid rgba(196,110,240,.4)" }),
      }}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "'Fredoka'",
        fontWeight: 700,
        fontSize: 28,
        color: "#f3ecfb",
        margin: "16px 0 6px",
      }}
    >
      {children}
    </h3>
  );
}

function CardDesc({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: "0 0 16px", fontSize: 15, color: "#b6a6cf" }}>{children}</p>
  );
}

function PriceList({ rows }: { rows: { label: string; price: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {rows.map((r) => (
        <div key={r.label} className="price-row">
          <span className="price-label">{r.label}</span>
          <span className="price-value">{r.price}</span>
        </div>
      ))}
    </div>
  );
}

function PromoNote({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: "16px 0 0",
        fontSize: 13,
        lineHeight: 1.5,
        color: "#d6c6ef",
        background: "rgba(196,110,240,.1)",
        border: "1px dashed rgba(196,110,240,.4)",
        borderRadius: 14,
        padding: "12px 14px",
      }}
    >
      {children}
    </p>
  );
}
