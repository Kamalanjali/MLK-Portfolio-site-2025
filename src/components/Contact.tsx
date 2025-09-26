import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Download, Send } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import emailjs from '@emailjs/browser'
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Validation schema
const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .regex(/\S/, "Message cannot be empty or contain only whitespace")
})

type ContactFormData = z.infer<typeof contactFormSchema>


const Contact = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { elementRef: leftCardRef, isVisible: leftCardVisible } = useScrollAnimation()
  const { elementRef: rightCardRef, isVisible: rightCardVisible } = useScrollAnimation()
  const { toast } = useToast()
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
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
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
      color: "text-accent-soft"
    }
  ]

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Additional server-side style validation to prevent bypassing
    try {
      // Re-validate the data even if form validation passed
      const validatedData = contactFormSchema.parse(data)
      
      // Additional security checks
      if (!validatedData.name.trim() || !validatedData.email.trim() || !validatedData.message.trim()) {
        throw new Error("All fields are required")
      }
      
      // Initialize EmailJS with your public key
      emailjs.init("zvenMbJ8gkX-mU9Ir") // Your EmailJS public key
      
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_ufspzow", // Your EmailJS service ID  
        "template_9epftxa", // Your EmailJS template ID
        {
          user_name: validatedData.name,
          user_email: validatedData.email,
          message: validatedData.message,
        }
      )
      
      console.log('Email sent successfully:', result)
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      
      // Reset form
      form.reset()
      
    } catch (error) {
      console.error('Email sending failed:', error)
      
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: "Please fill in all fields correctly.",
          variant: "destructive"
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        })
      }
    } finally {
      setIsSubmitting(false)
    }
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
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to collaborate? Let's build something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card 
            ref={leftCardRef}
            variant="glass" 
            className={`scroll-animate-left ${leftCardVisible ? 'animate-in' : ''}`}
          >
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
          <Card 
            ref={rightCardRef}
            variant="glass" 
            className={`scroll-animate-right ${rightCardVisible ? 'animate-in' : ''}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Let's get in touch</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-background-soft/50 border-border/30 focus:border-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-background-soft/50 border-border/30 focus:border-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message here..."
                            rows={4}
                            className="bg-background-soft/50 border-border/30 focus:border-primary/50 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    <Send className={`mr-2 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact