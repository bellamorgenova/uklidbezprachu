import { sectionHref, SECTION } from "./sections";

export const SITE_TITLE = "uklidbezprachu_template";
export const SITE_DESCRIPTION =
  "Specialized, efficient, and thorough cleaning services";

/** Hlavní výzva k akci (hlavička + mobilní menu). */
export const CTA_LABEL = "Poptat služby";

/** Položky menu = kotvy na sekcích homepage. */
export const NAV_MENU = [
  { url: sectionHref(SECTION.about), title: "O nás" },
  { url: sectionHref(SECTION.services), title: "Služby" },
  { url: sectionHref(SECTION.team), title: "Tým" },
];
