import { SectionHeading } from "@/components/section-heading";
import { TechGrid } from "@/components/tech-grid";

export default function CompetencesPage() {
  return (
    <>
      <header className="px-6 pb-3 pt-14 sm:px-[52px]">
        <SectionHeading as="h1" eyebrow="STACK" title="Compétences & outils" />
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-body">
          Langages, frameworks et outils que je maîtrise.{" "}
          <span className="font-semibold text-brand">Survole un logo</span> pour
          voir le détail.
        </p>
      </header>

      <section className="px-6 pb-14 pt-11 sm:px-[52px]">
        <TechGrid />
      </section>

      <section className="px-6 pb-16 sm:px-[52px]">
        <p className="mb-2.5 font-mono text-xs tracking-[1.5px] text-muted-ink">
          MÉTHODES
        </p>
        <p className="text-[15px] leading-relaxed text-body">
          Agile — Scrum &amp; Kanban · Tests &amp; intégration continue ·
          Documentation technique
        </p>
      </section>
    </>
  );
}
