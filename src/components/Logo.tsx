import { sectionHref, SECTION } from "@/lib/sections";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/img/logo-horizontal.jpg";
/** Rozměry po ořezu bílých okrajů (viz public/img). */
const LOGO_WIDTH = 896;
const LOGO_HEIGHT = 352;

type LogoProps = {
  /** Na tmavém pozadí (patička) — bílý podklad kolem loga */
  onDarkBackground?: boolean;
  /** Výška loga v hlavičce / mobilním menu */
  compact?: boolean;
};

export function Logo({ onDarkBackground = false, compact = false }: LogoProps) {
  /** Výška v souladu s btn-md v hlavičce; soubor je ořezaný bez bílých okrajů. */
  const heightClass = compact
    ? "h-14 sm:h-16 md:h-[80px] w-auto max-w-[min(78vw,22rem)] sm:max-w-none"
    : "h-14 md:h-[80px] w-auto max-w-full";

  return (
    <Link
      href={sectionHref(SECTION.home)}
      className={[
        "logo inline-flex items-center shrink-0 leading-none p-0 m-0",
        onDarkBackground ? "rounded-lg bg-white px-2.5 py-1.5 max-w-[min(100%,18rem)]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={LOGO_SRC}
        alt="Úklid bez prachu — úklidová firma"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={compact}
        sizes={
          compact
            ? "(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
            : "(max-width: 768px) 300px, 360px"
        }
        className={`${heightClass} block object-contain object-left`}
      />
    </Link>
  );
}
