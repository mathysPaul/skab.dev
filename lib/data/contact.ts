export interface ContactLink {
  label: string;
  value: string;
  href: string;
  /** Highlighted (filled) link — the preferred way to reach me. */
  primary: boolean;
}

export interface MetaRow {
  label: string;
  value: string;
}

export const contactLinks: ContactLink[] = [
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
];

export const meta: MetaRow[] = [
  { label: "LOCALISATION", value: "Chimay, Belgique" },
  { label: "LANGUES", value: "Français · Anglais (B2) · Japonais (A1)" },
  { label: "RECHERCHE", value: "Dev full-stack · UI/UX" },
];
