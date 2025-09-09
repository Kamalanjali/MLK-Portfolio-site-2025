import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import courseraCert from "@/assets/coursera-python-certificate.png"
import udemyCert from "@/assets/udemy-java-certificate.png"
import hackerrankCert from "@/assets/hackerrank-sql-certificate.png"

const Certificates = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  const certificates = [
    {
      title: "Python for Everybody",
      provider: "Coursera",
      image: courseraCert,
      link: "https://coursera.org/share/a8dc742978b80c5b52e6ab8e0b3d3b01",
      category: "Programming",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Java Tutorial for Complete Beginners", 
      provider: "Udemy",
      image: udemyCert,
      link: "ude.my/UC-d46a749f-5e81-4e3b-aa59-7755b7582545",
      category: "Programming",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "SQL (Basics)",
      provider: "HackerRank", 
      image: hackerrankCert,
      link: "https://www.hackerrank.com/certificates/7bb4c60763ce",
      category: "Database",
      color: "bg-accent-soft/10 text-accent-soft"
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
              className="group hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => window.open(cert.link, '_blank')}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Award className="w-6 h-6 text-primary" />
                  <Badge className={cert.color}>
                    {cert.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {cert.provider}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="relative overflow-hidden rounded-lg border border-border/30 mb-4">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates