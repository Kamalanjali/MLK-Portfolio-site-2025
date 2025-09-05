import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, School, BookOpen, Award } from "lucide-react"

const Education = () => {
  const educationData = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      degree: "B.Tech (Computer Science and Engineering)",
      institution: "Dadi Institute of Engineering and Technology, Anakapalle",
      duration: "2016 - 2020",
      score: "CGPA: 7.64",
      type: "graduation"
    },
    {
      icon: <School className="w-8 h-8 text-accent" />,
      degree: "Intermediate (Mathematics, Physics and Chemistry)",
      institution: "Sri Chaitanya Junior College, Steel Plant, Visakhapatnam",
      duration: "2014 - 2016",
      score: "925/1000",
      board: "Board of Intermediate Education, Andhra Pradesh",
      type: "intermediate"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent-soft" />,
      degree: "10th Class",
      institution: "Sri Chaitanya English Medium School, Anakapalle",
      duration: "2014",
      board: "Secondary School of Education, Andhra Pradesh",
      type: "school"
    }
  ]

  return (
    <section className="py-20 px-6" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic journey in Computer Science & Engineering
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              variant="floating" 
              className={`animate-fade-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-background-soft border border-border/30">
                      {edu.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl leading-tight">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="text-sm font-medium bg-primary/10 text-primary border-primary/30"
                  >
                    {edu.duration}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 items-center">
                  {edu.score && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-glow border border-primary/20">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-primary">{edu.score}</span>
                    </div>
                  )}
                  
                  {edu.board && (
                    <div className="text-muted-foreground">
                      <span className="font-medium">Board:</span> {edu.board}
                    </div>
                  )}
                </div>

                {/* Additional details for B.Tech */}
                {edu.type === "graduation" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 rounded-lg bg-background-soft/50 border border-border/30">
                      <div className="text-2xl font-bold text-primary">4</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background-soft/50 border border-border/30">
                      <div className="text-2xl font-bold text-accent">CSE</div>
                      <div className="text-sm text-muted-foreground">Specialization</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background-soft/50 border border-border/30">
                      <div className="text-2xl font-bold text-accent-soft">7.64</div>
                      <div className="text-sm text-muted-foreground">CGPA</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education