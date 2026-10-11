import { TeamCard } from "@/components/card/TeamCard";
import { TeamHiringCard } from "@/components/card/TeamHiringCard";
import { getTeamMember } from "@/lib/content";
import { SECTION } from "@/lib/sections";

export function TeamSection() {
  const bella = getTeamMember("t1");
  return (
    <section className="page-section section section-services">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-b border-b-main pb-10"
        >
          <h2 id={SECTION.team} className="section-anchor">
            Úklid nás opravdu baví
          </h2>
          <div>
            <p className="font-semibold mb-3 text-xl">Kdo u Vás uklízí</p>
            <p className="mb-3">
              Jmenuji se Bella a úklidům se věnuji již několik let. Úklid byla vždy
              moje vášeň a tak jsem zkrátka začala dělat, co mě baví. Přijedu a s
              úsměvem uklidím vše, co mi přijde pod ruce! :)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto">
          {bella ? (
            <TeamCard id={bella.id} data={bella.data} />
          ) : (
            <TeamCard
              id="t1"
              data={{
                title: "Bella Morgenová",
                description: "",
                pubDate: new Date(),
                rating: 0,
              }}
            />
          )}
          <TeamHiringCard />
        </div>
      </div>
    </section>
  );
}
