import { TeamCard } from "@/components/card/TeamCard";
import { TeamHiringCard } from "@/components/card/TeamHiringCard";
import { getTeamMember } from "@/lib/content";
import { sectionHref, SECTION } from "@/lib/sections";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tým",
};

export default function TeamListPage() {
  const bella = getTeamMember("t1");
  return (
    <section className="section">
      <div className="container">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Domů</Link></li>
            <li><Link href={sectionHref(SECTION.team)}>Tým</Link></li>
          </ul>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-stretch max-w-4xl">
          {bella && (
            <li>
              <TeamCard id={bella.id} data={bella.data} />
            </li>
          )}
          <li>
            <TeamHiringCard />
          </li>
        </ul>
      </div>
    </section>
  );
}
