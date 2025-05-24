import { SectionSeparator } from "@/components/atoms/separator";
import { HeaderSection } from "@/components/sections/header-section";
import { SocialLinksSection } from "@/components/sections/links-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
  return (
    <main className="main-container">
      <HeaderSection />
      <SocialLinksSection />
      <SectionSeparator />
      <ProjectsSection />
    </main>
  );
}
