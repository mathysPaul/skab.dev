import { getTranslations, setRequestLocale } from "next-intl/server";

import { ExperienceItem } from "@/components/experience-item";
import { SectionHeading } from "@/components/section-heading";
import { getExperiences } from "@/lib/data-access";
import { type Locale } from "@/lib/i18n/locale";

export default async function CareerPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  // Opt the page into static rendering (next-intl requires this per segment).
  setRequestLocale(locale);

  const t = await getTranslations("career");
  const experiences = await getExperiences(locale);

  return (
    <>
      <header className="px-6 pb-3 pt-14 sm:px-[52px]">
        <SectionHeading as="h1" eyebrow={t("eyebrow")} title={t("title")} />
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-body">{t("intro")}</p>
      </header>

      <section className="px-6 pb-14 pt-10 sm:px-[52px]">
        <div className="pl-1">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.company} exp={exp} last={i === experiences.length - 1} />
          ))}
        </div>
      </section>
    </>
  );
}
