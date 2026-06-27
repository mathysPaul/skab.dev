import { getTranslations } from "next-intl/server";

import { Link } from "@/lib/i18n/navigation";

async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="flex h-16 items-center justify-between border-t border-line px-6 sm:h-20 sm:px-[52px]">
      <Link href="/" className="font-display text-2xl font-bold text-ink transition-colors hover:text-brand">
        Mathys
      </Link>
      <span className="font-mono text-xs text-muted-ink">{t("copyright")}</span>
    </footer>
  );
}

export { Footer };
