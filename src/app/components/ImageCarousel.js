"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import withFadeIn from "./withFadeIn";
const images = [
  { src: "/assets/título.png", alt: "Título" },
  { src: "/assets/imm.jpeg", alt: "Imagen Imm" },
];

function ImageCarousel() {
  return (
    <div className="w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={8000}
        loop
        className="rounded-lg shadow-lg"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-64 sm:h-80 flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full rounded-lg"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default withFadeIn(ImageCarousel);
