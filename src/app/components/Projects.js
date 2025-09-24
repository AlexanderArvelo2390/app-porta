const projects = [
  {
    id: "sidom",
    title: "SIDOM",
    description:
      "Desarrollo completo del sitio web institucional con stack moderno (React, Next.js, Vite, Strapi, TailwindCSS), CMS híbrido visual/headless y arquitectura escalable. Diseño responsive y autenticación privada.",
    images: ["/assets/sidom.png"],
    link: "https://www.sidomsuite.com/",
  },
  {
    id: "eventmedia",
    title: "EventMedia – App de Depósito",
    description:
      "App interna en React Native para mejorar el flujo de trabajo en el depósito técnico de una empresa de espectáculos. Gestión de equipos, inventario y logística operativa.",
    images: ["/assets/merucci.PNG"],
    link: "https://meucci.com.ar/",
  },

  {
    id: "ecommerce",
    title: "E-commerce personalizado",
    description:
      "Plataforma comercial con integración de pasarelas de pago (PayPal), autenticación social (Google, Facebook) y paneles administrativos dinámicos con control de inventario y usuarios en tiempo real.",
    images: ["/assets/fit.png"],
    link: "https://final-henry-g6.netlify.app/",
  },
];

import withFadeIn from "./withFadeIn";

function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold text-gray-800  mb-8 text-center">
        Proyectos Destacados
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
          >
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={project.title + " screenshot " + (i + 1)}
                  className="h-40 w-auto rounded-lg border object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 text-base flex-1">
              {project.description}
            </p>
            <div className="flex gap-2 mt-2">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Ver proyecto
                </a>
              ) : (
                <span className="px-4 py-2 bg-gray-300 text-gray-600 rounded cursor-not-allowed">
                  No hay link para mostrar
                </span>
              )}
              <a
                href={`/project-info?id=${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
              >
                Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default withFadeIn(Projects);
