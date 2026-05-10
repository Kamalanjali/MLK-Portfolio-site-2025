import { Button } from "@/components/ui/enhanced-button"
import { Github, Linkedin, Mail, Download, ArrowRight, Send } from "lucide-react"
import heroBackground from "@/assets/hero-background.jpg"
const profilePhotoUrl = "/lovable-uploads/dbe46c0f-a10d-4d8a-80c9-33bfeaa203ca.png"

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-subtle" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 animate-fade-in">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={profilePhotoUrl}
                alt="Lakshmi Kamalanjali Mandalika"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-primary/40 shadow-glow"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-15" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-2 font-poppins bg-gradient-primary bg-clip-text text-transparent">
              Lakshmi Kamalanjali
            </h1>
            <p className="text-base md:text-lg text-foreground/80 font-medium mb-4">
              Full Stack JavaScript Developer
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mb-4">
              Building production-ready MERN applications with secure authentication,
              scalable backend workflows, and deployment-focused engineering.
            </p>
            <p className="text-xs md:text-sm font-mono text-accent mb-8">
              React • Node.js • Express • MongoDB • JWT • REST APIs
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
              <Button variant="hero" size="sm" onClick={() => scrollTo("#projects")} className="group">
                View Projects
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="sm" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-1" />
                  Download Resume
                </a>
              </Button>
              <Button variant="glass" size="sm" onClick={() => scrollTo("#contact")}>
                <Send className="mr-1" />
                Contact
              </Button>
            </div>

            {/* Socials */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://github.com/Kamalanjali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full bg-card/40 backdrop-blur-glass border border-border/50 hover:border-primary/40 hover:bg-card/60 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshmi-kamalanjali-mandalika-4b5119188/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-card/40 backdrop-blur-glass border border-border/50 hover:border-primary/40 hover:bg-card/60 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kamalanjalimetta31@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full bg-card/40 backdrop-blur-glass border border-border/50 hover:border-primary/40 hover:bg-card/60 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
