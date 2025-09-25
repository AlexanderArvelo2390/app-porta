"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import withFadeIn from "./withFadeIn";
function ImageCarousel({ images }) {
  return (
    <div className="w-full h-fulls ">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={8000}
        loop
        className=""
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-64 sm:h-80 flex items-center justify-center bg-gray-100 ">
              <img
                src={img.src}
                alt={img.alt}
                className="object-contain w-full h-full rounded-lg"
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
