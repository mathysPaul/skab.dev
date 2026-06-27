import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "./locale";

/**
 * Routing config shared by the middleware and the navigation helpers.
 * `localePrefix: "always"` forces an explicit `/fr` or `/en` on every URL;
 * the root `/` is redirected by the middleware based on the detected locale.
 */
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
