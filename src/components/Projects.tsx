import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  ServerCog,
  CheckCircle2,
  Activity,
  Lock,
  FileCheck2,
  Terminal,
  Layers,
  CircleDot,
  StickyNote,
  Code2,
  Database,
  Rocket,
  Wrench,
  KeyRound,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

type Pillar = {
  icon: JSX.Element
  title: string
  blurb: string
  items: string[]
}

type Group = {
  icon: JSX.Element
  title: string
  items: string[]
}

type Project = {
  name: string
  status: string
  icon: JSX.Element
  description: string
  github: string
  live: string
  stack: string[]
  pillars: Pillar[]
  pillarsHeading: string
  pillarsSubheading: string
  productionGroups: Group[]
  productionHeading: string
  productionSubheading: string
  productionTag: string
}

const projects: Project[] = [
  {
    name: "Satvik Basket",
    status: "Deployed",
    icon: <Layers className="w-7 h-7 text-primary" />,
    description:
      "A scalable full-stack ecommerce platform built on the MERN stack, designed around backend reliability, secure authentication, verified payments, and production engineering practices.",
    github: "https://github.com/Kamalanjali/Satvik-Basket-MERN-main",
    live: "https://satvikbasket.vercel.app/",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Google OAuth",
      "Razorpay",
      "Zod",
      "Helmet",
      "Pino",
      "Sentry",
      "REST API",
    ],
    pillarsHeading: "Application Architecture",
    pillarsSubheading: "Core domain modules powering the user-facing experience.",
    pillars: [
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Authentication & Authorization",
        blurb:
          "Hardened identity layer with multiple sign-in paths and route-level access control.",
        items: [
          "Google OAuth 2.0",
          "JWT authentication",
          "Email / password login",
          "Protected routes",
          "Password reset flow",
          "Profile management",
          "Route-level authorization",
          "Secure API authorization workflows",
        ],
      },
      {
        icon: <ShoppingBag className="w-5 h-5" />,
        title: "Ecommerce Features",
        blurb:
          "End-to-end shopping flow built around persistence, ownership, and reload safety.",
        items: [
          "Product listing and filtering",
          "Cart management with persistence",
          "Protected checkout flow",
          "Address CRUD management",
          "Order creation and order history",
          "Order ownership validation",
          "Reload-safe order success flow",
        ],
      },
      {
        icon: <CreditCard className="w-5 h-5" />,
        title: "Payment Integration",
        blurb: "Razorpay-backed payments with verified, server-side reconciliation.",
        items: [
          "Razorpay integration",
          "Secure payment verification",
          "Payment status handling",
          "Backend verification workflows",
          "Order / payment synchronization",
        ],
      },
    ],
    productionHeading: "Production Engineering",
    productionSubheading:
      "Reliability, security, and observability layered on top of the product.",
    productionTag: "prod-ready",
    productionGroups: [
      {
        icon: <ServerCog className="w-5 h-5" />,
        title: "Backend Reliability",
        items: [
          "Centralized error handling",
          "Standardized API responses",
          "Async error wrappers",
          "Graceful shutdown handling",
          "Process-level exception handling",
          "Production-safe error masking",
        ],
      },
      {
        icon: <FileCheck2 className="w-5 h-5" />,
        title: "Validation & API Safety",
        items: [
          "Zod validation middleware",
          "Request payload validation",
          "Consistent validation responses",
          "Safer request lifecycle handling",
        ],
      },
      {
        icon: <Lock className="w-5 h-5" />,
        title: "Security Hardening",
        items: [
          "Helmet security headers",
          "API rate limiting",
          "HPP protection",
          "JWT hardening",
          "Payload size limiting",
          "Sensitive log redaction",
          "Secure environment configuration",
        ],
      },
      {
        icon: <Activity className="w-5 h-5" />,
        title: "Monitoring & Observability",
        items: [
          "Pino structured logging",
          "Sentry runtime monitoring",
          "/health operational endpoint",
          "UptimeRobot uptime monitoring",
          "Production diagnostics support",
        ],
      },
      {
        icon: <Terminal className="w-5 h-5" />,
        title: "Operational Improvements",
        items: [
          "Cleaner middleware architecture",
          "Improved request lifecycle management",
          "Better authentication flow handling",
          "Faster and more stable product loading",
          "Improved debugging workflows",
        ],
      },
    ],
  },
  {
    name: "NoteFlow",
    status: "Deployed",
    icon: <StickyNote className="w-7 h-7 text-primary" />,
    description:
      "A full-stack MERN notes management platform designed around authenticated user workflows, maintainable frontend architecture, deployment reliability, and scalable backend request handling.",
    github: "https://github.com/Kamalanjali/NoteFlow-MERN",
    live: "https://noteflow-mern.vercel.app/",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Google OAuth",
      "REST API",
      "Vercel",
    ],
    pillarsHeading: "Application Architecture",
    pillarsSubheading:
      "Authenticated, state-driven workflows backed by a modular full-stack structure.",
    pillars: [
      {
        icon: <KeyRound className="w-5 h-5" />,
        title: "Authentication & User Workflows",
        blurb:
          "Standardized authentication flows with secure session and request handling.",
        items: [
          "JWT authentication",
          "Google OAuth integration",
          "Protected routes",
          "Secure backend request handling",
          "Authenticated CRUD workflows",
          "User session management",
          "Standardized authentication flows",
        ],
      },
      {
        icon: <StickyNote className="w-5 h-5" />,
        title: "Notes Management Features",
        blurb:
          "Per-user, state-driven notes workflows with reusable, themed UI components.",
        items: [
          "Create, edit, update, and delete notes",
          "Responsive note management workflows",
          "Protected user-specific notes",
          "State-driven UI workflows",
          "Organized frontend architecture",
          "Reusable component structure",
          "Dark / light theme support",
        ],
      },
      {
        icon: <Code2 className="w-5 h-5" />,
        title: "Frontend Engineering",
        blurb:
          "Component-based React architecture focused on maintainability and clean structure.",
        items: [
          "React.js component-based architecture",
          "Responsive SaaS-style UI",
          "Reusable UI components",
          "Protected frontend routes",
          "Improved maintainability through modular structure",
          "Streamlined frontend workflow organization",
        ],
      },
    ],
    productionHeading: "Backend, Deployment & Engineering",
    productionSubheading:
      "Backend architecture, deployment reliability, and production debugging practices.",
    productionTag: "production-grade",
    productionGroups: [
      {
        icon: <Database className="w-5 h-5" />,
        title: "Backend Engineering",
        items: [
          "Express.js REST API architecture",
          "Middleware-based request handling",
          "JWT-based authorization workflows",
          "Centralized error handling",
          "Standardized API response structure",
          "Async backend request handling",
          "Secure backend workflow organization",
        ],
      },
      {
        icon: <Rocket className="w-5 h-5" />,
        title: "Deployment & Production Debugging",
        items: [
          "Cloud-hosted MERN deployment",
          "Frontend-backend integration handling",
          "Deployment issue resolution",
          "Runtime error debugging",
          "Authentication flow debugging",
          "Production stability improvements",
          "API integration troubleshooting",
        ],
      },
      {
        icon: <Wrench className="w-5 h-5" />,
        title: "Engineering Improvements",
        items: [
          "Modular frontend and backend folder structure",
          "Simplified state-driven workflows",
          "Improved maintainability",
          "Cleaner request lifecycle handling",
          "Better frontend / backend coordination",
          "Production-oriented debugging workflow",
        ],
      },
    ],
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <Card
      ref={elementRef}
      variant="glass"
      className={`scroll-animate-right ${isVisible ? "animate-in" : ""}`}
    >
      {/* Header */}
      <CardHeader className="border-b border-border/40">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              {project.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <CardTitle className="text-2xl md:text-3xl leading-tight">
                  {project.name}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="bg-accent/10 text-accent border-accent/30 flex items-center gap-1.5"
                >
                  <CircleDot className="w-3 h-3" />
                  {project.status}
                </Badge>
              </div>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
            <Button variant="hero" size="sm" asChild className="group">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 group-hover:rotate-12 transition-transform" />
                Source Code
              </a>
            </Button>
            <Button variant="glass" size="sm" asChild className="group">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-12 pt-8">
        {/* Tech Stack */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 bg-border/40" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Stack
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Core Pillars */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary mb-1">
              {project.pillarsHeading}
            </h3>
            <p className="text-sm text-muted-foreground">{project.pillarsSubheading}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-border/40 bg-background-soft/40 p-5 hover:border-primary/40 hover:bg-background-soft/60 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {p.icon}
                  </div>
                  <h4 className="font-semibold text-card-foreground leading-tight">
                    {p.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.blurb}
                </p>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-card-foreground/90"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Production / Engineering Groups */}
        <div>
          <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-1">
                {project.productionHeading}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.productionSubheading}
              </p>
            </div>
            <Badge
              variant="outline"
              className="font-mono text-xs bg-accent/10 text-accent border-accent/30"
            >
              {project.productionTag}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.productionGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-lg border border-border/40 bg-background-soft/30 p-5 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
                  <div className="p-1.5 rounded-md bg-accent/10 text-accent border border-accent/20">
                    {g.icon}
                  </div>
                  <h4 className="font-semibold text-sm text-card-foreground">
                    {g.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const Projects = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? "animate-in" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Production-oriented full-stack engineering
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
