import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { getProjects } from "@/lib/data-access";
import { type Locale } from "@/lib/i18n/locale";
import { Link } from "@/lib/i18n/navigation";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  // Opt the page into static rendering (next-intl requires this per segment).
  setRequestLocale(locale);

  const t = await getTranslations("projects");
  const tCommon = await getTranslations("common");
  const projects = await getProjects(locale);

  return (
    <>
      <header className="px-6 pb-3 pt-14 sm:px-[52px]">
        <SectionHeading as="h1" eyebrow={t("eyebrow")} title={t("title")} />
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-body">{t("intro")}</p>
      </header>

      <section className="flex flex-col gap-7 px-6 pb-16 pt-10 sm:px-[52px]">
        {projects.map((project, i) => (
          <Card key={project.name} className="grid items-center gap-8 p-6 lg:grid-cols-2">
            <div
              className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br from-brand-soft to-[#e3e6fb] ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              {project.image ? (
                <Image src={project.image} alt={project.name} fill className="object-cover" />
              ) : (
                <span className="font-mono text-xs text-ink/40">{tCommon("imageComingSoon")}</span>
              )}
            </div>
            <div>
              <Badge variant="soft">{project.status}</Badge>
              <h2 className="mb-2.5 mt-3.5 text-2xl font-bold text-ink">{project.name}</h2>
              <p className="mb-4 text-[15px] leading-relaxed text-body">{project.desc}</p>
              <div className="mb-[18px] flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <Link
                href="#"
                className="group inline-flex items-center gap-2.5 text-[15px] font-semibold text-ink transition-colors hover:text-brand"
              >
                {t("viewProject")}
                <span className="flex size-8 items-center justify-center rounded-full bg-brand text-white">
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:rotate-45" />
                </span>
              </Link>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
}
