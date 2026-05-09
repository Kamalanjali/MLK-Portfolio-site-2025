import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Users, TrendingUp, Code, Database, Bug, Lightbulb } from "lucide-react"

const Experience = () => {
  const achievements = [
    {
      icon: <Code className="w-5 h-5" />,
      text: "Developed and maintained full-stack web applications using MERN stack, Python, and SQL"
    },
    {
      icon: <Database className="w-5 h-5" />,
      text: "Designed and optimized REST APIs and database queries, improving performance by 20%"
    },
    {
      icon: <Bug className="w-5 h-5" />,
      text: "Resolved 100+ client-reported tickets by identifying root causes and delivering efficient fixes within SLA"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Collaborated with cross-functional teams using Agile methodology to deliver high-quality features"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Participated in software testing, debugging, and deployment to ensure reliability and compliance"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      text: "Mentored interns in basic JavaScript and SQL problem-solving tasks"
    }
  ]

  const technologies = [
    "MERN Stack", "Python", "SQL", "REST APIs", "JavaScript", "Agile", "Testing", "Debugging"
  ]

  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            2+ years of full-stack development expertise
          </p>
        </div>

        <Card variant="glass" className="animate-fade-in-left">
          <CardHeader>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Building className="w-8 h-8 text-primary" />
                  System Engineer
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Infosys Limited
                </CardDescription>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Sep 2021 - Nov 2023</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Key Achievements */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Key Achievements</h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background-soft/50 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="text-accent mt-1 group-hover:text-primary transition-colors">
                      {achievement.icon}
                    </div>
                    <p className="text-card-foreground leading-relaxed">
                      {achievement.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Technologies & Skills</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
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

            {/* Experience Duration */}
            <div className="bg-gradient-glow rounded-lg p-6 border border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2 Years 2 Months</div>
                <div className="text-muted-foreground">Total Professional Experience</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Experience