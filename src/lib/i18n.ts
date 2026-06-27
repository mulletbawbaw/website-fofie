import type { Translation } from "@/types";

export const PT: Translation = {
  nav: {
    links: [
      { label: "Início", href: "#topo" },
      { label: "Comissões", href: "#comissoes" },
      { label: "Pedido", href: "#pedido" },
      { label: "Galeria", href: "#galeria" },
      { label: "Contato", href: "#contato" },
      { label: "Termos", href: "#termos" },
    ],
    cta: "Pedir",
  },
  hero: {
    badge: "Comissões abertas",
    tagline:
      "Arte fofa com um toque sombrio — personagens, ícones e ilustrações feitos com carinho e um pouquinho de escuridão.",
    ctaPrimary: "Ver comissões",
    ctaSecondary: "Pedir no Discord",
  },
  comm: {
    eyebrow: "Tabela de preços",
    title: "Comissões",
    note: "Valores a partir de — o preço final pode variar conforme a quantidade de detalhes e a complexidade. Pagamento via PIX.",
    normalName: "Estilo Normal",
    normalDesc: "Pintura semi-realista, com sombras e brilho.",
    chibiName: "Estilo Chibi",
    chibiDesc: "Versão fofinha e estilizada do seu personagem.",
    chibiNote:
      "O preço pode variar conforme a quantidade de detalhes e complexidade.",
    rows: { icon: "Ícone", bust: "Busto", full: "Corpo inteiro" },
    promoTag: "Promo de abertura",
    chibiTag: "Mais em conta",
    promo:
      "Os 6 primeiros clientes pagam esses valores. Depois disso, corpo inteiro a partir de R$80. O preço pode variar conforme a quantidade de detalhes e complexidade.",
    addonsTitle: "Adicionais",
    payTitle: "Pagamento",
    payText:
      "PIX somente. 50% do valor no início da comissão; o restante após a confirmação do esboço e o início da pintura.",
    payTag1: "50% para começar",
    payTag2: "50% na entrega",
    addons: [
      { label: "Cenário detalhado", price: "+R$20" },
      { label: "+1 personagem", price: "+40%" },
    ],
  },
  order: {
    eyebrow: "Passo a passo",
    title: "Como encomendar",
    steps: [
      { n: "01", title: "Entre no Discord", desc: "Entre no servidor e me chame na DM." },
      { n: "02", title: "Conte sua ideia", desc: "Descreva o personagem e envie referências." },
      { n: "03", title: "Orçamento & esboço", desc: "Te passo o valor e faço o esboço inicial." },
      { n: "04", title: "Pagamento", desc: "50% para começar, 50% após o esboço aprovado." },
      { n: "05", title: "Receba sua arte", desc: "Entrego os arquivos em alta resolução." },
    ],
  },
  gallery: {
    eyebrow: "Portfólio",
    title: "Galeria",
    note: "Uma seleção de trabalhos recentes. Clique para ver em tamanho completo.",
    close: "Fechar",
  },
  contact: {
    eyebrow: "Vamos conversar",
    title: "Contato",
    note: "As comissões são feitas pelo Discord. Me chame por lá ou me siga no X.",
    dcName: "fofie",
    dcStatus: "Disponível para comissões",
    idLabel: "ID de usuário",
    dcAdd: "Adicionar no Discord",
    dcServer: "Entrar no servidor",
    dcServerSub: "comunidade & avisos",
    x: "@fofiexp",
    xSub: "novidades no X",
  },
  tos: {
    eyebrow: "Antes de pedir",
    title: "Termos de serviço",
    note: "Ao me comissionar, você concorda com os termos abaixo.",
    items: [
      "Pagamento via PIX, em reais (R$): 50% no início e 50% após o esboço aprovado.",
      "Eu faço: personagens originais (OCs), fanart, chibis e ícones.",
      "Posso recusar pedidos com conteúdo de ódio, gore extremo ou NSFW pesado.",
      "Pequenas revisões no esboço são permitidas; mudanças grandes após a pintura podem ter custo extra.",
      "O prazo varia conforme a fila — eu aviso o andamento por DM.",
      "A arte é para uso pessoal; uso comercial deve ser combinado antes.",
      "Posso postar a arte finalizada no meu portfólio e redes sociais.",
      "Reembolso: total antes do esboço; após o início da pintura, apenas parcial.",
    ],
  },
  footer: {
    tagline: "Feito com carinho por fofie.",
    rights: "© 2026 fofie · todos os direitos reservados",
    back: "voltar ao topo",
  },
};

