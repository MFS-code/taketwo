"use client";

import AnimatedSection from "./AnimatedSection";
import { LeafOne } from "./BotanicalElements";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mfserna",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mfserna",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/maboroshi_dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-paper-warm py-24 md:py-32">
      <LeafOne className="animate-drift absolute bottom-12 right-[8%] h-32 w-auto rotate-[12deg] text-sage/15 md:h-48" />

      {/* Notebook margin line */}
      <div className="absolute left-[60px] top-0 hidden h-full w-[1px] bg-sage/20 md:block" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-20">
        <AnimatedSection>
          <span className="font-hand text-3xl text-forest md:text-4xl">
            let&rsquo;s talk
          </span>
          <div className="mt-1 h-[1px] w-16 bg-sage" />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-text-secondary md:text-base">
            International student from Spain at UT Austin. Always open to
            interesting conversations and opportunities.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-10 flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} profile (opens in new tab)`}
                className="group flex items-center gap-2.5 border border-warm-gray/40 px-5 py-3 text-text-secondary transition-all duration-200 hover:border-sage hover:text-forest"
              >
                {link.icon}
                <span className="font-hand text-base">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={350}>
          <div className="mt-20 flex items-center justify-between border-t border-warm-gray/30 pt-6">
            <span className="font-sans text-xs text-text-tertiary">
              © {new Date().getFullYear()} Miguel F. Serna
            </span>
            <span className="font-hand text-base text-sage">
              drawn by hand, built with care
            </span>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
