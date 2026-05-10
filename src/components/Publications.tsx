import { Card, CardContent } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Publications = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation()

  return (
    <section className="py-16 px-6" id="publications">
      <div className="max-w-4xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-10 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Publications
          </h2>
          <p className="text-base text-muted-foreground">
            Published research in IoT and automation
          </p>
        </div>

        <Card
          ref={cardRef}
          variant="glass"
          className={`scroll-animate ${cardVisible ? 'animate-in' : ''}`}
        >
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold leading-snug mb-2">
                  Automated Water Flow Control System in Overhead Tanks Using IoT and Mobile Application
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="text-primary font-medium">Springer</span>
                  <span>•</span>
                  <span>April 2021</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {["IoT", "Automation", "Mobile App", "Sensors"].map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="px-2 py-0.5 text-xs bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </Badge>
              ))}
            </div>

            <Button variant="hero" size="sm" asChild className="group">
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-33-4501-0_74"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1.5 group-hover:rotate-12 transition-transform" />
                Read Publication
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Publications
