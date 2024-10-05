import Navigate from "@/components/fuctional/Navigate";
import AboutMe from "@/components/index/AboutMe";
import Contact from "@/components/index/Contact";
import HeroSection from "@/components/index/HeroSection";
import Projects from "@/components/index/Projects";
import Skills from "@/components/index/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Navigate />
    </div>
  );
}
