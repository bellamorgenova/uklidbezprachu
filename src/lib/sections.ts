/** Kotvy sekcí na jednostránkovém layoutu (homepage). */
export const SECTION = {
  home: "uvod",
  services: "sluzby",
  about: "o-nas",
  team: "tym",
  contact: "kontakt",
  pricing: "cenik",
  reviews: "reference",
} as const;

export type SectionId = (typeof SECTION)[keyof typeof SECTION];

export function sectionHref(id: SectionId): string {
  return `/#${id}`;
}
