import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="secondary"
      size="icon"
      className="fixed bottom-8 right-8 z-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  )
}

export default ScrollToTop