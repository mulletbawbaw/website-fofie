import type { Translation } from "@/types";
import { RevealDiv } from "@/components/RevealDiv";

interface HowToOrderProps {
  t: Translation;
}

export function HowToOrder({ t }: HowToOrderProps) {
  return (
    <section id="pedido" className="section-wrap">
      <RevealDiv className="section-header reveal">
        <p className="eyebrow">{t.order.eyebrow}</p>
        <h2 className="section-title">{t.order.title}</h2>
      </RevealDiv>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(185px,1fr))",
          gap: 16,
        }}
      >
        {t.order.steps.map((step) => (
          <RevealDiv key={step.n} className="step-card reveal">
            <div
              style={{
                fontFamily: "'Cinzel'",
                fontWeight: 700,
                fontSize: 36,
                background: "linear-gradient(135deg,#e08bff,#c46ef0)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {step.n}
            </div>
            <h4
              style={{
                fontFamily: "'Fredoka'",
                fontWeight: 600,
                fontSize: 18,
                color: "#f3ecfb",
                margin: "8px 0 6px",
              }}
            >
              {step.title}
            </h4>
            <p style={{ margin: 0, fontSize: 14, color: "#b6a6cf", lineHeight: 1.5 }}>
              {step.desc}
            </p>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
}
