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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-b border-b-main pb-10">
          <h2 className="capitalize">We always provide the best service</h2>
          <div>
            <div className="flex flex-wrap justify-between items-center gap-3">
              <p className="font-semibold mb-3 text-xl">Services</p>
              <p>
                <a href={`#${SECTION.services}`} className="text-main underline hover:no-underline">
                  Všechny služby
                </a>
              </p>
            </div>
            <p className="mb-3">
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 relative">
          {services.map((service) => (
            <ServiceCard key={service.id} id={service.id} data={service.data} />
          ))}
        </div>
      </div>
    </section>
  );
}
