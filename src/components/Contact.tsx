import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "kamalanjalimetta31@gmail.com",
      href: "mailto:kamalanjalimetta31@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8309452896",
      href: "tel:+918309452896",
      color: "text-accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
      color: "text-accent-soft"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Kamalanjali",
      color: "hover:text-primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lakshmi-kamalanjali-mandalika-4b5119188/",
      color: "hover:text-accent"
    }
  ]

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to collaborate? Let's build something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card variant="glass" className="animate-fade-in-left">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className={`p-3 rounded-lg bg-background-soft border border-border/30 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="font-medium hover:text-primary transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="font-medium">{contact.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card variant="glass" className="animate-fade-in-right">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Resume Download */}
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                >
                  <Download className="mr-2 group-hover:rotate-12 transition-transform" />
                  Download Resume
                </Button>
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="mailto:kamalanjalimetta31@gmail.com">
                    <Mail className="mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 p-4 rounded-lg bg-background-soft/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:scale-105 ${social.color}`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="p-4 rounded-lg bg-gradient-glow border border-primary/20 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium text-primary">Available for Work</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Open to full-time opportunities and freelance projects
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Details */}
        <Card variant="floating" className="mt-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-background-soft/50 border border-border/30">
                <div className="text-lg font-semibold text-primary">Name</div>
                <div className="text-muted-foreground">Lakshmi Kamalanjali Mandalika</div>
              </div>
              <div className="p-4 rounded-lg bg-background-soft/50 border border-border/30">
                <div className="text-lg font-semibold text-accent">Location</div>
                <div className="text-muted-foreground">Hyderabad, Telangana, India</div>
              </div>
              <div className="p-4 rounded-lg bg-background-soft/50 border border-border/30">
                <div className="text-lg font-semibold text-accent-soft">Status</div>
                <div className="text-muted-foreground">Married</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Contact