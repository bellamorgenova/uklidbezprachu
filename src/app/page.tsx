import { Contacts } from "@/components/homepage/Contacts";
import { FeedbackSection } from "@/components/homepage/FeedbackSection";
import { Hero } from "@/components/homepage/Hero";
import { PricingSection } from "@/components/homepage/PricingSection";
import { Sec1 } from "@/components/homepage/Sec1";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { TeamSection } from "@/components/homepage/TeamSection";
import { Welcome } from "@/components/homepage/Welcome";
import { getServices, getTeamMembers } from "@/lib/content";

export default function HomePage() {
  const services = getServices();
  const team = getTeamMembers().slice(0, 3);

  return (
    <div>
      <Hero />
      <Welcome />
      <ServicesSection services={services} />
      <Sec1 />
      <TeamSection team={team} />
      <PricingSection />
      <FeedbackSection />
      <Contacts />
    </div>
  );
}
