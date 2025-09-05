import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Publications from "@/components/Publications"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Publications />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
