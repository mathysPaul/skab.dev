import type { Locale } from "@/lib/i18n/locale";

/**
 * A textual value carried in every supported locale. Content sources store
 * `Localized<string>` (or `Localized<string[]>`); the source resolves them
 * down to a plain value for the requested locale before returning a DTO.
 * Bilingual shapes never leave the data layer.
 */
export type Localized<T> = Record<Locale, T>;

/** Resolve a localized value to the plain value for the given locale. */
export function resolve<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
