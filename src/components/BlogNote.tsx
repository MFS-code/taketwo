"use client";

import AnimatedSection from "./AnimatedSection";

export default function BlogNote() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-20">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl">
            {/* Notebook-style card */}
            <div
              className="relative bg-paper-light px-8 py-10 shadow-[2px_3px_12px_rgba(0,0,0,0.05)] md:px-12 md:py-14"
              style={{ transform: "rotate(0.5deg)" }}
            >
              {/* Tape */}
              <div className="absolute -top-3 right-8 h-5 w-16 bg-mist/60 shadow-[0_1px_2px_rgba(0,0,0,0.04)]" />

              <span className="font-hand text-2xl text-forest md:text-3xl">
                a note before you continue
              </span>

              <p className="mt-5 font-sans text-sm leading-relaxed text-text-secondary md:text-base">
                I wrote this blog between the ages of 14 and 17. My English
                was still a work in progress and some of the posts are rough.
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-text-secondary md:text-base">
                On the bright side, the fact that I&rsquo;ve been at this for
                so long should tell you something about how much I love this
                stuff.
              </p>

              <a
                href="#"
                className="mt-8 inline-block border border-forest px-6 py-2.5 font-hand text-lg text-forest transition-colors duration-200 hover:bg-forest hover:text-paper-light"
              >
                visit the legacy blog →
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
