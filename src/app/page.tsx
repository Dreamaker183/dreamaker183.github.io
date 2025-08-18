import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { QuoteSection } from "@/components/sections/quote-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="px-4">
        <HeroSection />
      </div>
      <div className="px-4">
        <ExperienceSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <QuoteSection />
    </main>
  );
}
