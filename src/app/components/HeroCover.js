import withFadeIn from "./withFadeIn";

function HeroCover({ src, alt = "Portada" }) {
  return (
    <div className="relative w-full  overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        loading="eager"
      />
      <div className="absolute inset-0 text-4xl md:text-6xl text-left flex-col font-bold  bg-black/40 flex items-start justify-end">
        <div className="mb-[40px] p-2">
          <h1 class="container mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="container text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 hidden md:inline">
              Desarrollo Web
            </span>
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default withFadeIn(HeroCover);
