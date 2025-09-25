"use client";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import DownloadCV from "./components/DownloadCV";
import HeroCover from "./components/HeroCover";
import ImageCarousel from "./components/ImageCarousel";
import Projects from "./components/Projects";
import SkillsCarousel from "./components/SkillsCarousel";

export default function Home() {
  return (
    <main>
      <HeroCover
        src="/assets/presentacion_gt_mej_ca0b60a479 - copia.mp4"
        alt="Portada principal"
      />
      <div className="container ">
        <About />

        <Projects />
        <SkillsCarousel />
      </div>
      <ImageCarousel
        images={[
          { src: "/assets/título.png", alt: "Título" },
          { src: "/assets/js.PNG", alt: "Imagen Imm" },
          {
            src: "/assets/Imagen de WhatsApp 2023-08-17 a las 11.54.17.jpg",
            alt: "Imagen Imm",
          },
        ]}
      />
      <DownloadCV />

      <ContactForm />
    </main>
  );
}
