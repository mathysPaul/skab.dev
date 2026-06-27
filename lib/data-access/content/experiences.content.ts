import type { Localized } from "./bilingual";

/**
 * Bilingual experience source. Mirrors the resolved `Experience` DTO shape, but
 * every textual field carries both locales. `company` and `tags` stay
 * locale-agnostic (proper nouns / tech names).
 */
export interface ExperienceSource {
  company: string;
  role: Localized<string>;
  period: Localized<string>;
  place: Localized<string>;
  summary: Localized<string>;
  tags: string[];
}

/** Most recent first. Source: portfolio experience blocks. */
export const experiencesContent: ExperienceSource[] = [
  {
    company: "Fixee.ai",
    role: { fr: "Développeur Full-Stack", en: "Full-Stack Developer" },
    period: { fr: "Mars 2025 – Août 2025", en: "March 2025 – August 2025" },
    place: { fr: "France · Stage", en: "France · Internship" },
    summary: {
      fr: "Optimisation de l'assistant intelligent : analyse de bout en bout, identification d'un problème d'architecture de données et migration d'une base relationnelle vers une base vectorielle (Milvus) — temps de réponse divisé par deux. Gestion des rôles et accès pour prestataires externes, écrans techniques et documentation adoptée comme référence interne.",
      en: "Optimized the smart assistant: end-to-end analysis, spotted a data-architecture issue and migrated from a relational database to a vector database (Milvus) — response time cut in half. Built role and access management for external providers, technical screens, and documentation adopted as an internal reference.",
    },
    tags: ["Svelte", "FeathersJS", "PostgreSQL", "Milvus"],
  },
  {
    company: "Ijuno",
    role: { fr: "Designer UI/UX", en: "UI/UX Designer" },
    period: { fr: "Août 2024 – Octobre 2024", en: "August 2024 – October 2024" },
    place: { fr: "Belgique", en: "Belgium" },
    summary: {
      fr: "Refonte complète de l'interface sous Figma et création de la charte graphique. Conduite d'études et de tests d'utilisabilité pour aligner la conception sur les besoins réels, simplification du flux utilisateur et amélioration de l'accessibilité.",
      en: "Complete interface redesign in Figma and creation of the visual identity. Ran research and usability tests to align the design with real needs, simplified the user flow, and improved accessibility.",
    },
    tags: ["Figma", "Recherche UX"],
  },
  {
    company: "Odoo",
    role: { fr: "Développeur Full-Stack", en: "Full-Stack Developer" },
    period: { fr: "Octobre 2023 – Juin 2024", en: "October 2023 – June 2024" },
    place: { fr: "Belgique", en: "Belgium" },
    summary: {
      fr: "Au sein de l'équipe R&D Sales : maintenance et nouvelles fonctionnalités sur le module de fidélité (remise globale par commande, fidélité dans le portail, corrections de bugs). Chaque modification validée par des tests (unitaires, intégration, interface) avant mise en production.",
      en: "Within the Sales R&D team: maintenance and new features on the loyalty module (order-wide discounts, loyalty in the portal, bug fixes). Every change was validated by tests (unit, integration, UI) before going to production.",
    },
    tags: ["Odoo · OWL · QWeb", "Python", "JavaScript"],
  },
  {
    company: "Saper Vedere",
    role: { fr: "Développeur Backend", en: "Backend Developer" },
    period: { fr: "Mars 2022 – Juillet 2022", en: "March 2022 – July 2022" },
    place: { fr: "Belgique · Stage", en: "Belgium · Internship" },
    summary: {
      fr: "Collecte et structuration de données (web scraping, API) avec un système de classes pensé pour la maintenance. Extension d'une API REST pour automatiser les imports depuis Dropbox. Refonte de l'API de streaming Twitter en v2 (multiprocessing, requêtes asynchrones, clés en parallèle) pour récupérer les tweets en temps réel à grande échelle.",
      en: "Collected and structured data (web scraping, APIs) with a maintainable class system. Extended a REST API to automate imports from Dropbox. Rebuilt the Twitter streaming API on v2 (multiprocessing, async requests, parallel keys) to fetch tweets in real time at scale.",
    },
    tags: ["Python", "Flask", "MongoDB", "Docker"],
  },
  {
    company: "GiveActions",
    role: { fr: "Développeur Mobile", en: "Mobile Developer" },
    period: {
      fr: "Septembre 2021 – Mars 2022",
      en: "September 2021 – March 2022",
    },
    place: { fr: "Belgique · Stage", en: "Belgium · Internship" },
    summary: {
      fr: "Développement de plusieurs pages (contact, parrainage, classement, magasins partenaires, onboarding) sur une app de dons. Refactorisation du code et des données, contributions UI/UX majoritairement retenues, avec autonomie complète sur certaines pages.",
      en: "Built several pages (contact, referral, leaderboard, partner stores, onboarding) for a donation app. Refactored code and data, with UI/UX contributions mostly adopted and full ownership of some pages.",
    },
    tags: ["Flutter", "Adobe XD"],
  },
  {
    company: "Epitech / IONIS",
    role: {
      fr: "Assistant pédagogique (AER)",
      en: "Teaching Assistant (AER)",
    },
    period: { fr: "Février 2021 – Juillet 2021", en: "February 2021 – July 2021" },
    place: { fr: "Belgique", en: "Belgium" },
    summary: {
      fr: "Accompagnement et encadrement d'étudiants dans la pédagogie par projets : aide à la compréhension de notions techniques, démonstrations concrètes (structures de données en C), débogage de problèmes complexes, encadrement d'activités et notation des projets.",
      en: "Supported and mentored students in project-based learning: helping them grasp technical concepts, hands-on demonstrations (data structures in C), debugging complex problems, running activities, and grading projects.",
    },
    tags: [],
  },
  {
    company: "Talos Health Solutions",
    role: { fr: "DevOps / Développement web", en: "DevOps / Web Development" },
    period: {
      fr: "Juillet 2020 – Novembre 2020",
      en: "July 2020 – November 2020",
    },
    place: { fr: "Belgique · Stage", en: "Belgium · Internship" },
    summary: {
      fr: "Première expérience pro (plateforme web 3D de congrès en ligne) : générateur automatique de certificats PDF à champs dynamiques, installateur multiplateforme (Windows, macOS, Linux) via Docker et Haxe, éditeur de stand intuitif testé auprès d'utilisateurs, en méthode Scrum.",
      en: "First professional experience (a 3D web platform for online conferences): an automatic generator of PDF certificates with dynamic fields, a cross-platform installer (Windows, macOS, Linux) via Docker and Haxe, and an intuitive booth editor tested with users, all in Scrum.",
    },
    tags: ["Haxe", "JavaScript", "SCSS / SASS", "Docker"],
  },
];
