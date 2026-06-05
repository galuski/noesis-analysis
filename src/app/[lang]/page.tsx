import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Services from "@/components/layout/Services";
import Contact from "@/components/layout/Contact";
import FlashlightReveal from "@/components/ui/FlashlightReveal";
import ActiveSectionObserver from "@/components/ui/ActiveSectionObserver";

import { getDictionary } from "@/getDictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "es" | "it" }>; // הגדרת ה-params כ-Promise
}) {
  
  // התיקון: חילוץ השפה
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <ActiveSectionObserver />

      <section id="hero">
        <FlashlightReveal>
          <Hero dict={dict} /> 
        </FlashlightReveal>
      </section>

      <section id="about">
        <About dict={dict} />
      </section>

      <section id="services">
        <Services dict={dict} />
      </section>

      <section id="contact">
        <Contact dict={dict.contact} />
      </section>
    </>
  );
}