/**
 * Resolved, single-locale DTOs handed to components. Every textual field is a
 * plain `string` — the data layer resolves the bilingual sources before
 * returning. Components never see `{ fr, en }`.
 */

export interface Experience {
  company: string;
  role: string;
  /** e.g. "Mars 2025 – Août 2025" */
  period: string;
  /** e.g. "France · Stage" */
  place: string;
  summary: string;
  tags: string[];
}

export interface Project {
  name: string;
  tags: string[];
  desc: string;
  status: string;
  /** Cover image URL, or `null` when no visual is available yet. */
  image: string | null;
}

export interface About {
  /** Intro paragraphs, in display order. */
  paragraphs: string[];
  /** "Ce que j'aime faire" highlights. */
  likes: string[];
}

export interface Tech {
  name: string;
  /** Short context shown in the tooltip. */
  note: string;
  /** Logo URL; `null` falls back to rendered initials. */
  logo: string | null;
}

export interface StackCategory {
  label: string;
  items: Tech[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  /** Highlighted (filled) link — the preferred way to reach me. */
  primary: boolean;
}

export interface ContactMetaRow {
  label: string;
  value: string;
}

export interface Contact {
  links: ContactLink[];
  meta: ContactMetaRow[];
}
