import { TeamCard } from "@/components/card/TeamCard";
import type { ContentItem, TeamFrontmatter } from "@/lib/content";
import { SECTION } from "@/lib/sections";

export function TeamSection({
  team,
}: {
  team: ContentItem<TeamFrontmatter>[];
}) {
  return (
    <section id={SECTION.team} className="page-section section section-services">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-b border-b-main pb-10">
          <h2 className="capitalize">
            Effective Cleaning Requires an Expert Cleaning Team
          </h2>
          <div>
            <div className="flex flex-wrap justify-between items-center gap-3">
              <p className="font-semibold mb-3 text-xl">Expert Team</p>
              <p>
                <a href={`#${SECTION.team}`} className="text-main underline hover:no-underline">
                  Celý tým
                </a>
              </p>
            </div>
            <p className="mb-3">
              We have professional expert cleaning staff ensuring top-notch
              cleanliness and hygiene for your space.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 relative">
          {team.map((person) => (
            <TeamCard key={person.id} id={person.id} data={person.data} />
          ))}
        </div>
      </div>
    </section>
  );
}
