import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

/**
 * Locale-aware navigation primitives. Use these instead of the ones from
 * `next/link` / `next/navigation` so the active locale prefix is preserved.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
