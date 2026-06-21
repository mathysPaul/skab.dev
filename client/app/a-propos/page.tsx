import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const paragraphs = [
  "Développeur full-stack et designer, j'aime comprendre un besoin, dessiner l'interface, puis la construire. Cette double casquette me permet de prendre des décisions produit cohérentes — du wireframe jusqu'au code en production.",
  "Sept expériences en startup, ERP et consulting m'ont appris à livrer vite et proprement, en équipe agile : avec des tests, de la documentation, et le souci constant de l'utilisateur final.",
  "Je cherche aujourd'hui un poste où mêler conception et développement, sur des produits utiles et bien faits.",
];

const likes = [
  "Concevoir des interfaces claires",
  "Construire le produit jusqu'au déploiement",
  "Résoudre des problèmes d'architecture",
  "Travailler en équipe agile",
];

export default function AProposPage() {
  return (
    <>
      <header className="px-6 pb-3 pt-14 sm:px-[52px]">
        <SectionHeading
          as="h1"
          eyebrow="À propos"
          title="Les deux bouts de la chaîne"
        />
      </header>

      <section className="grid items-start gap-12 px-6 pb-14 pt-9 sm:px-[52px] lg:grid-cols-[0.8fr_1.2fr]">
        <div
          className="flex h-[380px] items-center justify-center rounded-3xl shadow-[0_20px_46px_-26px_rgba(78,72,160,0.45)]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #cdd1f0 0 14px, #dadcf4 14px 28px)",
          }}
        >
          <span className="font-mono text-xs text-ink/45">
            photo / illustration
          </span>
        </div>

        <div>
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="mb-[18px] text-[17px] leading-loose text-body"
            >
              {p}
            </p>
          ))}

          <div className="mb-3.5 mt-3 font-mono text-xs tracking-[1.5px] text-muted-ink">
            CE QUE J&apos;AIME FAIRE
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {likes.map((item) => (
              <Card
                key={item}
                className="px-[18px] py-4 text-[15px] font-semibold text-ink"
              >
                {item}
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild>
              <Link href="/contact">Me contacter →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
