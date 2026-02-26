"use client";

import AnimatedSection from "./AnimatedSection";
import { CrosshairPoint } from "./BotanicalElements";

const highlights = [
  {
    role: "Co-founder",
    org: "Agent Operations Labs",
    url: "https://agentops.sh/",
  },
  { role: "Campus Lead", org: "Cursor" },
  { role: "Ex–Software Engineering Intern", org: "Google" },
  { role: "Events Director", org: "SPARK Magazine" },
  { role: "Back-end Engineering Intern", org: "Ouro" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-24 md:py-32">
      {/* Notebook margin line */}
      <div className="absolute left-[60px] top-0 hidden h-full w-[1px] bg-sage/20 md:block" />

      <CrosshairPoint className="absolute left-[52px] top-[20%] hidden h-5 w-5 text-sage/30 md:block" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-20">
        <AnimatedSection>
          <span className="font-hand text-3xl text-forest md:text-4xl">
            about me
          </span>
          <div className="mt-1 h-[1px] w-16 bg-sage" />
        </AnimatedSection>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <AnimatedSection delay={100}>
            <div>
              <p
                className="font-sans leading-relaxed text-text-secondary"
                style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}
              >
                International student from Spain studying at UT Austin.
                I build software, co-found companies, and care deeply about
                craft. Currently leading campus efforts for Cursor and
                building at Agent Operations Labs.
              </p>

              <div className="mt-8 border-l border-sage pl-4">
                <p className="font-hand text-lg text-warm-gray">
                  F-1 visa &middot;{" "}
                  <a
                    href="https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage underline decoration-sage/40 underline-offset-2 transition-colors duration-200 hover:text-forest"
                  >
                    Authorized for U.S. work via CPT/OPT
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={item.org} className="group flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-sage transition-colors duration-200 group-hover:bg-forest" />
                  <div>
                    <span className="font-hand text-base text-warm-gray">
                      {item.role}
                    </span>
                    <br />
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-forest"
                      >
                        {item.org}{" "}
                        <span className="inline-block translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="font-sans text-sm font-semibold text-text-primary">
                        {item.org}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
