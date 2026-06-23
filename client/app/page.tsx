import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { TechGrid } from "@/components/tech-grid";
import { ExperienceItem } from "@/components/experience-item";
import { experiences } from "@/lib/data/experiences";
import { projects } from "@/lib/data/projects";

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[15px] font-semibold text-brand"
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="top"
        className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#ecedfb] via-[#f2f1fb] to-white px-6 py-16 text-center md:min-h-[calc(100vh-88px)]"
      >
        <div className="relative z-10">
          <p className="font-mono text-[13px] tracking-[3px] text-brand">
            PORTFOLIO — 2026
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Mathys Paul
          </h1>
          <p className="mt-3.5 text-lg font-medium text-body">
            Designer UI/UX &amp; développeur full-stack
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Contactez-moi
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        {/* Fuji in the same column as the text, pulled up with a negative margin
            so it tucks under the heading (over its empty sky area) without the
            text colliding with the mountain. */}
        <Image
          src="/fuji-line.png"
          alt=""
          aria-hidden
          width={3457}
          height={1487}
          priority
          className="pointer-events-none -mt-8 h-auto w-full max-w-[1100px] object-contain opacity-90 sm:-mt-12"
        />

        {/* Scroll indicator to next section */}
        <a
          href="#projets"
          aria-label="Aller à la section suivante"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-brand/70 transition-colors hover:text-brand"
        >
          <ChevronDown className="size-7 animate-bounce" />
        </a>
      </section>

      {/* PROJETS (preview) */}
      <section id="projets" className="scroll-mt-6 px-6 py-16 sm:px-[52px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="TRAVAUX" title="Projets en cours" />
          <ArrowLink href="/projets">Tous les projets</ArrowLink>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.name}
              href="/projets"
              className="group relative block aspect-[4/5] overflow-hidden rounded-card shadow-[0_18px_40px_-22px_rgba(78,72,160,0.5)] transition-transform hover:-translate-y-1.5"
            >
              {p.image ? (
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-soft to-[#e3e6fb]">
                  <span className="font-mono text-xs text-ink/40">Visuel à venir</span>
                </div>
              )}
              <Badge variant="neutral" className="absolute left-3.5 top-3.5">
                {p.status}
              </Badge>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1a183a]/85 via-transparent to-transparent p-5">
                <div className="mb-3 flex gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/20 px-2.5 py-1 font-mono text-[10.5px] text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="pr-12 text-xl font-bold text-white">{p.name}</h3>
                <p className="mr-12 mt-1 text-[13px] leading-relaxed text-white/80">
                  {p.desc}
                </p>
              </div>
              <span className="absolute bottom-4 right-4 z-[2] flex size-9 items-center justify-center rounded-full bg-white/95 text-ink shadow-md">
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:rotate-45" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* À PROPOS (preview) */}
      <section className="grid grid-cols-1 items-center gap-12 px-6 py-16 sm:px-[52px] lg:grid-cols-[0.85fr_1.15fr]">
        <div
          className="flex h-[300px] items-center justify-center rounded-card shadow-[0_20px_46px_-26px_rgba(78,72,160,0.45)]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,#cdd1f0 0 14px,#dadcf4 14px 28px)",
          }}
        >
          <span className="font-mono text-xs text-ink/40">photo / illustration</span>
        </div>
        <div>
          <SectionHeading eyebrow="À PROPOS" title="Les deux bouts de la chaîne" />
          <p className="mt-5 text-base leading-[1.75] text-body">
            {
              "Développeur full-stack et designer, j'aime comprendre un besoin, dessiner l'interface, puis la construire. Sept expériences en startup, ERP et consulting m'ont appris à livrer vite et proprement, en équipe agile."
            }
          </p>
          <div className="mt-6">
            <ArrowLink href="/a-propos">En savoir plus</ArrowLink>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="px-6 py-16 sm:px-[52px]">
        <SectionHeading eyebrow="STACK" title="Compétences & outils" className="mb-8" />
        <TechGrid />
      </section>

      {/* PARCOURS (preview) */}
      <section className="px-6 py-16 sm:px-[52px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="EXPÉRIENCE" title="Parcours récent" />
          <ArrowLink href="/parcours">Tout le parcours</ArrowLink>
        </div>
        <div className="pl-1">
          {experiences.slice(0, 2).map((exp, i, arr) => (
            <ExperienceItem key={exp.company} exp={exp} last={i === arr.length - 1} />
          ))}
        </div>
      </section>

      {/* CONTACT (CTA) */}
      <section className="px-6 py-16 sm:px-[52px]">
        <div className="rounded-card bg-brand-soft px-8 py-14 text-center sm:px-12">
          <p className="font-mono text-[13px] tracking-[2px] text-brand">CONTACT</p>
          <h2 className="mt-3.5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Travaillons ensemble.
          </h2>
          <p className="mx-auto mt-3 max-w-[440px] text-base leading-relaxed text-body">
            Disponible pour un poste à partir de 2026. Écris-moi pour échanger sur
            un projet ou une opportunité.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Me contacter
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:mathyspaul14@gmail.com">Envoyer un email</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
