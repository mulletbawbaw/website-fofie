import Image from "next/image";
import type { Translation } from "@/types";
import { DISCORD_SERVER_URL, TWITTER_URL } from "@/lib/i18n";
import { DiscordIcon, XIcon } from "@/components/Icons";

interface FooterProps {
  t: Translation;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(196,110,240,.14)",
        marginTop: 30,
        padding: "46px clamp(16px,4vw,40px)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 22,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/images/icone.jpg"
            alt="fofie"
            width={46}
            height={46}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              filter: "drop-shadow(0 0 8px rgba(196,110,240,.5))",
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "'Grenze Gotisch'",
                fontWeight: 700,
                fontSize: 27,
                color: "#f3ecfb",
                lineHeight: 1,
              }}
            >
              fofie
            </div>
            <div style={{ fontSize: 13, color: "#9d8cba", marginTop: 2 }}>
              {t.footer.tagline}
            </div>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={DISCORD_SERVER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <DiscordIcon size={18} color="#c46ef0" />
            Discord
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <XIcon size={15} color="#c46ef0" />
            @fofiexp
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          maxWidth: 1100,
          margin: "26px auto 0",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 12,
          color: "#6f5f8a",
        }}
      >
        <span>{t.footer.rights}</span>
        <a
          href="#topo"
          style={{ color: "#9d8cba", transition: "color .2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#c46ef0")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#9d8cba")}
        >
          {t.footer.back} ↑
        </a>
      </div>
    </footer>
  );
}
