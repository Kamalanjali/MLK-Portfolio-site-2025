import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Timeline from "@/components/Timeline"
import Skills from "@/components/Skills"
import Certificates from "@/components/Certificates"
import Publications from "@/components/Publications"
import Contact from "@/components/Contact"
import ScrollToTop from "@/components/ScrollToTop"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Timeline />
      <Skills />
      <Certificates />
      <Publications />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
