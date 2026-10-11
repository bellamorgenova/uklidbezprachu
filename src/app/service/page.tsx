import { ServiceCard } from "@/components/card/ServiceCard";
import { getServices } from "@/lib/content";
import { sectionHref, SECTION } from "@/lib/sections";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildPageMetadata({
  title: "Služby",
  path: "/service",
  noIndex: true,
});

export default function ServiceListPage() {
  const services = getServices();
  return (
    <section className="section">
      <div className="container">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Domů</Link></li>
            <li><Link href={sectionHref(SECTION.services)}>Služby</Link></li>
          </ul>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {services.map((post) => (
            <li key={post.id}>
              <ServiceCard id={post.id} data={post.data} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
