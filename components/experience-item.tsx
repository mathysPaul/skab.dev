import { Tag } from "@/components/ui/tag";
import { type Experience } from "@/lib/data-access/types";

/** One entry of the experience timeline (dot + role/company + meta + tags). */
function ExperienceItem({ exp, last = false }: { exp: Experience; last?: boolean }) {
  return (
    <div className={`relative pl-8 ${last ? "" : "border-l-2 border-line pb-9"}`}>
      <span className="absolute -left-[7px] top-1 size-3.5 rounded-full bg-brand shadow-[0_0_0_4px_#fff,0_0_0_6px_rgb(var(--brand-soft))]" />
      <div className="text-[17px] font-bold text-ink">
        {exp.role} · <span className="text-brand">{exp.company}</span>
      </div>
      <div className="my-2 font-mono text-xs text-muted-ink">
        {exp.period} · {exp.place}
      </div>
      <p className="mb-3 max-w-[680px] text-[15px] leading-relaxed text-body">{exp.summary}</p>
      {exp.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </div>
  );
}

export { ExperienceItem };
