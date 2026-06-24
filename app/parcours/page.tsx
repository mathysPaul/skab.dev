import { ExperienceItem } from "@/components/experience-item";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/data/experiences";

export default function ParcoursPage() {
  return (
    <>
      <header className="px-6 pb-3 pt-14 sm:px-[52px]">
        <SectionHeading as="h1" eyebrow="Expérience" title="Parcours" />
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-body">
          Sept expériences en startup, ERP et consulting — du plus récent au plus ancien.
        </p>
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
