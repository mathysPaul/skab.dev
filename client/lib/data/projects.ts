export interface Project {
  name: string;
  tags: string[];
  desc: string;
  status: string;
  /** Cover image. TODO: real project visuals (étape 2 — Réalisations). */
  image: string | null;
}

export const projects: Project[] = [
  {
    name: "Projet 01",
    tags: ["UI/UX", "Figma"],
    desc: "Une app web — en cours de conception.",
    status: "En cours",
    image: null,
  },
  {
    name: "Projet 02",
    tags: ["Svelte", "API"],
    desc: "Un outil développé pour explorer une idée.",
    status: "En cours",
    image: null,
  },
  {
    name: "Projet 03",
    tags: ["Flutter", "Design"],
    desc: "Prototype mobile en cours de création.",
    status: "En cours",
    image: null,
  },
];
