"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Video, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  Users,
  Award
} from "lucide-react";
import Link from "next/link";

const bookingSteps = [
  {
    step: 1,
    title: "Choose Your Time",
    description: "Select a convenient time slot from my available calendar",
    icon: Calendar
  },
  {
    step: 2,
    title: "Fill in Details",
    description: "Provide your contact information and learning goals",
    icon: Users
  },
  {
    step: 3,
    title: "Attend Session",
    description: "Join the online session via video call",
    icon: Video
  },
  {
    step: 4,
    title: "Start Learning",
    description: "Begin your journey to academic success",
    icon: BookOpen
  }
];

const sessionTypes = [
  {
    name: "Free Consultation",
    duration: "15 minutes",
    price: "Free",
    description: "Discuss your learning goals and how I can help",
    features: [
      "Assessment of current level",
      "Learning plan discussion",
      "Q&A about tutoring approach"
    ]
  },
  {
    name: "Single Session",
    duration: "1 hour",
    price: "£45",
    description: "Focused help with specific topics or exam preparation",
    features: [
      "Personalised lesson plan",
      "Interactive whiteboard",
      "Session recording (optional)",
      "Follow-up resources"
    ]
  },
  {
    name: "Package Sessions",
    duration: "5 or 10 hours",
    price: "From £200",
    description: "Ongoing support with flexible scheduling",
    features: [
      "Flexible scheduling",
      "Progress tracking",
      "Comprehensive materials",
      "Priority booking"
    ]
  }
];

const benefits = [
  {
    icon: Video,
    title: "Online Sessions",
    description: "Convenient video calls from anywhere in the world"
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Evenings and weekends available to fit your schedule"
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "First-Class graduate with proven teaching experience"
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Track record of helping students improve their grades"
  }
];

// Note: Metadata is handled in layout.tsx for client components

export default function Book() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Book Your Session
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Ready to excel in STEM? Book a tutoring session and start your journey 
              to academic success with personalised guidance from a First-Class graduate.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple steps to get started with your tutoring journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{step.step}</div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Choose Your Session Type
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Flexible options to suit your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {sessionTypes.map((session) => (
              <Card key={session.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{session.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">{session.price}</span>
                    <p className="text-sm text-gray-600">{session.duration}</p>
                  </div>
                  <p className="text-gray-600 mt-2">{session.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {session.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Schedule Your Session
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose a time that works for you
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/your-calendly-link"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Why Choose My Tutoring?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What makes my approach different
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
            Prefer to Chat First?
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions about my tutoring approach or want to discuss your specific needs? 
            I'm happy to have a quick chat before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/services">
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
