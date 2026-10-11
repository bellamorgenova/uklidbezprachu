import { SECTION } from "@/lib/sections";
import { Check } from "lucide-react";
import Image from "next/image";

const perks = [
  "Prověřený tým",
  "Termín často už do druhého dne",
  "Úklid podle vašeho seznamu",
  "Důraz na detail",
  "Férové ceny",
];

const ABOUT_PHOTO_WIDTH = 691;
const ABOUT_PHOTO_HEIGHT = 947;

export function Welcome() {
  return (
    <section className="page-section section section-welcome">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            className="relative w-full max-w-md mx-auto md:mx-0 overflow-hidden [mask-image:radial-gradient(ellipse_82%_80%_at_50%_38%,#000_48%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_82%_80%_at_50%_38%,#000_48%,transparent_100%)]"
          >
            <Image
              src="/img/o-nas.jpg"
              alt="Člen týmu při úklidu — palec nahoru"
              width={ABOUT_PHOTO_WIDTH}
              height={ABOUT_PHOTO_HEIGHT}
              sizes="(max-width: 768px) 90vw, 420px"
              className="w-full h-auto object-cover object-[center_20%] scale-[1.12] origin-[center_22%]"
            />
          </div>
          <div>
            <h2 id={SECTION.about} className="section-anchor">
              Úklid bez prachu — váš partner pro čistý domov i firmu
            </h2>
            <p>
              Jsme lokální úklidová služba, na kterou se můžete spolehnout.
              Domácnosti, kanceláře i jednorázové úklidy po rekonstrukci zvládneme
              s rozmyslem a bez zbytečných komplikací.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 my-6 gap-4">
              {perks.map((label) => (
                <div
                  key={label}
                  className="grid grid-cols-[20px_1fr] items-center bg-gray-50 dark:bg-dark p-4 rounded gap-4"
                >
                  <div
                    className="bg-main text-white rounded-full flex items-center justify-center w-5 h-5"
                  >
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="font-semibold text-lg">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
