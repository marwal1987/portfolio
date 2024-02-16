import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
