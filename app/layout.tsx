import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import { profile } from "@/lib/data";

const geist = Geist({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={geist.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
