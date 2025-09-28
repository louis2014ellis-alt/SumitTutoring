"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "louis@example.com",
    description: "Send me an email anytime"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+44 (0) 123 456 7890",
    description: "Available for urgent queries"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Manchester, UK",
    description: "Online tutoring worldwide"
  },
  {
    icon: Clock,
    title: "Availability",
    details: "Flexible Hours",
    description: "Evenings & weekends available"
  }
];

const faqs = [
  {
    question: "What subjects do you tutor?",
    answer: "I specialise in Mathematics, Physics, and Engineering (Electrical & Electronic) from GCSE to University level."
  },
  {
    question: "How do online sessions work?",
    answer: "Sessions are conducted via video call using platforms like Zoom or Google Meet. I use interactive whiteboards and screen sharing to make lessons engaging."
  },
  {
    question: "What are your rates?",
    answer: "Single sessions are £45/hour. I also offer packages: 5 sessions for £200 (save £25) and 10 sessions for £380 (save £70)."
  },
  {
    question: "How do I book a session?",
    answer: "You can book directly through the booking page, or contact me to discuss your specific needs and schedule."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes! All sessions include personalised study materials, practice problems, and follow-up resources to support your learning."
  },
  {
    question: "What if I need to reschedule?",
    answer: "I understand that schedules can change. Please give me 24 hours notice for rescheduling, and I'll do my best to accommodate you."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Have questions about my tutoring services? I'd love to hear from you. 
              Send me a message and I'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Send a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for your message. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="e.g., GCSE Maths Tutoring Inquiry"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tell me about your tutoring needs, current level, and any specific topics you'd like help with..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="bg-primary/10 rounded-full p-3">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-900 font-medium">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    I typically respond to all inquiries within 24 hours. For urgent 
                    questions or immediate booking needs, feel free to call or text.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Free initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Flexible scheduling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Personalised learning plans</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Common questions about my tutoring services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
            Ready to Start Learning?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Book your first session today and experience the difference
          </p>
          <div className="mt-8">
            <a
              href="/book"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90 transition-colors"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
