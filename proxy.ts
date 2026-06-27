import createMiddleware from "next-intl/middleware";

import { routing } from "@/lib/i18n/routing";

/**
 * Handles locale detection (cookie → Accept-Language → defaultLocale) and the
 * `/` → `/{locale}` redirect, and rewrites locale-prefixed requests.
 */
export default createMiddleware(routing);

export const config = {
  // Skip Next internals and any path that looks like a file (has an extension).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
