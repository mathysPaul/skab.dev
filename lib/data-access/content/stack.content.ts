import type { Localized } from "./bilingual";

/**
 * Bilingual stack source. `name` and `logo` are locale-agnostic; the category
 * `label` and each item's `note` carry both locales.
 */
export interface TechSource {
  name: string;
  note: Localized<string>;
  logo: string | null;
}

export interface StackCategorySource {
  label: Localized<string>;
  items: TechSource[];
}

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const S = "https://cdn.simpleicons.org/";

export const stackContent: StackCategorySource[] = [
  {
    label: { fr: "LANGAGES", en: "LANGUAGES" },
    items: [
      {
        name: "JavaScript",
        note: { fr: "Langage web — partout", en: "The web language — everywhere" },
        logo: D + "javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        note: { fr: "JavaScript typé", en: "Typed JavaScript" },
        logo: D + "typescript/typescript-original.svg",
      },
      {
        name: "Python",
        note: { fr: "Back, data, scraping", en: "Back end, data, scraping" },
        logo: D + "python/python-original.svg",
      },
      {
        name: "Java",
        note: {
          fr: "Programmation orientée objet",
          en: "Object-oriented programming",
        },
        logo: D + "java/java-original.svg",
      },
      {
        name: "C",
        note: { fr: "Bases & algorithmie", en: "Fundamentals & algorithms" },
        logo: D + "c/c-original.svg",
      },
      {
        name: "C++",
        note: { fr: "Programmation système", en: "Systems programming" },
        logo: D + "cplusplus/cplusplus-original.svg",
      },
      {
        name: "PHP",
        note: { fr: "Back web", en: "Web back end" },
        logo: D + "php/php-original.svg",
      },
      {
        name: "Haxe",
        note: { fr: "Cross-platform — Talos", en: "Cross-platform — Talos" },
        logo: D + "haxe/haxe-original.svg",
      },
    ],
  },
  {
    label: { fr: "FRONT & MOBILE", en: "FRONT & MOBILE" },
    items: [
      {
        name: "React",
        note: { fr: "Front — interfaces", en: "Front end — interfaces" },
        logo: D + "react/react-original.svg",
      },
      {
        name: "Next.js",
        note: { fr: "Framework React", en: "React framework" },
        logo: D + "nextjs/nextjs-original.svg",
      },
      {
        name: "Svelte",
        note: { fr: "Front — Fixee.ai", en: "Front end — Fixee.ai" },
        logo: D + "svelte/svelte-original.svg",
      },
      {
        name: "Flutter",
        note: { fr: "Mobile — GiveActions", en: "Mobile — GiveActions" },
        logo: D + "flutter/flutter-original.svg",
      },
      {
        name: "Sass",
        note: { fr: "Styles — Talos", en: "Styling — Talos" },
        logo: D + "sass/sass-original.svg",
      },
    ],
  },
  {
    label: { fr: "BACK & DONNÉES", en: "BACK & DATA" },
    items: [
      {
        name: "Flask",
        note: { fr: "API Python — Saper Vedere", en: "Python API — Saper Vedere" },
        logo: D + "flask/flask-original.svg",
      },
      {
        name: "Express.js",
        note: { fr: "API Node", en: "Node API" },
        logo: D + "express/express-original.svg",
      },
      {
        name: "FeathersJS",
        note: { fr: "Temps réel — Fixee.ai", en: "Real time — Fixee.ai" },
        logo: null,
      },
      {
        name: "PostgreSQL",
        note: { fr: "Base relationnelle", en: "Relational database" },
        logo: D + "postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        note: { fr: "Base NoSQL", en: "NoSQL database" },
        logo: D + "mongodb/mongodb-original.svg",
      },
      {
        name: "Milvus",
        note: { fr: "Base vectorielle — Fixee.ai", en: "Vector database — Fixee.ai" },
        logo: S + "milvus/00A1EA",
      },
      {
        name: "Odoo",
        note: { fr: "ERP — OWL / QWeb", en: "ERP — OWL / QWeb" },
        logo: S + "odoo/714B67",
      },
    ],
  },
  {
    label: { fr: "OUTILS & DESIGN", en: "TOOLS & DESIGN" },
    items: [
      {
        name: "Figma",
        note: { fr: "UI/UX & design system", en: "UI/UX & design system" },
        logo: D + "figma/figma-original.svg",
      },
      {
        name: "Git",
        note: { fr: "Versioning", en: "Version control" },
        logo: D + "git/git-original.svg",
      },
      {
        name: "GitHub",
        note: { fr: "Dépôts & CI", en: "Repositories & CI" },
        logo: D + "github/github-original.svg",
      },
      {
        name: "GitLab",
        note: { fr: "Dépôts & CI", en: "Repositories & CI" },
        logo: D + "gitlab/gitlab-original.svg",
      },
      {
        name: "Docker",
        note: { fr: "Conteneurs & déploiement", en: "Containers & deployment" },
        logo: D + "docker/docker-original.svg",
      },
      {
        name: "Jira",
        note: { fr: "Gestion de projet", en: "Project management" },
        logo: D + "jira/jira-original.svg",
      },
      {
        name: "Trello",
        note: { fr: "Gestion de projet", en: "Project management" },
        logo: S + "trello/0052CC",
      },
      {
        name: "Notion",
        note: { fr: "Docs & organisation", en: "Docs & organization" },
        logo: S + "notion/111111",
      },
    ],
  },
];
