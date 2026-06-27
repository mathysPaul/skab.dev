import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SectionHeading } from "@/components/section-heading";
import { getContact } from "@/lib/data-access";
import { type Locale } from "@/lib/i18n/locale";
import { cn } from "@/lib/utils";

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  // Opt the page into static rendering (next-intl requires this per segment).
  setRequestLocale(locale);

  const t = await getTranslations("contact");
  const contact = await getContact(locale);

  return (
    <>
      <header className="px-6 pb-3 pt-14 sm:px-[52px]">
        <SectionHeading as="h1" eyebrow={t("eyebrow")} title={t("title")} />
        <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-body">{t("intro")}</p>
      </header>

      <section className="grid gap-8 px-6 pb-16 pt-10 sm:px-[52px] lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        {/* Contact links */}
        <div className="flex flex-col gap-3.5">
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between rounded-[18px] border border-line bg-surface-soft px-6 py-5 transition-colors hover:border-brand"
            >
              <span>
                <span className="mb-1 block font-mono text-xs tracking-wide text-muted-ink">{link.label}</span>
                <span className="text-lg font-semibold text-ink">{link.value}</span>
              </span>
              <span
                aria-hidden
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full",
                  link.primary ? "bg-brand text-white" : "border border-line bg-white text-ink",
                )}
              >
                <ArrowUpRight className="size-[18px]" />
              </span>
            </a>
          ))}
        </div>

        {/* Meta card */}
        <div className="rounded-[22px] bg-brand-soft p-7">
          <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <span aria-hidden className="size-2.5 rounded-full bg-success" />
            {t("availability")}
          </div>
          {contact.meta.map((row) => (
            <div key={row.label} className="mb-5 last:mb-0">
              <p className="mb-1.5 font-mono text-xs tracking-wide text-muted-ink">{row.label}</p>
              <p className="text-base font-semibold text-ink">{row.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
