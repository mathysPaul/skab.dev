import type { Localized } from "./bilingual";

/**
 * Bilingual project source. `name` and `tags` stay locale-agnostic;
 * `desc` and `status` carry both locales.
 */
export interface ProjectSource {
  name: Localized<string>;
  tags: string[];
  desc: Localized<string>;
  status: Localized<string>;
  /** Cover image. TODO: real project visuals (étape 2 — Réalisations). */
  image: string | null;
}

export const projectsContent: ProjectSource[] = [
  {
    name: { fr: "Projet 01", en: "Project 01" },
    tags: ["UI/UX", "Figma"],
    desc: {
      fr: "Une app web — en cours de conception.",
      en: "A web app — currently being designed.",
    },
    status: { fr: "En cours", en: "In progress" },
    image: null,
  },
  {
    name: { fr: "Projet 02", en: "Project 02" },
    tags: ["Svelte", "API"],
    desc: {
      fr: "Un outil développé pour explorer une idée.",
      en: "A tool built to explore an idea.",
    },
    status: { fr: "En cours", en: "In progress" },
    image: null,
  },
  {
    name: { fr: "Projet 03", en: "Project 03" },
    tags: ["Flutter", "Design"],
    desc: {
      fr: "Prototype mobile en cours de création.",
      en: "A mobile prototype in the making.",
    },
    status: { fr: "En cours", en: "In progress" },
    image: null,
  },
];
