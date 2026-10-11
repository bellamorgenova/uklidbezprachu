import { sectionHref, SECTION } from "./sections";

export const SITE_TITLE = "Úklid bez prachu";
export const SITE_DESCRIPTION =
  "Profesionální úklid domácností a firem v Orlickoústecku — běžný i generální úklid, tepování a debordelizace. Spolehlivě, pečlivě a za férové ceny.";

/** Hlavní výzva k akci (hlavička + mobilní menu). */
export const CTA_LABEL = "Poptat služby";

/** Třídy primárního CTA tlačítka (hover, active, focus). */
export const CTA_BUTTON_CLASS = "btn btn-cta rounded-lg";

/** Položky menu = kotvy na sekcích homepage. */
export const NAV_MENU = [
  { url: sectionHref(SECTION.about), title: "O nás" },
  { url: sectionHref(SECTION.services), title: "Služby" },
  { url: sectionHref(SECTION.team), title: "Tým" },
  { url: sectionHref(SECTION.pricing), title: "Ceník" },
  { url: sectionHref(SECTION.work), title: "Naše práce" },
  { url: sectionHref(SECTION.reviews), title: "Reference" },
];
