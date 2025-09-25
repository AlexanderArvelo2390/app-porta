"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full  flex items-center justify-between py-4 px-8">
      {/* Botón hamburguesa solo visible en móviles */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span
          className={`block w-7 h-1 bg-emerald-600 rounded transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-emerald-600 rounded my-1 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-emerald-600 rounded transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Menú principal */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li>
          <a href="#about" className="hover:text-emerald-600">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-emerald-600">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-emerald-600">
            Contacto
          </a>
        </li>
      </ul>
      {/* Menú móvil */}
      {open && (
        <ul className="absolute top-16 right-8 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-6 md:hidden z-50 text-gray-700 font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-emerald-600"
              onClick={() => setOpen(false)}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-emerald-600"
              onClick={() => setOpen(false)}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-600"
              onClick={() => setOpen(false)}
            >
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
