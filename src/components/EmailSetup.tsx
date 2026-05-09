import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ExternalLink, Mail, Settings, Copy, Check } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

const EmailSetup = () => {
  const [credentials, setCredentials] = useState({
    serviceId: '',
    templateId: '',
    publicKey: ''
  })
  const [copied, setCopied] = useState('')
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }))
  }

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      })
      setTimeout(() => setCopied(''), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const templateContent = `Subject: New Contact Form Message from {{from_name}}

Hello Lakshmi,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
You can reply directly to this email to respond to {{from_name}}.`

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">EmailJS Setup for Contact Form</h1>
        <p className="text-muted-foreground">Configure EmailJS to enable direct email sending from your contact form</p>
      </div>

      <Alert>
        <Mail className="h-4 w-4" />
        <AlertDescription>
          Follow these steps to enable email sending FROM visitor's email TO: <strong>kamalanjalimetta31@gmail.com</strong>
        </AlertDescription>
      </Alert>

      <div className="grid gap-6">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Step 1: Create EmailJS Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>1. Go to <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 inline-flex">EmailJS.com <ExternalLink className="w-3 h-3" /></a> and create a free account</p>
            <p>2. Verify your email address</p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Step 2: Add Email Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>1. In EmailJS dashboard, go to "Email Services"</p>
            <p>2. Click "Add New Service" and choose <strong>Gmail</strong></p>
            <p>3. Connect your Gmail account: <strong>kamalanjalimetta31@gmail.com</strong></p>
            <p>4. Copy your <strong>Service ID</strong> (it will look like: service_xxxxxxx)</p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Step 3: Create Email Template</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>1. Go to "Email Templates" and click "Create New Template"</p>
            <p>2. Copy this template content:</p>
            <div className="bg-background-soft p-4 rounded-lg relative">
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(templateContent, 'Template')}
              >
                {copied === 'Template' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
              <pre className="text-sm whitespace-pre-wrap pr-12">{templateContent}</pre>
            </div>
            <p>3. Set the "To Email" field to: <strong>kamalanjalimetta31@gmail.com</strong></p>
            <p>4. Set the "From Email" field to: <strong>{'{{from_email}}'}</strong></p>
            <p>5. Save and copy your <strong>Template ID</strong></p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Step 4: Get Public Key</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>1. Go to "Account" in the EmailJS dashboard</p>
            <p>2. Find your <strong>Public Key</strong> (starts with uppercase letters)</p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Step 5: Update Your Contact Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Enter your EmailJS credentials below to generate the code:</p>
            
            <div className="grid gap-4">
              <div>
                <Label htmlFor="serviceId">Service ID</Label>
                <Input
                  id="serviceId"
                  placeholder="service_xxxxxxx"
                  value={credentials.serviceId}
                  onChange={(e) => handleInputChange('serviceId', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="templateId">Template ID</Label>
                <Input
                  id="templateId"
                  placeholder="template_xxxxxxx"
                  value={credentials.templateId}
                  onChange={(e) => handleInputChange('templateId', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="publicKey">Public Key</Label>
                <Input
                  id="publicKey"
                  placeholder="YOUR_PUBLIC_KEY"
                  value={credentials.publicKey}
                  onChange={(e) => handleInputChange('publicKey', e.target.value)}
                />
              </div>
            </div>

            {credentials.serviceId && credentials.templateId && credentials.publicKey && (
              <div className="mt-6">
                <p className="mb-2 font-medium">Replace these lines in Contact.tsx:</p>
                <div className="bg-background-soft p-4 rounded-lg relative">
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(
                      `emailjs.init("${credentials.publicKey}")\n\n// In emailjs.send():\n"${credentials.serviceId}", // Service ID\n"${credentials.templateId}", // Template ID`,
                      'Config'
                    )}
                  >
                    {copied === 'Config' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <pre className="text-sm pr-12">
{`emailjs.init("${credentials.publicKey}")

// In emailjs.send():
"${credentials.serviceId}", // Service ID  
"${credentials.templateId}", // Template ID`}
                  </pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EmailSetup