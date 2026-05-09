import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Timeline from "@/components/Timeline"
import Publications from "@/components/Publications"
import Projects from "@/components/Projects"
import Certificates from "@/components/Certificates"
import Contact from "@/components/Contact"
import ScrollToTop from "@/components/ScrollToTop"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Timeline />
      <Publications />
      <Projects />
      <Certificates />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
