import { Mail, MapPin, PhoneCall } from "lucide-react";

import { SECTION } from "@/lib/sections";

export function Contacts() {
  return (
    <section id={SECTION.contact} className="page-section section section-contacts">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-xl lg:text-[40px]">Kde nás najdete</h3>
            <div className="mt-10 grid gap-6">
              <div
                className="grid grid-cols-[54px_1fr] gap-4 items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div
                  className="bg-main text-white flex items-center justify-center rounded-full w-13.5 h-13.5"
                >
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-0">Telefon</p>
                  <a href="tel:+420000000000">+420 000 000 000</a>
                  <p className="text-sm text-gray-600 mt-1">(doplňte své číslo)</p>
                </div>
              </div>
              <div
                className="grid grid-cols-[54px_1fr] gap-4 items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div
                  className="bg-main text-white flex items-center justify-center rounded-full w-13.5 h-13.5"
                >
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-0">E-mail</p>
                  <a href="mailto:info@uklidbezprachu.cz">info@uklidbezprachu.cz</a>
                </div>
              </div>
              <div
                className="grid grid-cols-[54px_1fr] gap-4 items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div
                  className="bg-main text-white flex items-center justify-center rounded-full w-13.5 h-13.5"
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-0">Oblast působnosti</p>
                  <address className="not-italic">
                    Česká republika — konkrétní města doplníte
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm mb-0">Poptávka</p>
            <h3 className="font-semibold text-xl lg:text-[40px] mb-3">Napište nám</h3>
            <p>
              Vyplňte krátký formulář — ozveme se co nejdříve s návrhem termínu a
              orientační cenou. Na poptávky odpovídáme obvykle do jednoho pracovního dne.
            </p>
            <form action="/" method="post" className="mt-8 grid gap-3">
              <fieldset className="fieldset">
                <input
                  type="text"
                  placeholder="Jméno a příjmení"
                  className="input w-full"
                  id="contact-name"
                  name="contact_name"
                  required
                  autoComplete="name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input w-full"
                  id="contact-email"
                  name="contact_email"
                  required
                  autoComplete="email"
                />
              </fieldset>
              <fieldset className="fieldset">
                <textarea
                  className="textarea w-full"
                  placeholder="Popište prosím typ úklidu, velikost prostor a preferovaný termín"
                  id="contact-msg"
                  name="contact_msg"
                  required
                  rows={5}
                />
              </fieldset>
              <button
                className="btn bg-main border-main text-white rounded-lg hover:bg-green-600 shadow-none lg:mr-auto"
                type="submit"
              >
                Odeslat poptávku
              </button>
              <p className="text-xs text-gray-600">
                Odesláním souhlasíte se zpracováním údajů za účelem vyřízení poptávky.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
