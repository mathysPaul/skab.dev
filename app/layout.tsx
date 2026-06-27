import "./globals.css";

import type { ReactNode } from "react";

/**
 * Root layout kept intentionally minimal: the `<html>`/`<body>` shell lives in
 * `app/[locale]/layout.tsx` so it can set `lang` and the locale-aware providers.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
