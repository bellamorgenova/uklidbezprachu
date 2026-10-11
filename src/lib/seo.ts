import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/consts";
import { SITE_AREA_SERVED, SITE_PHONE_E164, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

/** Obrázek pro sdílení na sociálních sítích (min. doporučeno 1200×630). */
export const DEFAULT_OG_IMAGE = "/img/bg/hero-uklid-green.jpg";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

type PageMetadataOptions = {
  /** Krátký titulek stránky (doplní se template z layoutu), nebo `null` pro výchozí název webu. */
  title?: string | null;
  description?: string;
  /** Cesta bez domény, např. `/` nebo `/service/s2`. */
  path: string;
  /** Neindexovat (např. duplicitní stránky se stejným obsahem jako homepage). */
  noIndex?: boolean;
  ogImage?: string;
};

export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);

  const metadata: Metadata = {
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "cs_CZ",
      url,
      siteName: SITE_TITLE,
      title: title ? `${title} | ${SITE_TITLE}` : SITE_TITLE,
      description,
      images: [{ url: imageUrl, alt: SITE_TITLE }],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${SITE_TITLE}` : SITE_TITLE,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };

  if (title !== null && title !== undefined) {
    metadata.title = title;
  } else if (title === null) {
    metadata.title = SITE_TITLE;
  }

  return metadata;
}

type ServiceForSchema = { title: string; description: string; path: string };

export function buildHomeJsonLd(services: ServiceForSchema[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        inLanguage: "cs-CZ",
      },
      {
        "@type": "CleaningService",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_TITLE,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        telephone: SITE_PHONE_E164,
        image: absoluteUrl("/img/bezprachu-emblem.png"),
        areaServed: {
          "@type": "AdministrativeArea",
          name: SITE_AREA_SERVED,
        },
        serviceType: [
          "Úklid domácností",
          "Úklid kanceláří",
          "Generální úklid",
          "Tepování",
          "Debordelizace",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Služby úklidu",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: absoluteUrl(service.path),
            },
          })),
        },
      },
    ],
  };
}
