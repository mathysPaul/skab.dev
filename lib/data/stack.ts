export interface Tech {
  name: string;
  /** short context shown in the tooltip */
  note: string;
  /** logo URL; when null, initials fallback is rendered */
  logo: string | null;
}

export interface TechGroup {
  label: string;
  items: Tech[];
}

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const S = "https://cdn.simpleicons.org/";

export const stack: TechGroup[] = [
  {
    label: "LANGAGES",
    items: [
      { name: "JavaScript", note: "Langage web — partout", logo: D + "javascript/javascript-original.svg" },
      { name: "TypeScript", note: "JavaScript typé", logo: D + "typescript/typescript-original.svg" },
      { name: "Python", note: "Back, data, scraping", logo: D + "python/python-original.svg" },
      { name: "Java", note: "Programmation orientée objet", logo: D + "java/java-original.svg" },
      { name: "C", note: "Bases & algorithmie", logo: D + "c/c-original.svg" },
      { name: "C++", note: "Programmation système", logo: D + "cplusplus/cplusplus-original.svg" },
      { name: "PHP", note: "Back web", logo: D + "php/php-original.svg" },
      { name: "Haxe", note: "Cross-platform — Talos", logo: D + "haxe/haxe-original.svg" },
    ],
  },
  {
    label: "FRONT & MOBILE",
    items: [
      { name: "React", note: "Front — interfaces", logo: D + "react/react-original.svg" },
      { name: "Next.js", note: "Framework React", logo: D + "nextjs/nextjs-original.svg" },
      { name: "Svelte", note: "Front — Fixee.ai", logo: D + "svelte/svelte-original.svg" },
      { name: "Flutter", note: "Mobile — GiveActions", logo: D + "flutter/flutter-original.svg" },
      { name: "Sass", note: "Styles — Talos", logo: D + "sass/sass-original.svg" },
    ],
  },
  {
    label: "BACK & DONNÉES",
    items: [
      { name: "Flask", note: "API Python — Saper Vedere", logo: D + "flask/flask-original.svg" },
      { name: "Express.js", note: "API Node", logo: D + "express/express-original.svg" },
      { name: "FeathersJS", note: "Temps réel — Fixee.ai", logo: null },
      { name: "PostgreSQL", note: "Base relationnelle", logo: D + "postgresql/postgresql-original.svg" },
      { name: "MongoDB", note: "Base NoSQL", logo: D + "mongodb/mongodb-original.svg" },
      { name: "Milvus", note: "Base vectorielle — Fixee.ai", logo: S + "milvus/00A1EA" },
      { name: "Odoo", note: "ERP — OWL / QWeb", logo: S + "odoo/714B67" },
    ],
  },
  {
    label: "OUTILS & DESIGN",
    items: [
      { name: "Figma", note: "UI/UX & design system", logo: D + "figma/figma-original.svg" },
      { name: "Git", note: "Versioning", logo: D + "git/git-original.svg" },
      { name: "GitHub", note: "Dépôts & CI", logo: D + "github/github-original.svg" },
      { name: "GitLab", note: "Dépôts & CI", logo: D + "gitlab/gitlab-original.svg" },
      { name: "Docker", note: "Conteneurs & déploiement", logo: D + "docker/docker-original.svg" },
      { name: "Jira", note: "Gestion de projet", logo: D + "jira/jira-original.svg" },
      { name: "Trello", note: "Gestion de projet", logo: S + "trello/0052CC" },
      { name: "Notion", note: "Docs & organisation", logo: S + "notion/111111" },
    ],
  },
];
