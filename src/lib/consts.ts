export const SITE_TITLE = "uklidbezprachu_template";
export const SITE_DESCRIPTION =
  "Specialized, efficient, and thorough cleaning services";

import { sectionHref, SECTION } from "./sections";

/** Položky menu = kotvy na sekcích homepage. */
export const NAV_MENU = [
  { url: sectionHref(SECTION.home), title: "Úvod" },
  { url: sectionHref(SECTION.about), title: "O nás" },
  { url: sectionHref(SECTION.services), title: "Služby" },
  { url: sectionHref(SECTION.team), title: "Tým" },
  { url: sectionHref(SECTION.blog), title: "Blog" },
  { url: sectionHref(SECTION.contact), title: "Kontakt" },
];
