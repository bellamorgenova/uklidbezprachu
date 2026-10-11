"use client";

import { SECTION } from "@/lib/sections";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const REVIEW_IMAGES = [
  {
    src: "/assets/reviews/hodnoceni-olga-v.png",
    alt: "Hodnocení od Olgy V. — úklid domácnosti",
    width: 1024,
    height: 994,
  },
  {
    src: "/assets/reviews/hodnoceni-lucie-b.png",
    alt: "Hodnocení od Lucie B. — úklid domácnosti",
    width: 784,
    height: 498,
  },
  {
    src: "/assets/reviews/hodnoceni-michal-s.png",
    alt: "Hodnocení od Michala S. — úklid domácnosti",
    width: 1024,
    height: 480,
  },
  {
    src: "/assets/reviews/hodnoceni-stepan-h.png",
    alt: "Hodnocení od Štěpána H.",
    width: 780,
    height: 546,
  },
  {
    src: "/assets/reviews/hodnoceni-katerina-s.png",
    alt: "Hodnocení od Kateřiny Š. — úklid domácnosti",
    width: 778,
    height: 458,
  },
] as const;

const AUTOPLAY_MS = 10_000;

export function FeedbackSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <section className="page-section section section-reviews">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="md:py-2">
            <h2>Hodnocení našich klientů</h2>
            <p className="mt-4">
              Nic nás nepotěší tak, jako kladná reference nebo pozitivní zpětná vazba od
              našeho zákazníka.
            </p>
          </div>
          <div className="relative min-w-0 flex items-center justify-center">
            <div
              id={SECTION.reviews}
              className="section-anchor relative w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[28rem]"
            >
            <Swiper
              modules={[Navigation, Autoplay]}
              loop
              autoplay={{
                delay: AUTOPLAY_MS,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== "boolean") {
                  const nav = swiper.params.navigation;
                  if (nav) {
                    nav.prevEl = prevRef.current;
                    nav.nextEl = nextRef.current;
                  }
                }
              }}
            >
              {REVIEW_IMAGES.map((item) => (
                <SwiperSlide key={item.src}>
                  <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 26rem, 28rem"
                      className="w-full h-auto object-contain"
                      unoptimized
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              ref={prevRef}
              type="button"
              className="swiper-prev absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-main text-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-green-700 transition-colors"
              title="Předchozí hodnocení"
              aria-label="Předchozí hodnocení"
            >
              <ArrowLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="swiper-next absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-main text-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-green-700 transition-colors"
              title="Další hodnocení"
              aria-label="Další hodnocení"
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
