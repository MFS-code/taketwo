"use client";

export function LeafOne({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 190 C60 190 60 10 60 10 C30 30 10 80 15 130 C20 160 40 185 60 190Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 190 C60 190 60 10 60 10 C90 30 110 80 105 130 C100 160 80 185 60 190Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M60 40 L35 55" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 65 L30 80" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 90 L28 108" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 115 L33 132" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 140 L38 155" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 40 L85 55" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 65 L90 80" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 90 L92 108" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 115 L87 132" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 140 L82 155" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

export function BranchOne({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 290 C100 280 98 200 100 100 C101 60 102 30 100 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M100 80 C85 60 55 45 35 50 C55 55 75 65 100 80Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M100 120 C120 95 150 85 170 88 C148 93 125 105 100 120Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M100 160 C80 140 50 135 30 140 C52 143 78 150 100 160Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M100 200 C115 180 145 170 165 175 C143 178 120 188 100 200Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M100 240 C88 225 65 218 48 222 C63 225 82 232 100 240Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SeedPod({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse
        cx="40"
        cy="60"
        rx="25"
        ry="45"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M40 15 L40 105" stroke="currentColor" strokeWidth="0.6" />
      <path d="M18 40 L62 40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
      <path d="M16 60 L64 60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
      <path d="M18 80 L62 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
      <circle cx="40" cy="40" r="2" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="40" cy="60" r="2.5" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="40" cy="80" r="2" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="30" cy="50" r="1.5" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="1.5" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="30" cy="70" r="1.5" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="50" cy="70" r="1.5" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function DimensionLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="10" y1="20" x2="190" y2="20" stroke="currentColor" strokeWidth="0.7" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="0.7" />
      <line x1="190" y1="10" x2="190" y2="30" stroke="currentColor" strokeWidth="0.7" />
      <polygon points="15,18 15,22 25,20" fill="currentColor" opacity="0.5" />
      <polygon points="185,18 185,22 175,20" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function CrosshairPoint({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="0.7" />
      <line x1="20" y1="5" x2="20" y2="35" stroke="currentColor" strokeWidth="0.5" />
      <line x1="5" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function SpiralFragment({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 50 C50 45 55 40 60 40 C68 40 72 48 72 55 C72 68 60 76 48 76 C32 76 24 62 24 48 C24 30 40 20 56 20 C76 20 88 38 88 56"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandDrawnDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 4 C20 3 40 5 60 4 C80 3 100 5 120 4 C140 3 160 5 180 4 C200 3 220 5 240 4 C260 3 280 5 300 4 C320 3 340 5 360 4 C380 3 395 4 400 4"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
