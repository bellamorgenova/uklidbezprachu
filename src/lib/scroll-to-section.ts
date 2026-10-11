const HEADER_SELECTOR = "header.header";
const EXTRA_GAP_PX = 12;

export function getSiteHeaderOffset(): number {
  const header = document.querySelector(HEADER_SELECTOR);
  const height = header?.getBoundingClientRect().height ?? 0;
  return height + EXTRA_GAP_PX;
}

export function scrollToSectionById(
  id: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const offset = getSiteHeaderOffset();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}
