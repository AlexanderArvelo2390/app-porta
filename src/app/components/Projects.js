const projects = [
  {
    id: "sidom",
    title: "SIDOM",
    description:
      "Desarrollo completo del sitio web institucional con stack moderno (React, Next.js, Vite, Strapi, TailwindCSS), CMS híbrido",
    images: ["/assets/sidom.png"],
    link: "https://www.sidomsuite.com/",
  },
  {
    id: "eventmedia",
    title: "EventMedia – App de Depósito",
    description:
      "App interna en React Native para mejorar el flujo de trabajo en el depósito técnico de una empresa de espectáculos. ",
    images: ["/assets/merucci.PNG"],
    link: "https://meucci.com.ar/",
  },

  {
    id: "ecommerce",
    title: "E-commerce personalizado",
    description:
      "Plataforma comercial con integración de pasarelas de pago (PayPal),",
    images: ["/assets/fit.png"],
    link: "https://final-henry-g6.netlify.app/",
  },
];

import withFadeIn from "./withFadeIn";
import Card from "./Card";

function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold text-gray-800  mb-8 text-center">
        Proyectos
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            title={project.title}
            description={project.description}
            image={project.images[0]}
            hasProject={!!project.link}
            hasInfo={true}
            onProject={
              project.link
                ? () => window.open(project.link, "_blank")
                : undefined
            }
            onInfo={() =>
              window.open(`/project-info?id=${project.id}`, "_blank")
            }
          />
        ))}
      </div>
    </section>
  );
}

export default withFadeIn(Projects);
