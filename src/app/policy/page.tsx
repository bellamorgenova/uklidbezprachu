import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
};

export default function PolicyPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl post">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Domů</Link></li>
            <li>Ochrana osobních údajů</li>
          </ul>
        </div>
        <h1 className="uppercase">Ochrana osobních údajů</h1>
        <p>
          Společnost Úklid bez prachu zpracovává osobní údaje v souladu s platnými
          právními předpisy, zejména nařízením GDPR. Tento dokument popisuje, jak s
          údaji nakládáme při používání webu a při vyřízení poptávky.
        </p>
        <h2 className="h4">1. Jaké údaje zpracováváme</h2>
        <p>
          Přes kontaktní formulář můžete zadat jméno, e-mail, telefon a text zprávy.
          Technické údaje o návštěvě webu mohou být zpracovány poskytovatelem hostingu
          (Vercel) v běžném rozsahu nutném pro provoz stránky.
        </p>
        <h2 className="h4">2. Účel a právní základ</h2>
        <p>
          Údaje z poptávky používáme k tomu, abychom Vás mohli kontaktovat a připravit
          nabídku úklidu. Právním základem je jednání o smlouvě a Váš souhlas odesláním
          formuláře.
        </p>
        <h2 className="h4">3. Doba uchování</h2>
        <p>
          Údaje uchováváme po dobu nezbytnou pro vyřízení poptávky a případnou spolupráci,
          nejdéle však po dobu stanovenou zákonem.
        </p>
        <h2 className="h4">4. Vaše práva</h2>
        <p>
          Máte právo na přístup, opravu, výmaz, omezení zpracování a podání stížnosti u
          Úřadu pro ochranu osobních údajů. Dotazy směřujte na{" "}
          <a href="mailto:info@uklidbezprachu.cz">info@uklidbezprachu.cz</a>.
        </p>
        <p className="text-sm text-gray-600 mt-8">
          Tento text je pracovní verze — před spuštěním služby doporučujeme doplnit
          identifikaci provozovatele a IČO.
        </p>
      </div>
    </section>
  );
}
