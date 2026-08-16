import type { Metadata } from "next";
import { IBM_Plex_Mono, Source_Sans_3, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMKN 1 Purwokerto | Ruang untuk Tumbuh",
  description:
    "Profil dan informasi resmi SMKN 1 Purwokerto sebagai sekolah vokasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${sourceSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}