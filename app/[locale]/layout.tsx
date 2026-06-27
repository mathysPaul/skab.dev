import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { SiteShell } from "@/components/site-shell";
import { type Locale, locales } from "@/lib/i18n/locale";
import { routing } from "@/lib/i18n/routing";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const SITE_URL = "https://skab.dev";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Opt the segment into static rendering for the active locale.
  setRequestLocale(locale as Locale);

  return (
    <html lang={locale}>
      <body className={`${jakarta.variable} ${spaceMono.variable} ${caveat.variable} antialiased`}>
        <NextIntlClientProvider>
          <SiteShell>
            <Nav />
            {children}
            <Footer />
          </SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
