import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { Urbanist, Montserrat } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/layout/Header";

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

export const metadata: Metadata = {
  title: "Noesis Analysis",
  description: "Risk analysis and applied intelligence",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${montserrat.variable}`}>
      <body>
        <LanguageProvider>
        <Header />
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
