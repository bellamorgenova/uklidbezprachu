import { ServiceCard } from "@/components/card/ServiceCard";
import type { ContentItem, ServiceFrontmatter } from "@/lib/content";
import { SECTION } from "@/lib/sections";

export function ServicesSection({
  services,
}: {
  services: ContentItem<ServiceFrontmatter>[];
}) {
  return (
    <section id={SECTION.services} className="page-section section section-services">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-b border-b-main pb-10"
        >
          <h2>Služby, které nejvíc využíváte</h2>
          <div>
            <p className="font-semibold mb-3 text-xl">Co umíme</p>
            <p className="mb-3">
              Plán úklidu přizpůsobíme vašim potřebám — většina zákazníků volí
              pravidelný úklid v týdenním nebo měsíčním rytmu.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 relative"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} id={service.id} data={service.data} />
          ))}
        </div>
      </div>
    </section>
  );
}
