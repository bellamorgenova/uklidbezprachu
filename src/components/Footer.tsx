import Image from "next/image";
import Link from "next/link";

import { Logo } from "./Logo";

const PSI_SALON_URL = "https://www.psisalonmorgen.cz";

export function Footer() {
  return (
    <footer className="footer bg-dark text-white gap-0 block">
      <div className="w-full py-16 md:py-20">
        <div className="container">
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 text-center"
          >
            <div className="flex flex-col items-center max-w-sm">
              <Logo onDarkBackground />
              <p className="mt-4 text-white/95 text-base leading-relaxed">
                Profesionální úklid pro domácnosti a firmy.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-sm">
              <Link
                href={PSI_SALON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-black/40 px-3 py-2 hover:opacity-90 transition-opacity"
                title="Psí salon Morgen"
              >
                <Image
                  src="/img/psi-salon-morgen-logo.png"
                  alt="Psí salon Morgen — stříhání a péče o psy"
                  width={694}
                  height={268}
                  sizes="(max-width: 768px) 260px, 320px"
                  className="h-[72px] sm:h-[84px] md:h-[96px] w-auto object-contain"
                  unoptimized
                />
              </Link>
              <p className="mt-4 text-white/95 text-base leading-relaxed">
                Stříhání, koupání, dentální hygiena a hlídání pejsků.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
