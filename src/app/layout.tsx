import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fofie.vercel.app"),
  title: "fofie — Comissões de Arte",
  description:
    "Arte fofa com um toque sombrio — personagens, ícones e ilustrações feitos com carinho.",
  icons: {
    icon: "/images/icone.jpg",
  },
  openGraph: {
    title: "fofie — Comissões de Arte",
    description:
      "Arte fofa com um toque sombrio — personagens, ícones e ilustrações.",
    images: ["/images/icone-completo-fofie.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
