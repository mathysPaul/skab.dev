import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale } from "./locale";
import { routing } from "./routing";

/**
 * Per-request i18n config consumed by the next-intl plugin. Resolves the active
 * locale from the route segment and loads the matching message bundle.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
