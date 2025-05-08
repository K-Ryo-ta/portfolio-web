import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ProjectSection from "@/components/section/ProjectSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </main>
    </div>
  );
}
