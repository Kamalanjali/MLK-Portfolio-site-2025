import { Button } from "@/components/ui/enhanced-button"
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react"
import heroBackground from "@/assets/hero-background.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-subtle" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Lakshmi Kamalanjali
          </h1>
          <h2 className="text-6xl md:text-8xl font-light mb-4">
            Mandalika
          </h2>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-left">
            <p className="mb-2">Full Stack Developer</p>
            <p className="text-lg">MERN Stack • Python • IoT</p>
            <p className="text-base mt-4 text-accent">Hyderabad, Telangana, India</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-right">
          <Button variant="hero" size="xl" className="group">
            <Download className="mr-2 group-hover:rotate-12 transition-transform" />
            Download Resume
          </Button>
          <Button variant="glass" size="xl">
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in">
          <a 
            href="https://github.com/Kamalanjali" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/40 backdrop-blur-glass border border-border/50 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/lakshmi-kamalanjali-mandalika-4b5119188/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/40 backdrop-blur-glass border border-border/50 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:kamalanjalimetta31@gmail.com"
            className="p-3 rounded-full bg-card/40 backdrop-blur-glass border border-border/50 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="tel:+918309452896"
            className="p-3 rounded-full bg-card/40 backdrop-blur-glass border border-border/50 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:scale-110"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero