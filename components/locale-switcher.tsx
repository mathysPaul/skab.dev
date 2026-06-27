"use client";

import { useLocale, useTranslations } from "next-intl";
import * as React from "react";

import { type Locale, locales } from "@/lib/i18n/locale";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * FR/EN language switcher for prefix-based routing. Swaps the active locale
 * while keeping the visitor on the same locale-agnostic pathname (e.g.
 * `/fr/about` → `/en/about`): `usePathname` strips the prefix, and `useRouter`
 * re-adds the target one.
 */
function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("localeSwitcher");
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  function switchTo(locale: Locale) {
    if (locale === activeLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-white p-0.5 font-mono text-[11px]",
        className,
      )}
    >
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchTo(locale)}
            disabled={isPending}
            aria-pressed={isActive}
            aria-label={t(locale === "fr" ? "frFull" : "enFull")}
            className={cn(
              "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
              isActive ? "bg-brand text-white" : "text-body hover:text-brand",
            )}
          >
            {t(locale)}
          </button>
        );
      })}
    </div>
  );
}

export { LocaleSwitcher };
