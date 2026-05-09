import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, Calendar, Building2, Droplets, Smartphone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Publications = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation()
  
  return (
    <section className="py-20 px-6" id="publications">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Publications
          </h2>
          <p className="text-xl text-muted-foreground">
            Research contributions in IoT and automation
          </p>
        </div>

        <Card 
          ref={cardRef}
          variant="glass" 
          className={`scroll-animate-left ${cardVisible ? 'animate-in' : ''}`}
        >
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl leading-tight mb-3">
                  Automated Water Flow Control System in Overhead Tanks Using Internet of Things and Mobile Application
                </CardTitle>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">Springer</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <Calendar className="w-4 h-4" />
                    <span>April 21, 2021</span>
                  </div>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    IoT Research
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Abstract */}
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-primary">Abstract</h3>
              <p className="text-card-foreground leading-relaxed text-justify">
                Basically, automation in systems would help to reduce wastage of precious natural resources in various ways, 
                wherein prevention of wastage of water resource to control the water tanks from overflow is crucial. In this 
                automated world, the handling of any kind of devices with comfort is made to be the easiest factor everywhere. 
                However, the overflow and underflow sensors and mobile application should be reliable so that the consumer can 
                rely on this system.
              </p>
              <p className="text-card-foreground leading-relaxed text-justify mt-4">
                Automated water flow control system in overhead tanks using Internet of Things and mobile application uses 
                reliable sensors and mobile application. The application is developed after testing various sensors and finding 
                the best basing on the cost and work efficiency. The mobile application includes features that are not existing 
                such as automated control of tank based on water level selected by user. For this case, three levels are proposed 
                minimum, medium, high. The consumer can change his preference any time. This reduces the water stagnancy for long 
                time. Hence, the proposed methodology has advantages over existing system in saving more water.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30">
                  <Droplets className="w-6 h-6 text-accent" />
                  <span>Automated water level control</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30">
                  <Smartphone className="w-6 h-6 text-accent" />
                  <span>Mobile application interface</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30">
                  <Building2 className="w-6 h-6 text-accent" />
                  <span>IoT sensor integration</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30">
                  <ExternalLink className="w-6 h-6 text-accent" />
                  <span>Cost-effective solution</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {["IoT", "Mobile Development", "Sensors", "Water Management", "Automation", "Android"].map((tech, index) => (
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

            {/* Action Button */}
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                asChild
                className="group"
              >
                <a 
                  href="https://link.springer.com/chapter/10.1007/978-981-33-4501-0_74" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 group-hover:rotate-12 transition-transform" />
                  Read Full Paper
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Publications