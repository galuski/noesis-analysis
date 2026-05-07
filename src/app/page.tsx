import Image from "next/image";
import styles from "./styles/pages/page.module.css";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Services from "@/components/layout/Services";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}
