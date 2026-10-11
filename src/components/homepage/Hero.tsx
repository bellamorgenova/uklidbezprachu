import { SECTION } from "@/lib/sections";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id={SECTION.home}
      className="page-section section-hero bg-gray-50 py-10 lg:py-20 bg-no-repeat bg-cover relative overflow-hidden z-0"
    >
      <Image
        src="/img/bg/bg0.webp"
        alt=""
        width={1200}
        height={600}
        priority
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
      />
      <div className="absolute inset-0 bg-white/80 md:bg-transparent -z-10" />
      <div className="container z-10 relative">
        <div className="sm:max-w-md md:max-w-xl text-center sm:text-left">
          <p className="text-sm mb-1">Kvalitní úklid za rozumnou cenu</p>
          <h1>Pečlivý úklid domácností i kanceláří bez zbytečného prachu</h1>
          <p>
            Ušetříme vám čas — přijedeme v dohodnutý termín, přineseme vlastní
            prostředky a odneseme s sebou i nepořádek navíc.
          </p>
        </div>
      </div>
    </section>
  );
}
