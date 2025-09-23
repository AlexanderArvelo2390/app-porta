export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 ">
      <h1 class="mb-4 text-sm ms:text-2x1 md:text-3xl font-extrabold text-gray-900 dark:text-white lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Alexander Arvelo
        </span>{" "}
      </h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
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
    </nav>
  );
}
