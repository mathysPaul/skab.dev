import type { Localized } from "./bilingual";

/**
 * Bilingual about source. Each list is stored as a `Localized<string[]>` so the
 * two locales can diverge in wording while keeping the same order.
 */
export interface AboutSource {
  paragraphs: Localized<string[]>;
  likes: Localized<string[]>;
}

export const aboutContent: AboutSource = {
  paragraphs: {
    fr: [
      "Développeur full-stack et designer, j'aime comprendre un besoin, dessiner l'interface, puis la construire. Cette double casquette me permet de prendre des décisions produit cohérentes — du wireframe jusqu'au code en production.",
      "Sept expériences en startup, ERP et consulting m'ont appris à livrer vite et proprement, en équipe agile : avec des tests, de la documentation, et le souci constant de l'utilisateur final.",
      "Je cherche aujourd'hui un poste où mêler conception et développement, sur des produits utiles et bien faits.",
    ],
    en: [
      "A full-stack developer and designer, I like to understand a need, design the interface, then build it. Wearing both hats lets me make coherent product decisions — from wireframe to production code.",
      "Seven roles across startups, ERP, and consulting taught me to ship fast and clean, in agile teams: with tests, documentation, and a constant focus on the end user.",
      "I'm now looking for a role that blends design and development, on useful, well-crafted products.",
    ],
  },
  likes: {
    fr: [
      "Concevoir des interfaces claires",
      "Construire le produit jusqu'au déploiement",
      "Résoudre des problèmes d'architecture",
      "Travailler en équipe agile",
    ],
    en: [
      "Designing clear interfaces",
      "Building the product all the way to deployment",
      "Solving architecture problems",
      "Working in agile teams",
    ],
  },
};
