import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ExternalLink, Mail, Settings } from "lucide-react"

const EmailSetupInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Email Setup Instructions</h1>
        <p className="text-muted-foreground">Configure EmailJS to enable contact form functionality</p>
      </div>

      <Alert>
        <Mail className="h-4 w-4" />
        <AlertDescription>
          Your contact form is ready but needs EmailJS configuration to send emails to: <strong>kamalanjalimetta31@gmail.com</strong>
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
            <p>1. Go to <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">EmailJS <ExternalLink className="w-3 h-3" /></a> and create a free account</p>
            <p>2. Verify your email address</p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Step 2: Set up Email Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>1. In EmailJS dashboard, go to "Email Services"</p>
            <p>2. Click "Add New Service" and choose your email provider (Gmail, Outlook, etc.)</p>
            <p>3. Connect your email account (kamalanjalimetta31@gmail.com)</p>
            <p>4. Note down your <strong>Service ID</strong></p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Step 3: Create Email Template</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>1. Go to "Email Templates" and click "Create New Template"</p>
            <p>2. Use this template content:</p>
            <div className="bg-background-soft p-4 rounded-lg font-mono text-sm">
              <p>Subject: New Contact Form Message from {`{{from_name}}`}</p>
              <br />
              <p>From: {`{{from_name}}`} ({`{{from_email}}`})</p>
              <p>Message: {`{{message}}`}</p>
            </div>
            <p>3. Save and note down your <strong>Template ID</strong></p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Step 4: Get Public Key</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>1. Go to "Account" → "General"</p>
            <p>2. Find your <strong>Public Key</strong></p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Step 5: Update Contact Component</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Replace the placeholders in <code>src/components/Contact.tsx</code>:</p>
            <div className="bg-background-soft p-4 rounded-lg font-mono text-sm space-y-2">
              <p>'YOUR_SERVICE_ID' → Your EmailJS Service ID</p>
              <p>'YOUR_TEMPLATE_ID' → Your EmailJS Template ID</p>
              <p>'YOUR_PUBLIC_KEY' → Your EmailJS Public Key</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EmailSetupInstructions