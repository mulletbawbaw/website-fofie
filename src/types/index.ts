export type Lang = "pt" | "en";

export interface NavLink {
  label: string;
  href: string;
}

export interface PriceRow {
  label: string;
  price: string;
}

export interface Addon {
  label: string;
  price: string;
}

export interface OrderStep {
  n: string;
  title: string;
  desc: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface TosItem {
  n: string;
  text: string;
}

export interface Translation {
  nav: {
    links: NavLink[];
    cta: string;
  };
  hero: {
    badge: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  comm: {
    eyebrow: string;
    title: string;
    note: string;
    normalName: string;
    normalDesc: string;
    chibiName: string;
    chibiDesc: string;
    chibiNote: string;
    rows: { icon: string; bust: string; full: string };
    promoTag: string;
    chibiTag: string;
    promo: string;
    addonsTitle: string;
    payTitle: string;
    payText: string;
    payTag1: string;
    payTag2: string;
    addons: Addon[];
  };
  order: {
    eyebrow: string;
    title: string;
    steps: OrderStep[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    note: string;
    close: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    note: string;
    dcName: string;
    dcStatus: string;
    idLabel: string;
    dcAdd: string;
    dcServer: string;
    dcServerSub: string;
    x: string;
    xSub: string;
  };
  tos: {
    eyebrow: string;
    title: string;
    note: string;
    items: string[];
  };
  footer: {
    tagline: string;
    rights: string;
    back: string;
  };
}
