import React from "react";

export default function Card({
  title,
  description,
  image,
  onProject,
  onInfo,
  hasProject,
  hasInfo,
}) {
  return (
    <div className="w-80 h-90 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 mx-auto xl:mx-0 xl:hover:bg-gray-900 xl:hover:shadow-2xl xl:hover:shadow-sky-400 ">
      <div className="w-full h-40 bg-sky-300 rounded-2xl overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : null}
      </div>
      <div>
        <p className="font-extrabold">{title}</p>
        <p>{description}</p>
      </div>
      <div className="flex gap-2 mt-auto">
        {hasProject ? (
          <button
            className="bg-blue-600 font-extrabold p-2 px-6 rounded-xl hover:bg-blue-500 transition-colors"
            onClick={onProject}
          >
            Ver proyecto
          </button>
        ) : (
          <span className="bg-gray-300 text-gray-600 font-extrabold p-2 px-6 rounded-xl cursor-not-allowed select-none">
            No hay link
          </span>
        )}
        {hasInfo && (
          <button
            className="bg-emerald-600 font-extrabold p-2 px-6 rounded-xl hover:bg-emerald-500 transition-colors"
            onClick={onInfo}
          >
            Info
          </button>
        )}
      </div>
    </div>
  );
}
