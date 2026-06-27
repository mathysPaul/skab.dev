import { staticContentSource } from "./static-source";

/**
 * Public entry point of the data-access layer. Components and routes import
 * these functions instead of the concrete source, so swapping the backing
 * implementation (API/DB) stays a one-line change here.
 */
const source = staticContentSource;

export const getExperiences = source.getExperiences;
export const getProjects = source.getProjects;
export const getAbout = source.getAbout;
export const getStack = source.getStack;
export const getContact = source.getContact;

export type { About, Contact, ContactLink, ContactMetaRow, Experience, Project, StackCategory, Tech } from "./types";
