"use client";

import { useState } from "react";
import Image from "next/image";
import type { Translation } from "@/types";
import type { Lang } from "@/types";
import {
  DISCORD_ID,
  DISCORD_SERVER_URL,
  DISCORD_USER_URL,
  TWITTER_URL,
} from "@/lib/i18n";
import { RevealDiv } from "@/components/RevealDiv";
import { DiscordIcon, XIcon } from "@/components/Icons";

interface ContactProps {
  t: Translation;
  lang: Lang;
}

export function Contact({ t, lang }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_ID);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = DISCORD_ID;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* ignore */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const copyLabel = copied
    ? lang === "pt" ? "Copiado!" : "Copied!"
    : lang === "pt" ? "Copiar ID" : "Copy ID";

  return (
    <section id="contato" style={{ maxWidth: 1000 }} className="section-wrap">
      <RevealDiv className="section-header reveal">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-note">{t.contact.note}</p>
      </RevealDiv>

      {/* Discord card */}
      <RevealDiv
        className="reveal"
        style={{
          border: "1.5px solid rgba(88,101,242,.42)",
          borderRadius: 24,
          padding: "clamp(22px,3.5vw,32px)",
          background:
            "linear-gradient(150deg,rgba(88,101,242,.20),rgba(196,110,240,.06))",
          boxShadow: "0 20px 60px rgba(88,101,242,.24)",
          marginBottom: 18,
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
          {/* Avatar */}
          <div style={{ position: "relative", flex: "0 0 auto" }}>
            <Image
              src="/images/icone.jpg"
              alt="fofie"
              width={76}
              height={76}
              style={{
                borderRadius: 20,
                objectFit: "cover",
                border: "2px solid rgba(255,255,255,.16)",
              }}
            />
            <span
              style={{
                position: "absolute",
                right: -3,
                bottom: -3,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#43b581",
                border: "3px solid #160d22",
                boxShadow: "0 0 8px #43b581",
                display: "block",
              }}
            />
          </div>

          {/* Identity */}
          <div style={{ flex: "1 1 180px", minWidth: 170 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <DiscordIcon size={22} color="#c7d0ff" />
              <span
                style={{
                  fontFamily: "'Grenze Gotisch'",
                  fontWeight: 700,
                  fontSize: 28,
                  color: "#f3ecfb",
                  lineHeight: 1,
                }}
              >
                {t.contact.dcName}
              </span>
            </div>
            <p
              style={{
                margin: "8px 0 0",
                fontSize: 14,
                color: "#c7d0ff",
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#43b581",
                  display: "inline-block",
                  boxShadow: "0 0 6px #43b581",
                }}
              />
              {t.contact.dcStatus}
            </p>
          </div>

          {/* ID + add button */}
          <div
            style={{
              flex: "1 1 270px",
              minWidth: 240,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "11px 14px",
                borderRadius: 13,
                background: "rgba(0,0,0,.28)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: ".18em",
                    color: "#9aa0c7",
                  }}
                >
                  {t.contact.idLabel}
                </div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    color: "#e7d9f7",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {DISCORD_ID}
                </div>
              </div>
              <button
                onClick={copyId}
                style={{
                  cursor: "pointer",
                  flex: "0 0 auto",
                  padding: "9px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(196,110,240,.4)",
                  background: "rgba(196,110,240,.16)",
                  color: "#ecc6ff",
                  fontFamily: "'Jost'",
                  fontWeight: 600,
                  fontSize: 13,
                  transition: "background .2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(196,110,240,.32)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(196,110,240,.16)")
                }
              >
                {copyLabel}
              </button>
            </div>

            <a
              href={DISCORD_USER_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                padding: 14,
                borderRadius: 13,
                fontWeight: 700,
                fontSize: 15,
                color: "#fff",
                background: "#5865F2",
                boxShadow: "0 8px 24px rgba(88,101,242,.45)",
                transition: "transform .2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "none")
              }
            >
              <DiscordIcon size={20} color="#fff" />
              {t.contact.dcAdd}
            </a>
          </div>
        </div>
      </RevealDiv>

      {/* Social links */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 18,
        }}
      >
        {/* Discord server */}
        <RevealDiv className="reveal">
          <a
            href={DISCORD_SERVER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
            style={{
              background: "linear-gradient(135deg,rgba(88,101,242,.14),rgba(196,110,240,.05))",
            }}
          >
            <span
              style={{
                flex: "0 0 auto",
                width: 50,
                height: 50,
                borderRadius: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#5865F2",
                boxShadow: "0 0 18px rgba(88,101,242,.5)",
              }}
            >
              <DiscordIcon size={26} color="#fff" />
            </span>
            <span style={{ flex: 1 }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Fredoka'",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#f3ecfb",
                }}
              >
                {t.contact.dcServer}
              </span>
              <span
                style={{ display: "block", fontSize: 13, color: "#b6a6cf", marginTop: 2 }}
              >
                {t.contact.dcServerSub}
              </span>
            </span>
            <span style={{ color: "#c46ef0", fontSize: 22 }}>↗</span>
          </a>
        </RevealDiv>

        {/* X / Twitter */}
        <RevealDiv className="reveal" style={{ transitionDelay: "80ms" }}>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
            style={{
              background: "linear-gradient(135deg,rgba(255,255,255,.05),rgba(196,110,240,.05))",
            }}
          >
            <span
              style={{
                flex: "0 0 auto",
                width: 50,
                height: 50,
                borderRadius: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#15101c",
                border: "1px solid rgba(196,110,240,.3)",
                boxShadow: "0 0 18px rgba(196,110,240,.3)",
              }}
            >
              <XIcon size={22} color="#fff" />
            </span>
            <span style={{ flex: 1 }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Fredoka'",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#f3ecfb",
                }}
              >
                {t.contact.x}
              </span>
              <span
                style={{ display: "block", fontSize: 13, color: "#b6a6cf", marginTop: 2 }}
              >
                {t.contact.xSub}
              </span>
            </span>
            <span style={{ color: "#c46ef0", fontSize: 22 }}>↗</span>
          </a>
        </RevealDiv>
      </div>
    </section>
  );
}
