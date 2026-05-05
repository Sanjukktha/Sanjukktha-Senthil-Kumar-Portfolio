import { Navigation } from "@/components/navigation";
import { AnimatedCursor } from "@/components/animated-cursor";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <AnimatedCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer
        style={{
          background: "#080f1e",
          color: "rgba(255,255,255,0.25)",
          textAlign: "center",
          padding: "1.5rem",
          fontSize: "0.78rem",
          letterSpacing: "0.04em",
        }}
      >
        © {new Date().getFullYear()} Sanjukktha Senthil Kumar · Dallas, TX
      </footer>
    </>
  );
}
