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

export function Welcome() {
  return (
    <section id={SECTION.about} className="page-section section section-welcome">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Image
            src="/img/img2.webp"
            alt=""
            width={535}
            height={442}
            className="w-auto h-auto"
          />
          <div>
            <h2>Úklid bez prachu — váš partner pro čistý domov i firmu</h2>
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
