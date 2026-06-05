import type { Metadata } from "next";
import { Urbanist, Montserrat } from "next/font/google";

import "@/app/styles/globals.css";
import Header from "@/components/layout/Header";
import { UserMsg } from "@/components/ui/UserMsg";
import { WhatsApp } from "@/components/ui/WhatsApp";
import { Footer } from "@/components/layout/Footer";

import { getDictionary } from "@/getDictionary";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

// גם כאן, מחלצים את ה-Promise של ה-params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = "http://localhost:3000";

  return {
    title: "Noesis Analysis",
    description: "Risk analysis and applied intelligence",
    icons: { icon: "/icon.svg" },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        it: `${baseUrl}/it`,
        "x-default": `${baseUrl}/en`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" | "it" }>; // שינינו ל-Promise
}>) {
  // זה התיקון הקריטי! מחכים ל-params ואז מחלצים את השפה
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${urbanist.variable} ${montserrat.variable}`}>
      <body>
        <Header lang={lang} dict={dict} />
        {children}
        <Footer dict={dict.footer} lang={lang} /> <UserMsg />
        <WhatsApp />
      </body>
    </html>
  );
}
