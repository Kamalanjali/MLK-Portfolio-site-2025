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
      title: "Microsoft Certified: Azure Developer Associate",
      provider: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/mettalakshmikamalanjali-5202/credentials/6aa5f46e944dac32?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      category: "Cloud",
      color: "bg-primary/10 text-primary",
      description: "Azure development, services, and cloud solutions"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      provider: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/MettaLakshmiKamalanjali-5202/7B7BB44AEAA0DC40?sharingId=398751272ACE944E",
      category: "Cloud",
      color: "bg-primary/10 text-primary",
      description: "Microsoft Azure cloud services fundamentals"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      provider: "IBM SkillsBuild",
      link: "https://www.credly.com/badges/5a48dba1-5a30-4f4c-b82c-01ca18e1fb57/public_url",
      category: "AI",
      color: "bg-accent/10 text-accent",
      description: "Foundations of AI concepts and applications"
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
    <section className="py-16 px-6" id="certificates">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Cloud, AI, and programming certifications
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 scroll-animate ${cardsVisible ? 'animate-in' : ''}`}
        >
          {certificates.map((cert, index) => (
            <Card
              key={index}
              variant="glass"
              className="group hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <Badge className={`${cert.color} text-xs`}>{cert.category}</Badge>
                </div>
                <CardTitle className="text-base leading-snug">
                  {cert.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground font-medium">
                  {cert.provider}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5 group-hover:translate-x-0.5 transition-transform" />
                  View
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