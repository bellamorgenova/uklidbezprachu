"use client";

import Link from "next/link";
import { useState } from "react";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
};

const monthly: Plan[] = [
  {
    name: "Basic Package",
    price: "59.00",
    period: "Monthly",
    features: [
      "Dusting of all surfaces",
      "Sweeping and mopping floors",
      "Vacuuming carpets and rugs",
      "Cleaning of kitchen surfaces",
      "Cleaning of bathroom surfaces",
      "Emptying trash bins",
    ],
  },
  {
    name: "Enterprise Package",
    price: "69.00",
    period: "Monthly",
    features: [
      "All services in the Basic Plan",
      "Detailed dusting",
      "Wiping down of kitchen appt",
      "Cleaning inside the microwave",
      "Changing bed linens",
      "Spot cleaning walls and doors",
    ],
  },
  {
    name: "Premium Package",
    price: "99.00",
    period: "Monthly",
    features: [
      "All services in the Clean Plan",
      "Deep cleaning of kitchen appt",
      "Baseboards, door frames, & vents",
      "Organization of closets pantries",
      "Carpet, upholstery spot cleaning",
      "Detailed bathroom cleaning",
    ],
  },
];

const yearly: Plan[] = [
  { ...monthly[0], price: "159.00" },
  { ...monthly[1], price: "169.00" },
  { ...monthly[2], price: "199.00" },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className="bg-white p-6 rounded-xl text-black w-full grid md:grid-cols-3 lg:grid-cols-1 items-center shadow gap-4"
    >
      <div>
        <h2 className="text-lg mb-2 uppercase">{plan.name}</h2>
        <div
          className="flex gap-2 items-end bg-main text-white justify-center rounded-lg p-3"
        >
          <p className="text-3xl font-bold">
            <span className="text-base">$</span> {plan.price} /
          </p>
          <small>{plan.period}</small>
        </div>
      </div>
      <ul className="mb-6 space-y-2 text-xs text-left pl-4 list-disc mt-4">
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="btn btn-outline w-full rounded-md font-normal border-main text-main hover:bg-main hover:text-white"
      >
        Book Now
      </Link>
    </article>
  );
}

export function PricingSection() {
  const [tab, setTab] = useState<"monthly" | "yearly">("monthly");
  const plans = tab === "monthly" ? monthly : yearly;

  return (
    <section className="section section-plan grid">
      <div
        className="bg-main text-white [grid-area:1/1/2/2] bg-no-repeat bg-cover h-[30em] bg-[url(/img/bg/bg1.webp)] py-20"
      />
      <div className="[grid-area:1/1/2/2] text-white pt-20">
        <div className="container text-center">
          <div className="mx-auto max-w-xl mb-4">
            <p className="text-sm mb-1">Our Pricing</p>
            <h2>Choose From Our Lowest Plans and Prices</h2>
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
                Monthly
              </button>
              <button
                type="button"
                className={`tab ${tab === "yearly" ? "tab-active" : ""}`}
                onClick={() => setTab("yearly")}
              >
                Yearly
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
