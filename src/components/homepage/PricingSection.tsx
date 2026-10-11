"use client";

import { SECTION } from "@/lib/sections";
import { useState } from "react";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
};

const monthly: Plan[] = [
  {
    name: "Základní",
    price: "1 490",
    period: "měsíčně",
    features: [
      "Utření prachu ze všech dostupných ploch",
      "Vytření podlah",
      "Vysátí koberců a čalounění",
      "Úklid kuchyně (linky, dřez, spotřebiče zvenku)",
      "Úklid koupelny a WC",
      "Vyprázdnění košů",
    ],
  },
  {
    name: "Rozšířený",
    price: "1 890",
    period: "měsíčně",
    features: [
      "Vše ze Základního balíčku",
      "Detailnější utírání prachu",
      "Mytí kuchyňských skříněk zvenku",
      "Vnitřek mikrovlnné trouby",
      "Výměna ložního prádla (dle dohody)",
      "Lokální odstranění skvrn na zdech a dveřích",
    ],
  },
  {
    name: "Kompletní",
    price: "2 490",
    period: "měsíčně",
    features: [
      "Vše z Rozšířeného balíčku",
      "Hlubší úklid kuchyně",
      "Lišty, rámy dveří a větrací mřížky",
      "Úklid ve skříních a spíži (po dohodě)",
      "Čištění koberců a čalounění — lokálně",
      "Důkladný úklid koupelny včetně spár",
    ],
  },
];

const yearly: Plan[] = [
  { ...monthly[0], price: "3 990", period: "ročně" },
  { ...monthly[1], price: "4 590", period: "ročně" },
  { ...monthly[2], price: "5 990", period: "ročně" },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className="bg-white p-6 rounded-xl text-black w-full grid md:grid-cols-2 lg:grid-cols-1 items-center shadow gap-4"
    >
      <div>
        <h2 className="text-lg mb-2 uppercase">{plan.name}</h2>
        <div
          className="flex gap-2 items-end bg-main text-white justify-center rounded-lg p-3"
        >
          <p className="text-3xl font-bold">
            {plan.price} <span className="text-base font-normal">Kč</span> /
          </p>
          <small>{plan.period}</small>
        </div>
      </div>
      <ul className="space-y-2 text-xs text-left pl-4 list-disc mt-4 md:col-span-2 lg:col-span-1">
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </article>
  );
}

export function PricingSection() {
  const [tab, setTab] = useState<"monthly" | "yearly">("monthly");
  const plans = tab === "monthly" ? monthly : yearly;

  return (
    <section id={SECTION.pricing} className="page-section section section-plan grid">
      <div
        className="bg-main text-white [grid-area:1/1/2/2] bg-no-repeat bg-cover h-[30em] bg-[url(/img/bg/bg1.webp)] py-20"
      />
      <div className="[grid-area:1/1/2/2] text-white pt-20">
        <div className="container text-center">
          <div className="mx-auto max-w-xl mb-4">
            <p className="text-sm mb-1">Orientační ceník</p>
            <h2>Balíčky pro pravidelný úklid</h2>
            <p className="text-sm mt-2 opacity-90">
              Přesnou cenu upřesníme podle velikosti prostor a rozsahu práce.
            </p>
          </div>
          <div className="mt-5 grid w-full">
            <div
              className="tabs mx-auto justify-center rounded-full border border-black/30 inline-flex bg-gray-50 text-black p-2 gap-3"
            >
              <button
                type="button"
                className={`tab ${tab === "monthly" ? "tab-active" : ""}`}
                onClick={() => setTab("monthly")}
              >
                Měsíčně
              </button>
              <button
                type="button"
                className={`tab ${tab === "yearly" ? "tab-active" : ""}`}
                onClick={() => setTab("yearly")}
              >
                Ročně
              </button>
            </div>
            <div className="mt-10">
              <div className="tab-content block">
                <div
                  className="flex flex-wrap lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
                >
                  {plans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
