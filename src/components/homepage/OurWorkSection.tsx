"use client";

import { HomeImageCarousel } from "@/components/homepage/HomeImageCarousel";
import { SECTION } from "@/lib/sections";

const WORK_IMAGES = [
  {
    src: "/assets/prace/zidle-2-pred-po.jpg",
    alt: "Tepování židle — před a po",
    width: 1024,
    height: 719,
  },
  {
    src: "/assets/prace/zidle-1-pred-po.jpg",
    alt: "Čištění čalounění židle — před a po",
    width: 1024,
    height: 719,
  },
  {
    src: "/assets/prace/kreslo-pred-po.jpg",
    alt: "Tepování křesla — před a po",
    width: 1024,
    height: 719,
  },
  {
    src: "/assets/prace/gauc-2-pred-po.jpg",
    alt: "Čištění sedačky — před a po",
    width: 1024,
    height: 413,
  },
  {
    src: "/assets/prace/gauc-1-pred-po.jpg",
    alt: "Úprava sedačky — před a po",
    width: 1024,
    height: 413,
  },
] as const;

export function OurWorkSection() {
  return (
    <section className="page-section section section-our-work">
      <div className="container">
        <h2
          id={SECTION.work}
          className="section-anchor text-center max-w-2xl mx-auto"
        >
          Naše práce
        </h2>
        <p className="text-center text-white bg-main rounded-lg py-3 px-4 mt-3 mb-10 max-w-xl mx-auto">
          Ukázky z tepování a úklidu — vždy s důrazem na výsledek, který je vidět.
        </p>
        <HomeImageCarousel
          className="w-full max-w-5xl mx-auto"
          images={WORK_IMAGES}
          imageSizes="(max-width: 768px) 90vw, 64rem"
          navLabels={{
            prev: "Předchozí fotografie",
            next: "Další fotografie",
          }}
        />
      </div>
    </section>
  );
}
