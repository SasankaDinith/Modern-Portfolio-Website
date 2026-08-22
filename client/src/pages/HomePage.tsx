import { AboutSection } from "../features/about/AboutSection";
import { BlogsSection } from "../features/blogs/BlogsSection";
import { ContactSection } from "../features/contact/ContactSection";
import { HeroSection } from "../features/hero/HeroSection";
import { JourneySection } from "../features/journey/JourneySection";
import { ProjectsSection } from "../features/projects/ProjectsSection";
import { ServicesSection } from "../features/services/ServicesSection";
import { SkillsSection } from "../features/skills/SkillsSection";
import { PortfolioBackground } from "../components/layout/PortfolioBackground";

import { SocialRail } from "../components/common/SocialRail";
import { Navbar } from "../components/navigation/Navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-900 dark:text-white">
      <PortfolioBackground />

      <Navbar />
      <SocialRail />

      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <ServicesSection />
        <SkillsSection />
        <BlogsSection />
        <ContactSection />
      </main>
    </div>
  );
}