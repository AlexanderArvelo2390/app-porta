"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "../components/ImageCarousel";

const projects = [
  {
    id: "sidom",
    title: "SIDOM",
    description:
      "SIDOM es una plataforma institucional con arquitectura escalable, CMS híbrido visual/headless, integración de pruebas e2e (Cypress, Jest), diseño responsive y autenticación privada. Stack: React, Next.js, Vite, Strapi, TailwindCSS.",
    images: ["/assets/sidom.png"],
    details:
      "🧩 Sección “Experiencia” Desarrollador Fullstack Freelance Proyecto Institucional – SIDOM Marzo 2025 - Presente Participación activa en el desarrollo del sitio institucional de SIDOM, utilizando tecnologías como React.js, Next.js, Vite, TailwindCSS y Strapi. Encargado de: Maquetación y programación de secciones web responsivas desde plantilla base. Integración de CMS Headless (Strapi) y visual (Builder.io) para marketing. Consumo de APIs dinámicas para renderizado de contenidos estructurados. Implementación de microinteracciones y diseño visual adaptado a dispositivos. Configuración de pruebas e2e con Cypress y Jest para validación funcional. Integraciones externas: Google Tag Manager, Hubspot (opcional), login JWT.💡 Sección “Proyectos” Sitio Web Institucional SIDOM Proyecto colaborativo con un equipo multidisciplinario orientado al desarrollo escalable de la plataforma institucional de SIDOM. Implementación de soluciones tecnológicas modernas, gestión de contenidos, diseño UI responsivo y performance optimizada. 💻 Tecnologías: React, Next.js, Vite, Strapi, TailwindCSS, Builder.io, Cypress, Jest 📎 🔧 Sección “Aptitudes”React.js / Next.js / ViteTailwindCSS / CSS ModulesStrapi / Builder.io /Node.js / Express / Cypress / Jest Responsive Design / Animaciones UI / API REST / Integraciones externas Metodologías ágiles / Trabajo en equipo / Control de versiones (Git, Bitbucket)",
  },
  {
    id: "eventmedia",
    title: "EventMedia – App de Depósito",
    description:
      "App interna en React Native para mejorar el flujo de trabajo en el depósito técnico de una empresa de espectáculos. Gestión de equipos, inventario y logística operativa.",
    images: ["/assets/merucci.PNG"],
    details:
      "Programador de Iluminación & Desarrollador Freelance EventMedia Encargado del diseño técnico y creativo de esquemas de iluminación para eventos corporativos, espectáculos, conciertos y obras teatrales. Trabajo colaborativo con equipo de producción (5 personas) para lograr ambientaciones visuales impactantes adaptadas a cada propuesta artística. Además, desarrollé una aplicación interna en React Native para optimizar el flujo de actividades en el depósito de equipos técnicos, permitiendo una gestión más eficiente del inventario, entregas y coordinación operativa.",
  },
  {
    id: "ecommerce",
    title: "E-commerce personalizado",
    description:
      "Plataforma comercial con integración de pasarelas de pago (PayPal), autenticación social (Google, Facebook) y paneles administrativos dinámicos con control de inventario y usuarios en tiempo real.",
    images: ["/assets/fit.png"],
    details:
      "Colaboré con un equipo de seis desarrolladores para diseñar y desarrollar una aplicación web completa. El proyecto involucró múltiples tecnologías y herramientas para garantizar la seguridad y el correcto funcionamiento de la aplicación, incluyendo:  -Trabajo en equipo y colaboración -Resolución de problemas -Comunicación efectiva -Adaptabilidad a nuevos desafíos y tecnologías -Autonomía y capacidad para trabajar de forma independiente -Front-end: Typescript, Zustand, Tailwind y Next -Back-end: Express, Node.js, JWT y Firebase -Base de datos: PostgreSQL y Sequelize",
  },
];

export default function ProjectInfoPage({ searchParams }) {
  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const id = params ? params.get("id") : searchParams?.id;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Proyecto no encontrado
        </h2>
        <p className="text-gray-500">
          No se encontró información para este proyecto.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="container flex flex-col justify-center items-center py-12">
        <Link
          href="/"
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
        >
          Ir a Home
        </Link>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {project.title}
      </h2>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-4">
          {project.images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={project.title + " screenshot " + (i + 1)}
              width={620}
              height={500}
              className="rounded-lg border object-cover"
            />
          ))}
        </div>
        <div className="flex-1">
          <p className="text-lg text-justify text-gray-700 mb-4">
            {project.details}
          </p>
        </div>
        <div>
          <ImageCarousel images={project.images} />
        </div>
      </div>
    </div>
  );
}
