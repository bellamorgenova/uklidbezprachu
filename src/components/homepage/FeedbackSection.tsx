"use client";

import { SECTION } from "@/lib/sections";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Robert Fox",
    role: "Business Man",
    text:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
  {
    name: "Robert Fox",
    role: "Business Man",
    text:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
  {
    name: "Robert Fox",
    role: "Business Man",
    text:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
];

function ReviewCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <article
      className="rounded-xl p-10 grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-4 items-center border border-gray-200 border-t-4 border-t-main border-r-4 border-r-main relative"
    >
      <Image
        src="/img/comments/cmnt1.webp"
        alt=""
        width={100}
        height={100}
        className="w-full h-auto max-w-25"
      />
      <div className="grid gap-0">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <p className="text-lg font-semibold">{name}</p>
            <p>{role}</p>
          </div>
          <Image
            src="/img/icons/quote.svg"
            width={50}
            height={50}
            alt="quote"
            className="w-auto h-auto max-w-18.75 absolute top-2 right-2"
          />
        </div>
        <div className="flex gap-1 items-center text-yellow-500 mt-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={24} fill="currentColor" />
          ))}
        </div>
        <p className="text-sm">{text}</p>
      </div>
    </article>
  );
}

export function FeedbackSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id={SECTION.reviews} className="page-section section section-reviews">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2>Feedback About Their Experience With Us</h2>
            <p className="mt-4">
              Read testimonials from our satisfied clients. See how our cleaning
              services have made a difference in their lives and homes
            </p>
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              loop
              onSwiper={(s) => {
                swiperRef.current = s;
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
              {reviews.map((r, i) => (
                <SwiperSlide key={i}>
                  <ReviewCard {...r} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              ref={prevRef}
              type="button"
              className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-dark p-2 rounded-full shadow w-10 h-10 flex items-center justify-center"
              title="prev"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-dark p-2 rounded-full shadow w-10 h-10 flex items-center justify-center"
              title="next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
