"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

export type CarouselImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type NavLabels = { prev: string; next: string };

type Props = {
  images: readonly CarouselImage[];
  autoplayMs?: number;
  imageSizes: string;
  className?: string;
  navLabels?: NavLabels;
};

const DEFAULT_NAV: NavLabels = {
  prev: "Předchozí",
  next: "Další",
};

/** Výchozí interval automatického přepínání (Naše práce + Reference). */
export const CAROUSEL_AUTOPLAY_MS = 6_000;

export function HomeImageCarousel({
  images,
  autoplayMs = CAROUSEL_AUTOPLAY_MS,
  imageSizes,
  className = "",
  navLabels = DEFAULT_NAV,
}: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const go = useCallback(
    (direction: "prev" | "next") => {
      if (!swiper) return;
      swiper.autoplay?.stop();
      if (direction === "prev") {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
      swiper.autoplay?.start();
    },
    [swiper],
  );

  const handleSwiper = useCallback(
    (instance: SwiperType) => {
      setSwiper(instance);
      if (images.length > 1) {
        instance.autoplay?.start();
      }
    },
    [images.length],
  );

  if (images.length === 0) return null;

  return (
    <div className={`relative isolate px-11 sm:px-12 ${className}`.trim()}>
      <Swiper
        modules={[Autoplay]}
        loop={images.length > 1}
        onSwiper={handleSwiper}
        autoplay={
          images.length > 1
            ? {
                delay: autoplayMs,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }
            : false
        }
      >
        {images.map((item) => (
          <SwiperSlide key={item.src}>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes={imageSizes}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-main text-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer"
            title={navLabels.prev}
            aria-label={navLabels.prev}
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => go("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-main text-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer"
            title={navLabels.next}
            aria-label={navLabels.next}
          >
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </>
      )}
    </div>
  );
}
