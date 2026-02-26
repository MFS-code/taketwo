"use client";

import AnimatedSection from "./AnimatedSection";
import { HandDrawnDivider } from "./BotanicalElements";

interface Position {
  role: string;
  company: string;
  period: string;
  url?: string;
  note?: string;
}

const positions: Position[] = [
  {
    role: "Co-founder",
    company: "Agent Operations Labs",
    period: "Present",
    url: "https://agentops.sh/",
    note: "building",
  },
  {
    role: "Campus Lead",
    company: "Cursor",
    period: "Present",
    note: "leading",
  },
  {
    role: "Software Engineering Intern",
    company: "Google",
    period: "Past",
  },
  {
    role: "Events Director",
    company: "SPARK Magazine",
    period: "Past",
  },
  {
    role: "Back-end Engineering Intern",
    company: "Ouro",
    period: "Past",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-paper-warm py-24 md:py-32">
      {/* Notebook margin line */}
      <div className="absolute left-[60px] top-0 hidden h-full w-[1px] bg-sage/20 md:block" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-20">
        <AnimatedSection>
          <span className="font-hand text-3xl text-forest md:text-4xl">
            experience
          </span>
          <div className="mt-1 h-[1px] w-16 bg-sage" />
        </AnimatedSection>

        <div className="mt-12 space-y-0">
          {positions.map((pos, i) => (
            <AnimatedSection key={pos.company + pos.role} delay={i * 80}>
              <div className="group relative grid items-start gap-2 border-b border-warm-gray/30 py-6 md:grid-cols-[100px_1fr_auto] md:gap-6">
                <span className="font-hand text-base text-warm-gray">
                  {pos.period === "Present" ? "now" : "prev"}
                </span>

                <div>
                  <h3 className="font-sans text-base font-bold text-text-primary md:text-lg">
                    {pos.role}
                  </h3>
                  {pos.url ? (
                    <a
                      href={pos.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-text-tertiary transition-colors duration-200 hover:text-forest"
                    >
                      {pos.company}&nbsp;↗
                    </a>
                  ) : (
                    <span className="font-sans text-sm text-text-tertiary">
                      {pos.company}
                    </span>
                  )}
                </div>

                {pos.note && (
                  <span className="hidden font-hand text-base text-sage md:block">
                    ← {pos.note}
                  </span>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={positions.length * 80 + 100}>
          <HandDrawnDivider className="mx-auto mt-16 w-48 text-warm-gray/40 md:w-72" />
        </AnimatedSection>
      </div>
    </section>
  );
}
