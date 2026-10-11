import { TeamCard } from "@/components/card/TeamCard";
import type { ContentItem, TeamFrontmatter } from "@/lib/content";
import { SECTION } from "@/lib/sections";

export function TeamSection({
  team,
}: {
  team: ContentItem<TeamFrontmatter>[];
}) {
  return (
    <section className="page-section section section-services">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-b border-b-main pb-10"
        >
          <h2 id={SECTION.team} className="section-anchor">
            Čistota zvládneme jen s dobrým týmem
          </h2>
          <div>
            <p className="font-semibold mb-3 text-xl">Kdo u vás uklízí</p>
            <p className="mb-3">
              Naši pracovníci mají zkušenosti s běžnými domácnostmi i kancelářemi.
              Dbáme na šetrnost k vašemu majetku a na to, aby výsledek byl
              vidět i cítit.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 relative"
        >
          {team.map((person) => (
            <TeamCard key={person.id} id={person.id} data={person.data} />
          ))}
        </div>
      </div>
    </section>
  );
}
