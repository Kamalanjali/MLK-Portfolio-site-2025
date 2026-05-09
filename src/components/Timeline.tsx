import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, GraduationCap, School, BookOpen, Award, Code, Database, Bug, Lightbulb, Users, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"


const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = document.querySelectorAll('[data-index]')
    elements.forEach(el => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const timelineData = [
    {
      type: "experience",
      date: "Sep 2021 - Nov 2023",
      title: "System Engineer",
      institution: "Infosys Limited",
      icon: <Building className="w-6 h-6" />,
      description: "2+ years of full-stack development expertise",
      details: [
        {
          icon: <Code className="w-4 h-4" />,
          text: "Developed and maintained full-stack web applications using MERN stack, Python, and SQL"
        },
        {
          icon: <Database className="w-4 h-4" />,
          text: "Designed and optimized REST APIs and database queries, improving performance by 20%"
        },
        {
          icon: <Bug className="w-4 h-4" />,
          text: "Resolved 100+ client-reported tickets by identifying root causes and delivering efficient fixes within SLA"
        },
        {
          icon: <Users className="w-4 h-4" />,
          text: "Collaborated with cross-functional teams using Agile methodology to deliver high-quality features"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          text: "Participated in software testing, debugging, and deployment to ensure reliability and compliance"
        },
        {
          icon: <Lightbulb className="w-4 h-4" />,
          text: "Mentored interns in basic JavaScript and SQL problem-solving tasks"
        }
      ],
      technologies: ["MERN Stack", "Python", "SQL", "REST APIs", "JavaScript", "Agile", "Testing", "Debugging"]
    },
    {
      type: "education",
      date: "2016 - 2020",
      title: "B.Tech (Computer Science and Engineering)",
      institution: "Dadi Institute of Engineering and Technology, Anakapalle",
      icon: <GraduationCap className="w-6 h-6" />,
      score: "CGPA: 7.64",
      description: "Bachelor's degree in Computer Science & Engineering"
    },
    {
      type: "education",
      date: "2014 - 2016",
      title: "Intermediate (Mathematics, Physics and Chemistry)",
      institution: "Sri Chaitanya Junior College, Steel Plant, Visakhapatnam",
      icon: <School className="w-6 h-6" />,
      score: "925/1000",
      board: "Board of Intermediate Education, Andhra Pradesh",
      description: "Higher Secondary Education"
    },
    {
      type: "education",
      date: "2014",
      title: "10th Class",
      institution: "Sri Chaitanya English Medium School, Anakapalle",
      icon: <BookOpen className="w-6 h-6" />,
      score: "CGPA: 9.8/10",
      board: "Secondary School of Education, Andhra Pradesh",
      description: "Secondary School Education"
    }
  ]

  return (
    <section className="py-20 px-6" id="timeline">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 transition-all duration-700 transform ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-glow transition-all duration-500 ${
                    item.type === 'experience' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  } ${visibleItems.has(index) ? 'scale-100' : 'scale-0'}`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:max-w-lg`}>
                  <Card variant="glass" className="hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                          <CardTitle className="text-xl leading-tight">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-lg mt-2">
                            {item.institution}
                          </CardDescription>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-sm font-medium border-primary/30 ${
                            item.type === 'experience' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-accent/10 text-accent'
                          }`}
                        >
                          {item.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {item.score && (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-glow border border-primary/20">
                          <Award className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-primary">{item.score}</span>
                        </div>
                      )}

                      {item.board && (
                        <div className="text-muted-foreground">
                          <span className="font-medium">Board:</span> {item.board}
                        </div>
                      )}

                      {item.details && (
                        <div className="space-y-3">
                          {item.details.map((detail, detailIndex) => (
                            <div 
                              key={detailIndex}
                              className="flex items-start gap-3 p-3 rounded-lg bg-background-soft/50 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                            >
                              <div className="text-accent mt-1 group-hover:text-primary transition-colors">
                                {detail.icon}
                              </div>
                              <p className="text-sm text-card-foreground leading-relaxed">
                                {detail.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.technologies && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="secondary"
                              className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline