import { Contacts } from "@/components/homepage/Contacts";
import { FeedbackSection } from "@/components/homepage/FeedbackSection";
import { OurWorkSection } from "@/components/homepage/OurWorkSection";
import { Hero } from "@/components/homepage/Hero";
import { PricingSection } from "@/components/homepage/PricingSection";
import { Sec1 } from "@/components/homepage/Sec1";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { TeamSection } from "@/components/homepage/TeamSection";
import { Welcome } from "@/components/homepage/Welcome";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServices } from "@/lib/content";
import { SITE_DESCRIPTION } from "@/lib/consts";
import { buildHomeJsonLd, buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Úklid domácností a firem v Orlickoústecku",
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  const services = getServices();
  const jsonLd = buildHomeJsonLd(
    services.map((service) => ({
      title: service.data.title,
      description: service.data.description,
      path: `/service/${service.id}`,
    })),
  );

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Hero />
      <Welcome />
      <ServicesSection services={services} />
      <Sec1 />
      <TeamSection />
      <PricingSection />
      <OurWorkSection />
      <FeedbackSection />
      <Contacts />
    </div>
  );
}
