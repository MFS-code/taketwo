import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miguel F. Serna",
  description:
    "Software Engineer & Builder. Co-founder at Agent Operations Labs, Campus Lead at Cursor, Ex-Google Intern. International student from Spain at UT Austin.",
  openGraph: {
    title: "Miguel F. Serna",
    description: "Software Engineer & Builder",
    url: "https://mfserna.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel F. Serna",
    description: "Software Engineer & Builder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} ${caveat.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
