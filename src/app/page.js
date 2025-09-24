"use client";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import HeroCover from "./components/HeroCover";
import ImageCarousel from "./components/ImageCarousel";
import Projects from "./components/Projects";
import SkillsCarousel from "./components/SkillsCarousel";

export default function Home() {
  return (
    <main>
      <HeroCover src="/assets/portada (1).gif" alt="Portada principal" />
      <div className="container ">
        <About />

        <Projects />
        <SkillsCarousel />
        <ImageCarousel images={[
          { src: "/assets/título.png", alt: "Título" },
          { src: "/assets/imm.jpeg", alt: "Imagen Imm" }
        ]} />

        <ContactForm />
      </div>
    </main>
  );
}
