import { getTranslations, setRequestLocale } from "next-intl/server";

import { SectionHeading } from "@/components/section-heading";
import { TechGrid } from "@/components/tech-grid";
import { getStack } from "@/lib/data-access";
import { type Locale } from "@/lib/i18n/locale";

export default async function SkillsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  // Opt the page into static rendering (next-intl requires this per segment).
  setRequestLocale(locale);

  const t = await getTranslations("skills");
  const stack = await getStack(locale);

  return (
    <>
      <header className="px-6 pb-3 pt-14 sm:px-[52px]">
        <SectionHeading as="h1" eyebrow={t("eyebrow")} title={t("title")} />
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-body">
          {t("intro")} <span className="font-semibold text-brand">{t("introHighlight")}</span> {t("introSuffix")}
        </p>
      </header>

      <section className="px-6 pb-14 pt-11 sm:px-[52px]">
        <TechGrid stack={stack} />
      </section>

      <section className="px-6 pb-16 sm:px-[52px]">
        <p className="mb-2.5 font-mono text-xs tracking-[1.5px] text-muted-ink">{t("methodsTitle")}</p>
        <p className="text-[15px] leading-relaxed text-body">{t("methods")}</p>
      </section>
    </>
  );
}
