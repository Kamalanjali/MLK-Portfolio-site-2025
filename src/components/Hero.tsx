import { Button } from "@/components/ui/enhanced-button"
import { Github, Linkedin, Mail, Briefcase, Rocket, Layers, Server } from "lucide-react"
import heroBackground from "@/assets/hero-background.jpg"
const profilePhotoUrl = "/lovable-uploads/dbe46c0f-a10d-4d8a-80c9-33bfeaa203ca.png"

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-subtle" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          {/* Profile and Name Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src={profilePhotoUrl} 
                  alt="Lakshmi Kamalanjali Mandalika" 
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30 shadow-glow hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent font-poppins">
                Lakshmi Kamalanjali
              </h1>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 font-poppins">
                Mandalika
              </h2>
              <div className="text-xl md:text-2xl text-muted-foreground animate-fade-in-left">
                <p className="mb-3 text-lg md:text-xl text-foreground/90 font-medium max-w-2xl">
                  Full Stack JavaScript Developer Building Production-Ready MERN Applications
                </p>
                <p className="text-sm md:text-base max-w-2xl leading-relaxed">
                  React • Node.js • Express • MongoDB • REST APIs • JWT Auth • OAuth • Deployment
                </p>
                <p className="text-base mt-4 text-accent">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
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
        </div>

        {/* Credibility Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in">
          {[
            { icon: <Briefcase className="w-5 h-5" />, label: "2+ Years Experience" },
            { icon: <Rocket className="w-5 h-5" />, label: "Production Projects" },
            { icon: <Layers className="w-5 h-5" />, label: "MERN Stack Specialist" },
            { icon: <Server className="w-5 h-5" />, label: "Backend & API Development" },
          ].map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-3 p-4 rounded-lg bg-card/40 backdrop-blur-glass border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-primary">{m.icon}</div>
              <span className="text-sm font-medium text-foreground/90">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero