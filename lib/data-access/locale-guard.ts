import { type Locale, locales } from "@/lib/i18n/locale";

/**
 * Returns `true` when `value` is a supported locale ("fr" | "en"), and narrows
 * its type to {@link Locale} (type guard). API routes use it to reject an
 * unknown `[locale]` segment before querying the data layer. It checks the
 * locale list directly, keeping the data layer independent from next-intl.
 */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
