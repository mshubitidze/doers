import { unstable_setRequestLocale } from "next-intl/server";
import { AboutTeamSection } from "./_components/about-team-section";
import { HeroSection } from "./_components/hero-section";
import { RegistrationSection } from "./_components/registration-section";
import { TeamSection } from "./_components/team-section";

export default function Home({
  params: { locale },
}: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main className="flex flex-col mb-20">
      <HeroSection />
      <AboutTeamSection />
      <TeamSection />
      <RegistrationSection />
    </main>
  );
}
