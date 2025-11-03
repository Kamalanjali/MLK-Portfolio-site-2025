import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/enhanced-button"
import { ExternalLink, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Certificates = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  const certificates = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      provider: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/MettaLakshmiKamalanjali-5202/7B7BB44AEAA0DC40?sharingId=398751272ACE944E",
      category: "Cloud Computing",
      color: "bg-primary/10 text-primary",
      description: "Microsoft Azure cloud services and fundamentals certification",
      highlighted: true
    },
    {
      title: "Artificial Intelligence Fundamentals",
      provider: "IBM SkillsBuild",
      link: "https://www.credly.com/badges/5a48dba1-5a30-4f4c-b82c-01ca18e1fb57/public_url",
      category: "Artificial Intelligence",
      color: "bg-accent/10 text-accent",
      description: "Foundational knowledge in artificial intelligence concepts and applications",
      highlighted: true
    },
    {
      title: "Python for Everybody",
      provider: "Coursera",
      link: "https://coursera.org/share/a8dc742978b80c5b52e6ab8e0b3d3b01",
      category: "Programming",
      color: "bg-primary/10 text-primary",
      description: "Complete specialization covering Python programming fundamentals"
    },
    {
      title: "Java Tutorial for Complete Beginners", 
      provider: "Udemy",
      link: "https://ude.my/UC-d46a749f-5e81-4e3b-aa59-7755b7582545",
      category: "Programming",
      color: "bg-accent/10 text-accent",
      description: "Comprehensive Java programming course for beginners"
    },
    {
      title: "SQL (Basics)",
      provider: "HackerRank", 
      link: "https://www.hackerrank.com/certificates/7bb4c60763ce",
      category: "Database",
      color: "bg-accent-soft/10 text-accent-soft",
      description: "Fundamental SQL skills and database querying"
    }
  ]

  return (
    <section className="py-20 px-6" id="certificates">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and completed courses
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate ${cardsVisible ? 'animate-in' : ''}`}
        >
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              variant="glass" 
              className={`group hover:scale-105 transition-all duration-300 ${
                cert.highlighted ? 'md:col-span-2 lg:col-span-3 border-primary/50 shadow-glow' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Award className={`w-6 h-6 ${cert.highlighted ? 'text-primary animate-pulse' : 'text-primary'}`} />
                  <Badge className={cert.color}>
                    {cert.category}
                  </Badge>
                </div>
                <CardTitle className={`leading-tight ${cert.highlighted ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                  {cert.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {cert.provider}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates