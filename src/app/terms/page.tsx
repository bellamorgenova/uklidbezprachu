import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildPageMetadata({
  title: "Obchodní podmínky",
  description:
    "Obchodní podmínky služeb úklidu Úklid bez prachu — domácnosti a firmy v Orlickoústecku.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl post">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Domů</Link></li>
            <li>Obchodní podmínky</li>
          </ul>
        </div>
        <h1 className="uppercase">Obchodní podmínky</h1>
        <p>
          Tyto podmínky upravují poskytování úklidových služeb pod značkou Úklid bez
          prachu. Konkrétní rozsah, cenu a termín vždy potvrzujeme před zahájením práce.
        </p>
        <h2 className="h4">1. Objednávka služby</h2>
        <p>
          Poptávku můžete zaslat přes webový formulář, e-mail nebo telefon. Smlouva
          vzniká potvrzením termínu a cenového návrhu oběma stranami.
        </p>
        <h2 className="h4">2. Cena a platba</h2>
        <p>
          Cena vychází z dohodnutého rozsahu úklidu. Způsob a splatnost platby určíme
          individuálně (faktura, hotově po úklidu apod.).
        </p>
        <h2 className="h4">3. Storno a změny termínu</h2>
        <p>
          Termín je možné změnit po vzájemné dohodě. Při zrušení v krátké době před
          úklidem může být účtován storno poplatek — výši sdělíme předem.
        </p>
        <h2 className="h4">4. Reklamace</h2>
        <p>
          Pokud nejste s úklidem spokojeni, dejte nám vědět bez zbytečného odkladu —
          společně najdeme nápravu.
        </p>
        <p className="text-sm text-gray-600 mt-8">
          Pracovní verze — doplňte identifikaci podnikatele a reklamační postup podle
          Vaší praxe.
        </p>
      </div>
    </section>
  );
}
