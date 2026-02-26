"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-6 transition-all duration-300 md:px-20 ${
        scrolled
          ? "bg-paper/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-hand text-xl text-ink"
      >
        mfs
      </a>
      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative font-hand text-base text-text-tertiary transition-colors duration-200 hover:text-forest"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-sage transition-all duration-200 group-hover:w-full" />
          </a>
        ))}
      </nav>
    </header>
  );
}
