import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

const ScrollToTop = () => {
  const [isInHero, setIsInHero] = useState(true)

  // Hide button only when in hero section
  useEffect(() => {
    const checkHeroSection = () => {
      const heroElement = document.getElementById('hero') || document.querySelector('.hero')
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect()
        const isStillInHero = heroRect.bottom > 100 // Add some buffer
        setIsInHero(isStillInHero)
      } else {
        // If no hero element found, show button after scrolling past viewport height
        setIsInHero(window.pageYOffset < window.innerHeight * 0.8)
      }
    }

    // Check immediately
    checkHeroSection()
    
    window.addEventListener("scroll", checkHeroSection)
    return () => window.removeEventListener("scroll", checkHeroSection)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (isInHero) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="icon"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 animate-fade-in bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 text-primary hover:text-primary-foreground hover:bg-primary"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  )
}

export default ScrollToTop