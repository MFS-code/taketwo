"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-paper px-6 md:px-20">
      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="relative inline-block">
          {/* Tree */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            <Image
              src="/images/tree-cutout.png"
              alt="Ink drawing of a tree"
              width={518}
              height={672}
              className="h-auto w-[280px] md:w-[400px] lg:w-[460px]"
              priority
            />
          </div>

          {/* Name */}
          <div
            className="absolute z-20"
            style={{
              left: "72%",
              top: "62%",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            <h1
              className="whitespace-nowrap font-hand text-ink"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                lineHeight: 1,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition:
                  "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              Miguel F. Serna
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
