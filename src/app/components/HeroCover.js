import withFadeIn from "./withFadeIn";

function HeroCover({ src, alt = "Portada" }) {
  const isVideo =
    src &&
    (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg"));
  return (
    <div className="relative w-full overflow-hidden">
      {isVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      ) : (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
        <h1 className="text-sm ms:text-2x1 md:text-3xl font-extrabold text-gray-900 dark:text-white lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-700">
            Alexander Arvelo
          </span>
        </h1>
        <a
          href="/cv.pdf"
          download
          className="mt-6 px-6 py-2 rounded bg-sky-700 text-white font-semibold shadow-lg hover:bg-sky-800 transition pointer-events-auto"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}

export default withFadeIn(HeroCover);
