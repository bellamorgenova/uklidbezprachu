"use client";

import { HomeImageCarousel } from "@/components/homepage/HomeImageCarousel";
import { SECTION } from "@/lib/sections";

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

export function FeedbackSection() {
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
              className="section-anchor w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[28rem]"
            >
              <HomeImageCarousel
                images={REVIEW_IMAGES}
                imageSizes="(max-width: 768px) 90vw, (max-width: 1024px) 26rem, 28rem"
                navLabels={{
                  prev: "Předchozí hodnocení",
                  next: "Další hodnocení",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
