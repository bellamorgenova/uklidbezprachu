import { SECTION } from "@/lib/sections";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="page-section section-hero bg-gray-50 py-10 lg:py-20 bg-no-repeat bg-cover relative overflow-hidden z-0"
    >
      <Image
        src="/img/bg/hero-uklid-green.jpg"
        alt="Ruce v zelených rukavicích tvořící srdce"
        width={1600}
        height={1067}
        priority
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white from-0% via-white/90 via-45% to-white/55 md:to-white/35"
        aria-hidden
      />
      <div className="container z-10 relative">
        <div className="sm:max-w-md md:max-w-xl text-center sm:text-left text-dark">
          <h1 id={SECTION.home} className="section-anchor text-dark">
            Pečlivý úklid domácností i kanceláří, bez zbytečných starostí
          </h1>
          <p className="text-dark/90 text-base sm:text-lg leading-relaxed">
            Ušetříme vám čas — přijedeme v termínu, který vám vyhoví, uklidíme
            podle vašeho seznamu a pracujeme s prostředky, které máte doma nebo
            ve firmě, případně zajistíme ve vlastní režii.
          </p>
        </div>
      </div>
    </section>
  );
}
