import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Badge } from "@/components/ui/badge"
import { Code2, Wrench } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const primary = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Git / GitHub",
]

const secondary = [
  "Redux",
  "Tailwind CSS",
  "Firebase",
  "OAuth",
  "Vercel",
  "Render",
  "Postman",
]

const Skills = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation()

  return (
    <section className="py-16 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 scroll-animate ${titleVisible ? "animate-in" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            Core full-stack toolkit, focused on production MERN development
          </p>
        </div>

        <div
          ref={cardRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 scroll-animate ${cardVisible ? "animate-in" : ""}`}
        >
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-md bg-primary/10 text-primary border border-primary/20">
                  <Code2 className="w-5 h-5" />
                </div>
                Primary Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {primary.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-md bg-accent/10 text-accent border border-accent/20">
                  <Wrench className="w-5 h-5" />
                </div>
                Secondary Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {secondary.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="px-3 py-1.5 text-sm bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-colors"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills
