import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ShoppingCart, Code, Layers, Database } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Projects = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation()
  
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Current Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Building innovative solutions with modern technology
          </p>
        </div>

        <Card 
          ref={cardRef}
          variant="glass" 
          className={`scroll-animate-right ${cardVisible ? 'animate-in' : ''}`}
        >
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <ShoppingCart className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl leading-tight mb-3">
                  Satvik Basket
                </CardTitle>
                <CardDescription className="text-lg">
                  Full-stack e-commerce application built on the MERN stack
                </CardDescription>
                <Badge variant="outline" className="mt-3 bg-accent/10 text-accent border-accent/30">
                  Deployed
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Project Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Project Overview</h3>
              <p className="text-card-foreground leading-relaxed">
                A deployed full-stack e-commerce application built on the MERN stack, featuring
                secure authentication, payment integration, order management, and a responsive,
                user-friendly shopping experience.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30">
                  <Code className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-medium">Frontend</div>
                    <div className="text-sm text-muted-foreground">React.js, Redux</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30">
                  <Database className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-medium">Backend</div>
                    <div className="text-sm text-muted-foreground">Node.js, Express.js</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30">
                  <Layers className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-medium">Database</div>
                    <div className="text-sm text-muted-foreground">MongoDB</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30">
                  <ShoppingCart className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-medium">Integrations</div>
                    <div className="text-sm text-muted-foreground">Razorpay, Google OAuth, JWT</div>
                  </div>
                </div>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-3">
                {["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Google OAuth", "Razorpay", "REST API"].map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Google OAuth authentication",
                  "Razorpay payment integration (test APIs, swappable to live)",
                  "JWT-based secure sessions",
                  "Orders page with order history",
                  "Custom user profile page",
                  "Shopping cart and checkout",
                  "Multiple addresses with default selection",
                  "Add and delete saved addresses",
                  "Fully responsive design",
                  "REST API architecture"
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-glow border border-primary/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                asChild
                className="group"
              >
                <a 
                  href="https://github.com/Kamalanjali/Satvik-Basket-MERN-main" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 group-hover:rotate-12 transition-transform" />
                  View Source Code
                </a>
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                asChild
                className="group"
              >
                <a
                  href="https://satvikbasket.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Projects