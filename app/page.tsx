import { NavBar } from "./components/nav-bar"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { SkillsSection } from "./components/skills-section"
import { ProjectsSection } from "./components/projects-section"
import { TestimonialsSection } from "./components/testimonials"
import { ContactSection } from "./components/contact-section"
import { TechStack } from "./components/tech-stack"
import { CustomCursor } from "./components/custom-cursor"

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechStack />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

