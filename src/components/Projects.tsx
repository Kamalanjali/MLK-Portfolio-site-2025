import { Card, CardContent } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import satvikPreview from "@/assets/satvik-basket-preview.png"
import noteflowPreview from "@/assets/noteflow-preview.png"

type Project = {
  name: string
  tagline: string
  description: string
  github: string
  live: string
  stack: string[]
  highlights: string[]
  preview: string
  domain: string
}

const projects: Project[] = [
  {
    name: "Satvik Basket",
    tagline: "Full-Stack MERN Ecommerce",
    description:
      "Production-ready ecommerce platform with secure authentication, verified payments, and a modular backend architecture.",
    github: "https://github.com/Kamalanjali/Satvik-Basket-MERN-main",
    live: "https://satvikbasket.vercel.app/",
    domain: "satvikbasket.vercel.app",
    preview: satvikPreview,
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Razorpay"],
    highlights: [
      "JWT + Google OAuth authentication",
      "Razorpay payment integration",
      "Modular backend architecture",
      "Production-focused error handling",
      "Responsive UI",
    ],
  },
  {
    name: "NoteFlow",
    tagline: "MERN Notes Platform",
    description:
      "Authenticated notes platform with protected user workflows, REST API integration, and a clean responsive React frontend.",
    github: "https://github.com/Kamalanjali/NoteFlow-MERN",
    live: "https://noteflow-mern.vercel.app/",
    domain: "noteflow-mern.vercel.app",
    preview: noteflowPreview,
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST API"],
    highlights: [
      "Protected user workflows",
      "CRUD note management",
      "Responsive React architecture",
      "Backend API integration",
      "Production deployment handling",
    ],
  },
]

const BrowserFrame = ({ src, domain }: { src: string; domain: string }) => (
  <div className="rounded-lg overflow-hidden border border-border/50 bg-background-soft/40 shadow-card">
    <div className="flex items-center gap-2 px-3 py-2 border-b border-border/40 bg-background-soft/60">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
      </div>
      <div className="flex-1 mx-2 px-3 py-1 rounded text-[11px] font-mono text-muted-foreground bg-background/60 border border-border/30 truncate">
        {domain}
      </div>
    </div>
    <img src={src} alt={domain} loading="lazy" className="w-full h-auto block" />
  </div>
)

const ProjectCard = ({ project }: { project: Project }) => {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <Card
      ref={elementRef}
      variant="glass"
      className={`scroll-animate ${isVisible ? "animate-in" : ""}`}
    >
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Preview */}
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="transition-transform duration-300 group-hover:-translate-y-1">
              <BrowserFrame src={project.preview} domain={project.domain} />
            </div>
          </a>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 text-xs">
                Deployed
              </Badge>
            </div>
            <p className="text-sm text-primary font-mono mb-3">{project.tagline}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            <ul className="space-y-2 mb-5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-card-foreground/90">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((s) => (
                <Badge
                  key={s}
                  variant="secondary"
                  className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                >
                  {s}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="sm" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1" />
                  Live Demo
                </a>
              </Button>
              <Button variant="glass" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const Projects = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section className="py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 scroll-animate ${titleVisible ? "animate-in" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-base text-muted-foreground">
            Production-oriented full-stack engineering
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
