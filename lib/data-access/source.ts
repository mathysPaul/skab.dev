import type { Locale } from "@/lib/i18n/locale";

import type { About, Contact, Experience, Project, StackCategory } from "./types";

/**
 * Backend-ready seam over the content sources. The current implementation reads
 * bilingual static sources and resolves them per locale; a future one can swap
 * to a real API/DB without touching the components.
 */
export interface ContentSource {
  getExperiences(locale: Locale): Promise<Experience[]>;
  getProjects(locale: Locale): Promise<Project[]>;
  getAbout(locale: Locale): Promise<About>;
  getStack(locale: Locale): Promise<StackCategory[]>;
  getContact(locale: Locale): Promise<Contact>;
}
