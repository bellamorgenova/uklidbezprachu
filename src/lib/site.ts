/** Veřejná URL webu (Vercel: NEXT_PUBLIC_SITE_URL). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://uklidbezprachu.cz"
).replace(/\/$/, "");

export const SITE_PHONE_E164 = "+420604390984";
export const SITE_PHONE_DISPLAY = "+420 604 390 984";
export const SITE_AREA_SERVED = "Orlickoústecko";
