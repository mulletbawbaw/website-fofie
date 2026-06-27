import Image from "next/image";
import type { Translation } from "@/types";
import { DISCORD_USER_URL } from "@/lib/i18n";

interface HeroProps {
  t: Translation;
}

export function Hero({ t }: HeroProps) {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Decorative floating image */}
      <Image
        src="/images/download (1).png"
        alt=""
        width={440}
        height={440}
        aria-hidden
        style={{
          position: "absolute",
          top: -40,
          right: -30,
          width: "clamp(220px,30vw,440px)",
          height: "auto",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 0,
          animation: "floaty 9s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding:
            "clamp(70px,12vh,130px) clamp(16px,4vw,40px) clamp(50px,8vh,100px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(28px,5vw,60px)",
          justifyContent: "center",
        }}
      >
        {/* Text */}
        <div
          style={{
            flex: "1 1 380px",
            minWidth: 300,
            maxWidth: 640,
          }}
        >
          {/* Open badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "8px 16px",
              border: "1px solid rgba(196,110,240,.4)",
              borderRadius: 999,
              background: "rgba(196,110,240,.08)",
              color: "#e7d9f7",
              marginBottom: 22,
              animation: "pulseRing 2.8s ease-out infinite",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#7CFFB2",
                boxShadow: "0 0 10px #7CFFB2",
                animation: "blink 1.6s infinite",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "'Cinzel'",
                textTransform: "uppercase",
                letterSpacing: ".16em",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {t.hero.badge}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Grenze Gotisch'",
              fontWeight: 700,
              fontSize: "clamp(72px,13vw,172px)",
              lineHeight: 0.92,
              letterSpacing: ".015em",
              margin: 0,
              background:
                "linear-gradient(100deg,#f3ecfb,#e08bff 35%,#c46ef0 60%,#9b5de5 92%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              animation: "shimmer 6s linear infinite",
              filter: "drop-shadow(0 6px 30px rgba(196,110,240,.35))",
            }}
          >
            fofie
          </h1>

          <p
            style={{
              fontSize: "clamp(17px,2.2vw,21px)",
              lineHeight: 1.6,
              color: "#c4b4dd",
              margin: "20px 0 30px",
              maxWidth: 520,
            }}
          >
            {t.hero.tagline}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href="#comissoes" className="btn-primary">
              {t.hero.ctaPrimary}{" "}
              <span style={{ fontSize: 18 }}>↓</span>
            </a>
            <a
              href={DISCORD_USER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Mascot */}
        <div
          style={{
            flex: "0 1 500px",
            minWidth: 260,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minHeight: 380,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "clamp(240px,30vw,380px)",
              height: "clamp(240px,30vw,380px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(196,110,240,.45),transparent 60%)",
              filter: "blur(30px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "clamp(310px,44vw,530px)",
              height: "clamp(310px,44vw,530px)",
              border: "1.5px dashed rgba(196,110,240,.3)",
              borderRadius: "50%",
              animation: "spinSlow 40s linear infinite",
            }}
          />
          <Image
            src="/images/icone-completo-fofie.png"
            alt="fofie mascot"
            width={500}
            height={500}
            priority
            style={{
              position: "relative",
              width: "clamp(260px,38vw,460px)",
              height: "auto",
              animation: "floaty 5s ease-in-out infinite",
              filter: "drop-shadow(0 20px 40px rgba(196,110,240,.5))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
