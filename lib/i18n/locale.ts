/**
 * Supported locales. The order is meaningful: the first entry is the default.
 * Slugs stay in English across locales — only the path prefix changes.
 */
export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";
