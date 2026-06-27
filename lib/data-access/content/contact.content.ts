import type { Localized } from "./bilingual";

/**
 * Bilingual contact source. Link labels (EMAIL, LINKEDIN…) and machine values
 * (`value`, `href`) are locale-agnostic; the meta rows carry both locales.
 */
export interface ContactLinkSource {
  label: string;
  value: string;
  href: string;
  /** Highlighted (filled) link — the preferred way to reach me. */
  primary: boolean;
}

export interface ContactMetaRowSource {
  label: Localized<string>;
  value: Localized<string>;
}

export interface ContactSource {
  links: ContactLinkSource[];
  meta: ContactMetaRowSource[];
}

export const contactContent: ContactSource = {
  links: [
    {
      label: "EMAIL",
      value: "mathyspaul14@gmail.com",
      href: "mailto:mathyspaul14@gmail.com",
      primary: true,
    },
    { label: "LINKEDIN", value: "/in/mathys-paul", href: "#", primary: false },
    {
      label: "GITHUB",
      value: "github.com/mathysPaul",
      href: "#",
      primary: false,
    },
  ],
  meta: [
    {
      label: { fr: "LOCALISATION", en: "LOCATION" },
      value: { fr: "Chimay, Belgique", en: "Chimay, Belgium" },
    },
    {
      label: { fr: "LANGUES", en: "LANGUAGES" },
      value: {
        fr: "Français · Anglais (B2) · Japonais (A1)",
        en: "French · English (B2) · Japanese (A1)",
      },
    },
    {
      label: { fr: "RECHERCHE", en: "LOOKING FOR" },
      value: {
        fr: "Dev full-stack · UI/UX",
        en: "Full-stack dev · UI/UX",
      },
    },
  ],
};
