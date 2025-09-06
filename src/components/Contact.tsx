import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, MapPin, Download, Send, Phone } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

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

              {/* Social Links */}
              <div className="mt-8">
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
                
                {/* Download Resume Button */}
                <div className="mt-6">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = 'https://github.com/Kamalanjali/Kamalanjali/raw/main/MLK_Resume_2025.pdf';
                      link.download = 'Lakshmi_Kamalanjali_Resume_2025.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="mr-2 group-hover:rotate-12 transition-transform" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connect With Me Form */}
          <Card variant="glass" className="animate-fade-in-right">
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-background-soft/50 border-border/30 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background-soft/50 border-border/30 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={4}
                    required
                    className="bg-background-soft/50 border-border/30 focus:border-primary/50 resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact