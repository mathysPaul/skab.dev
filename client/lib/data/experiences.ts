export interface Experience {
  company: string;
  role: string;
  period: string;
  /** e.g. "France · Stage" */
  place: string;
  summary: string;
  tags: string[];
}

/** Most recent first. Source: portfolio experience blocks. */
export const experiences: Experience[] = [
  {
    company: "Fixee.ai",
    role: "Développeur Full-Stack",
    period: "Mars 2025 – Août 2025",
    place: "France · Stage",
    summary:
      "Optimisation de l'assistant intelligent : analyse de bout en bout, identification d'un problème d'architecture de données et migration d'une base relationnelle vers une base vectorielle (Milvus) — temps de réponse divisé par deux. Gestion des rôles et accès pour prestataires externes, écrans techniques et documentation adoptée comme référence interne.",
    tags: ["Svelte", "FeathersJS", "PostgreSQL", "Milvus"],
  },
  {
    company: "Ijuno",
    role: "Designer UI/UX",
    period: "Août 2024 – Octobre 2024",
    place: "Belgique",
    summary:
      "Refonte complète de l'interface sous Figma et création de la charte graphique. Conduite d'études et de tests d'utilisabilité pour aligner la conception sur les besoins réels, simplification du flux utilisateur et amélioration de l'accessibilité.",
    tags: ["Figma", "Recherche UX"],
  },
  {
    company: "Odoo",
    role: "Développeur Full-Stack",
    period: "Octobre 2023 – Juin 2024",
    place: "Belgique",
    summary:
      "Au sein de l'équipe R&D Sales : maintenance et nouvelles fonctionnalités sur le module de fidélité (remise globale par commande, fidélité dans le portail, corrections de bugs). Chaque modification validée par des tests (unitaires, intégration, interface) avant mise en production.",
    tags: ["Odoo · OWL · QWeb", "Python", "JavaScript"],
  },
  {
    company: "Saper Vedere",
    role: "Développeur Backend",
    period: "Mars 2022 – Juillet 2022",
    place: "Belgique · Stage",
    summary:
      "Collecte et structuration de données (web scraping, API) avec un système de classes pensé pour la maintenance. Extension d'une API REST pour automatiser les imports depuis Dropbox. Refonte de l'API de streaming Twitter en v2 (multiprocessing, requêtes asynchrones, clés en parallèle) pour récupérer les tweets en temps réel à grande échelle.",
    tags: ["Python", "Flask", "MongoDB", "Docker"],
  },
  {
    company: "GiveActions",
    role: "Développeur Mobile",
    period: "Septembre 2021 – Mars 2022",
    place: "Belgique · Stage",
    summary:
      "Développement de plusieurs pages (contact, parrainage, classement, magasins partenaires, onboarding) sur une app de dons. Refactorisation du code et des données, contributions UI/UX majoritairement retenues, avec autonomie complète sur certaines pages.",
    tags: ["Flutter", "Adobe XD"],
  },
  {
    company: "Epitech / IONIS",
    role: "Assistant pédagogique (AER)",
    period: "Février 2021 – Juillet 2021",
    place: "Belgique",
    summary:
      "Accompagnement et encadrement d'étudiants dans la pédagogie par projets : aide à la compréhension de notions techniques, démonstrations concrètes (structures de données en C), débogage de problèmes complexes, encadrement d'activités et notation des projets.",
    tags: [],
  },
  {
    company: "Talos Health Solutions",
    role: "DevOps / Développement web",
    period: "Juillet 2020 – Novembre 2020",
    place: "Belgique · Stage",
    summary:
      "Première expérience pro (plateforme web 3D de congrès en ligne) : générateur automatique de certificats PDF à champs dynamiques, installateur multiplateforme (Windows, macOS, Linux) via Docker et Haxe, éditeur de stand intuitif testé auprès d'utilisateurs, en méthode Scrum.",
    tags: ["Haxe", "JavaScript", "SCSS / SASS", "Docker"],
  },
];
