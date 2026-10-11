import { TeamCard } from "@/components/card/TeamCard";
import { getTeamMembers } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamListPage() {
  const team = getTeamMembers();
  return (
    <section className="section">
      <div className="container">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Home</Link></li>
            <li>Team</li>
          </ul>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {team.map((person) => (
            <li key={person.id}>
              <TeamCard id={person.id} data={person.data} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
