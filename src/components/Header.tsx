import Image from "next/image";
import type { Translation } from "@/types";
import type { Lang } from "@/types";
import { DISCORD_SERVER_URL } from "@/lib/i18n";

interface HeaderProps {
  t: Translation;
  lang: Lang;
  onToggleLang: () => void;
}

export function Header({ t, lang, onToggleLang }: HeaderProps) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(11,7,16,.72)",
        borderBottom: "1px solid rgba(196,110,240,.14)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px 18px",
          padding: "11px clamp(14px,4vw,40px)",
        }}
      >
        {/* Logo */}
        <a
          href="#topo"
          style={{ display: "flex", alignItems: "center", gap: 11 }}
        >
          <Image
            src="/images/icone.jpg"
            alt="fofie"
            width={38}
            height={38}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              filter: "drop-shadow(0 0 8px rgba(196,110,240,.5))",
              animation: "bob 6s ease-in-out infinite",
            }}
            priority
          />
          <span
            style={{
              fontFamily: "'Grenze Gotisch'",
              fontWeight: 700,
              fontSize: 31,
              color: "#f3ecfb",
              letterSpacing: ".02em",
              lineHeight: 1,
            }}
          >
            fofie
          </span>
        </a>

        {/* Nav */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2px 4px",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            onClick={onToggleLang}
            style={{
              cursor: "pointer",
              fontFamily: "'Jost'",
              fontWeight: 600,
              fontSize: 13,
              padding: "8px 13px",
              borderRadius: 999,
              border: "1px solid rgba(196,110,240,.35)",
              background: "transparent",
              color: "#e7d9f7",
              transition: "background .2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(196,110,240,.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <a
            href={DISCORD_SERVER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: "9px 17px",
              fontSize: 14,
              color: "#1a0a23",
            }}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
