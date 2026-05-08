import Image from "next/image";
import styles from "./styles/pages/page.module.css";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Services from "@/components/layout/Services";
import Contact from "@/components/layout/Contact";
import FlashlightReveal from "@/components/ui/FlashlightReveal";

export default function Home() {
  return (
    <>
      <FlashlightReveal>
        <Hero />
      </FlashlightReveal>
      <About />
      <FlashlightReveal>
        <Services />
      </FlashlightReveal>
      <Contact />
    </>
  );
}
