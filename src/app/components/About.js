import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <FadeInSection>
      <section className="container py-12 flex flex-col md:flex-row items-center gap-10  mt-10 mb-16">
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Soy Full Stack Developer
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            Con más de 4 años creando soluciones digitales que combinan
            rendimiento, escalabilidad y una experiencia de usuario impecable,
            tanto en web como en mobile.
            <br />
            Trabajo con tecnologías modernas como{" "}
            <span className="font-semibold text-gray-800 ">
              React, Next.js, React Native, TypeScript, Node.js y PostgreSQL
            </span>
            , integrando herramientas como Strapi, Builder.io, Cloudinary y
            pasarelas de pago para desarrollar productos completos, eficientes y
            listos para producción.
          </p>
          <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-500  text-base">
            <li>
              <span className="font-bold text-gray-800 ">Frontend:</span> React
              · Vue.js · Next.js · TypeScript
            </li>
            <li>
              <span className="font-bold text-gray-800 ">Backend:</span> Node.js
              · Express · Sequelize · PHP
            </li>
            <li>
              <span className="font-bold text-gray-800 ">Bases de datos:</span>{" "}
              PostgreSQL · Firebase
            </li>
            <li>
              <span className="font-bold text-gray-800 ">
                Testing & DevOps:
              </span>{" "}
              Cypress · Jest · Git · Bitbucket
            </li>
            <li>
              <span className="font-bold text-gray-800 ">
                CMS & Integraciones:
              </span>{" "}
              Strapi · Builder.io · Cloudinary · JWT
            </li>
            <li>
              <span className="font-bold text-gray-800">Diseño UI:</span>{" "}
              Tailwind · CSS Modules · SASS
            </li>
            <li>
              <span className="font-bold text-gray-800">Metodologías:</span>{" "}
              Scrum · Jira · trabajo colaborativo ágil
            </li>
          </ul>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Proyectos destacados
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li className="text-gray-400">
                <span className="font-semibold text-gray-800">SIDOM:</span>{" "}
                Desarrollo completo del sitio web institucional con stack
                moderno (React, Next.js, Vite, Strapi, TailwindCSS), CMS híbrido
                visual/headless y arquitectura escalable. Integración de pruebas
                e2e (Cypress, Jest), diseño responsive y autenticación privada.
                (2025)
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-800">
                  EventMedia – App de Depósito:
                </span>{" "}
                App interna en React Native para mejorar el flujo de trabajo en
                el depósito técnico de una empresa de espectáculos. Gestión de
                equipos, inventario y logística operativa. Aplicación utilizada
                en producción por el equipo técnico. (2025)
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-800">
                  E-commerce personalizado:
                </span>{" "}
                Plataforma comercial con integración de pasarelas de pago
                (PayPal), autenticación social (Google, Facebook) y paneles
                administrativos dinámicos con control de inventario y usuarios
                en tiempo real.
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-800">
                  Dashboard de eventos:
                </span>{" "}
                Sistema completo para gestión de usuarios, reportes y
                notificaciones automáticas, adaptable a distintos tipos de shows
                y espectáculos en vivo. Integración con sistemas externos de
                control de acceso y planificación de actividades.
              </li>
            </ul>
          </div>

          <p className="text-base text-gray-400 italic">
            Objetivo profesional: Seguir creciendo como desarrollador en
            entornos donde la innovación, el aprendizaje continuo y el impacto
            positivo sean protagonistas. Me interesa formar parte de equipos que
            valoren el buen código, el diseño centrado en el usuario y el
            trabajo colaborativo.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
}