export const EN: Translation = {
  nav: {
    links: [
      { label: "Home", href: "#topo" },
      { label: "Commissions", href: "#comissoes" },
      { label: "Order", href: "#pedido" },
      { label: "Gallery", href: "#galeria" },
      { label: "Contact", href: "#contato" },
      { label: "Terms", href: "#termos" },
    ],
    cta: "Order",
  },
  hero: {
    badge: "Commissions open",
    tagline:
      "Cute art with a dark twist — characters, icons and illustrations made with love and a little bit of darkness.",
    ctaPrimary: "View commissions",
    ctaSecondary: "Order on Discord",
  },
  comm: {
    eyebrow: "Pricing",
    title: "Commissions",
    note: "Prices starting from — the final price may vary with the amount of detail and complexity. Payment via PIX.",
    normalName: "Normal Style",
    normalDesc: "Semi-realistic painting with shading and glow.",
    chibiName: "Chibi Style",
    chibiDesc: "A cute, stylized version of your character.",
    chibiNote:
      "Price may vary depending on the amount of detail and complexity.",
    rows: { icon: "Icon", bust: "Bust", full: "Full body" },
    promoTag: "Launch promo",
    chibiTag: "More affordable",
    promo:
      "The first 6 clients pay these prices. After that, full body starts at R$80.",
    addonsTitle: "Add-ons",
    payTitle: "Payment",
    payText:
      "PIX only. 50% upfront at the start of the commission; the rest after the sketch is confirmed and painting begins.",
    payTag1: "50% to start",
    payTag2: "50% on delivery",
    addons: [
      { label: "Detailed background", price: "+R$20" },
      { label: "+1 character", price: "+40%" },
    ],
  },
  order: {
    eyebrow: "Step by step",
    title: "How to order",
    steps: [
      { n: "01", title: "Join the Discord", desc: "Hop in the server and DM me." },
      { n: "02", title: "Share your idea", desc: "Describe the character and send references." },
      { n: "03", title: "Quote & sketch", desc: "I send the price and do the first sketch." },
      { n: "04", title: "Payment", desc: "50% to start, 50% after the sketch is approved." },
      { n: "05", title: "Get your art", desc: "I deliver the files in high resolution." },
    ],
  },
  gallery: {
    eyebrow: "Portfolio",
    title: "Gallery",
    note: "A selection of recent work. Click to view full size.",
    close: "Close",
  },
  contact: {
    eyebrow: "Let's talk",
    title: "Contact",
    note: "Commissions happen on Discord. Message me there or follow me on X.",
    dcName: "fofie",
    dcStatus: "Available for commissions",
    idLabel: "User ID",
    dcAdd: "Add on Discord",
    dcServer: "Join the server",
    dcServerSub: "community & updates",
    x: "@fofiexp",
    xSub: "updates on X",
  },
  tos: {
    eyebrow: "Before you ask",
    title: "Terms of service",
    note: "By commissioning me, you agree to the terms below.",
    items: [
      "Payment via PIX in reais (R$): 50% upfront and 50% after the sketch is approved.",
      "I draw: original characters (OCs), fanart, chibis and icons.",
      "I may decline requests with hateful content, extreme gore or heavy NSFW.",
      "Small sketch revisions are fine; major changes after painting may cost extra.",
      "Turnaround depends on the queue — I keep you posted via DM.",
      "Art is for personal use; commercial use must be agreed beforehand.",
      "I may post the finished art in my portfolio and social media.",
      "Refunds: full before the sketch; after painting starts, partial only.",
    ],
  },
  footer: {
    tagline: "Made with love by fofie.",
    rights: "© 2026 fofie · all rights reserved",
    back: "back to top",
  },
};

export const TRANSLATIONS = { pt: PT, en: EN } as const;

export const GALLERY_IMAGES = [
  { src: "/images/IMG_4923.png", alt: "Full body — coleção" },
  { src: "/images/21_Sem_Titulo_20260525133940.png", alt: "Bruxa" },
  { src: "/images/IMG_4916.png", alt: "Personagem na praia" },
  { src: "/images/4_Sem_Titulo_20260108155420_11zon.png", alt: "Headshot" },
  { src: "/images/IMG_4919.png", alt: "Cena de jantar" },
  { src: "/images/if_20260627170052.png", alt: "Full body" },
  { src: "/images/IMG_4917.png", alt: "Bruxa do guarda-chuva" },
  { src: "/images/1312_Sem_Titulo_20260627160432.png", alt: "Chibi" },
  { src: "/images/IMG_4918.png", alt: "Personagem anthro" },
] as const;

export const DISCORD_ID = "1348349005855199432";
export const DISCORD_SERVER_URL = "https://discord.gg/HNdCkXmvE";
export const DISCORD_USER_URL = "https://discord.com/users/1348349005855199432";
export const TWITTER_URL = "https://x.com/fofiexp?s=11";

export const NORMAL_ROWS = [
  { label: "Ícone", price: "R$25" },
  { label: "Busto", price: "R$35" },
  { label: "Corpo inteiro", price: "R$60" },
] as const;

export const CHIBI_ROWS = [
  { label: "Ícone", price: "R$15" },
  { label: "Busto", price: "R$20" },
  { label: "Corpo inteiro", price: "R$30" },
] as const;
