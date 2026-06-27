import type { Locale } from "@/lib/i18n/locale";

import { aboutContent } from "./content/about.content";
import { resolve } from "./content/bilingual";
import { contactContent } from "./content/contact.content";
import { experiencesContent } from "./content/experiences.content";
import { projectsContent } from "./content/projects.content";
import { stackContent } from "./content/stack.content";
import type { ContentSource } from "./source";
import type { About, Contact, Experience, Project, StackCategory } from "./types";

/**
 * Static implementation of {@link ContentSource}. Reads the bilingual
 * content sources and resolves each textual field down to the requested locale,
 * so the returned DTOs are mono-locale and never expose `{ fr, en }` shapes.
 *
 * This is the swappable seam: a future source can hit a real API/DB while
 * keeping the same contract and DTOs.
 */
export const staticContentSource: ContentSource = {
  getExperiences(locale: Locale): Promise<Experience[]> {
    const experiences = experiencesContent.map((source) => ({
      company: source.company,
      role: resolve(source.role, locale),
      period: resolve(source.period, locale),
      place: resolve(source.place, locale),
      summary: resolve(source.summary, locale),
      tags: source.tags,
    }));

    return Promise.resolve(experiences);
  },

  getProjects(locale: Locale): Promise<Project[]> {
    const projects = projectsContent.map((source) => ({
      name: resolve(source.name, locale),
      tags: source.tags,
      desc: resolve(source.desc, locale),
      status: resolve(source.status, locale),
      image: source.image,
    }));

    return Promise.resolve(projects);
  },

  getAbout(locale: Locale): Promise<About> {
    const about: About = {
      paragraphs: resolve(aboutContent.paragraphs, locale),
      likes: resolve(aboutContent.likes, locale),
    };

    return Promise.resolve(about);
  },

  getStack(locale: Locale): Promise<StackCategory[]> {
    const stack = stackContent.map((category) => ({
      label: resolve(category.label, locale),
      items: category.items.map((item) => ({
        name: item.name,
        note: resolve(item.note, locale),
        logo: item.logo,
      })),
    }));

    return Promise.resolve(stack);
  },

  getContact(locale: Locale): Promise<Contact> {
    const contact: Contact = {
      links: contactContent.links.map((link) => ({ ...link })),
      meta: contactContent.meta.map((row) => ({
        label: resolve(row.label, locale),
        value: resolve(row.value, locale),
      })),
    };

    return Promise.resolve(contact);
  },
};
