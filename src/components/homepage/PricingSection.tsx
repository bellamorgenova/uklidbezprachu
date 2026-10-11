import { SECTION } from "@/lib/sections";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
};

/** Pořadí odpovídá službám na webu (3 + 2 v mřížce). */
const PLANS: Plan[] = [
  {
    name: "Běžný úklid",
    price: "300",
    period: "hodina",
    features: [
      "Běžný úklid bytu nebo domu",
      "Kuchyně, koupelna, obývací pokoje",
      "Vysátí a vytření podlah",
      "Plán podle Vašeho seznamu",
    ],
  },
  {
    name: "Tepování",
    price: "250 - 2 000",
    period: "ks",
    features: [
      "Dle velikosti a rozsahu znečištění - koberce, pohovky, křesla, židle, apod.",
      "Profesionální technika",
      "Šetrné čištění dle materiálu",
      "Rozsah předem sladíme",
    ],
  },
  {
    name: "Generální úklid",
    price: "300",
    period: "hodina",
    features: [
      "Hlubší úklid jednou za čas",
      "Lišty, skříňky, za spotřebiči",
      "Ideální po rekonstrukci nebo zimě",
      "Okna, včetně rámů",
    ],
  },
  {
    name: "Debordelizace",
    price: "350",
    period: "hodina",
    features: [
      "Objednávku kontejneru případně zařídíme na Vaše náklady",
      "Uvolnění prostoru v domácnosti",
      "Citlivý a praktický přístup",
      "Příprava na běžný úklid",
    ],
  },
  {
    name: "Úklid kanceláří",
    price: "300",
    period: "hodina",
    features: [
      "Pravidelný i jednorázový úklid",
      "Mimo pracovní dobu nebo o víkendu",
      "Desky, podlahy, kuchyňka, WC",
      "Přizpůsobení Vašemu provozu",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className="bg-white p-6 rounded-xl text-black w-full grid md:grid-cols-2 lg:grid-cols-1 items-center shadow gap-4"
    >
      <div>
        <h3 className="text-lg mb-2 uppercase">{plan.name}</h3>
        <div
          className="flex gap-2 items-end bg-main text-white justify-center rounded-lg p-3"
        >
          <p className="text-3xl font-bold">
            {plan.price} <span className="text-base font-normal">Kč</span>
            {plan.period ? " /" : ""}
          </p>
          {plan.period ? <small>{plan.period}</small> : null}
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
  const topRow = PLANS.slice(0, 3);
  const bottomRow = PLANS.slice(3, 5);

  return (
    <section className="page-section section section-plan relative">
      <div
        className="absolute inset-0 bg-main"
        aria-hidden
      />
      <div className="relative z-10 text-white pt-20 pb-16">
        <div className="container text-center">
          <div className="mx-auto max-w-xl mb-10">
            <h2 id={SECTION.pricing} className="section-anchor">
              Ceník služeb
            </h2>
            <p className="text-sm mt-2 opacity-90">
              Nejedeme na rychlost, jedeme na přesnost
            </p>
          </div>
          <div className="flex flex-col gap-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {topRow.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
            {bottomRow.length > 0 && (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl lg:max-w-4xl mx-auto"
              >
                {bottomRow.map((plan) => (
                  <PlanCard key={plan.name} plan={plan} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
