import "./globals.css";
import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Fraunces } from "next/font/google";
import { profile } from "@/lib/data";

// Fraunces with SOFT maxed out gives the chunky Cooper-style 70s display face.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Software engineer in Glasgow building full-stack web and mobile applications with Java, Spring Boot, TypeScript and React.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: profile.name,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EAD5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${fraunces.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
