import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathys Paul — Designer UI/UX & développeur full-stack",
  description:
    "Portfolio de Mathys Paul, développeur full-stack et designer UI/UX. Sept expériences en startup, ERP et consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${jakarta.variable} ${spaceMono.variable} ${caveat.variable} antialiased`}
      >
        <SiteShell>
          <Nav />
          {children}
          <Footer />
        </SiteShell>
      </body>
    </html>
  );
}
