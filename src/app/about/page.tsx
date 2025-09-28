import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Globe, 
  BookOpen, 
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Heart
} from "lucide-react";

const qualifications = [
  {
    title: "First-Class BEng (Hons)",
    institution: "Manchester Metropolitan University",
    year: "2023",
    subject: "Electrical & Electronic Engineering",
    icon: GraduationCap,
  },
];

const experience = [
  {
    title: "International Tutoring",
    description: "Tutoring students across USA, Colombia, and other countries",
    icon: Globe,
  },
  {
    title: "Adaptive Teaching",
    description: "One-to-one and group settings, adapting to various levels",
    icon: Users,
  },
  {
    title: "Clear Communication",
    description: "Praised by peers for explaining concepts simply and effectively",
    icon: Lightbulb,
  },
];

const skills = [
  "Mathematics (GCSE to University level)",
  "Physics (A-Level and beyond)",
  "Electrical & Electronic Engineering",
  "Problem-solving and analytical thinking",
  "Patient and encouraging teaching style",
  "Adaptable to different learning styles",
];

export const metadata = {
  title: "About Louis - STEM Tutor & First-Class Engineer",
  description: "Learn about Louis Ellis, a First-Class BEng graduate with international tutoring experience, committed to student growth and fostering confidence in STEM subjects.",
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Louis
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              First-Class Engineering graduate with a passion for teaching and 
              helping students excel in STEM subjects through clear explanations 
              and patient guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Profile */}
            <div>
              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                    Louis Ellis
                  </h2>
                  <p className="text-primary font-medium">
                    First-Class BEng Graduate & STEM Tutor
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                    My Story
                  </h3>
                  <p className="text-gray-600 mb-4">
                    I'm a Manchester-based First-Class Engineering graduate who has been 
                    travelling the world while tutoring students online. My journey in 
                    education began with my own passion for understanding complex concepts 
                    and helping others do the same.
                  </p>
                  <p className="text-gray-600 mb-4">
                    After achieving a First-Class Honours degree in Electrical & Electronic 
                    Engineering from Manchester Metropolitan University in 2023, I discovered 
                    my love for teaching. I've since worked with students across different 
                    countries, adapting my approach to various learning styles and academic levels.
                  </p>
                  <p className="text-gray-600">
                    Outside of tutoring, I apply my creativity and technical skills as the 
                    founder of an AI-powered startup (CompanyCrafters), helping small businesses 
                    with branding and operations. This entrepreneurial experience brings a 
                    practical, real-world perspective to my teaching.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Qualifications & Experience */}
            <div className="space-y-8">
              {/* Qualifications */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                    Qualifications
                  </h3>
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <qual.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{qual.title}</h4>
                        <p className="text-gray-600">{qual.subject}</p>
                        <p className="text-sm text-gray-500">{qual.institution} • {qual.year}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                    Teaching Experience
                  </h3>
                  <div className="space-y-4">
                    {experience.map((exp, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <exp.icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                          <p className="text-gray-600 text-sm">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                    Areas of Expertise
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              My Teaching Philosophy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide my approach to tutoring
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Patience & Understanding
                </h3>
                <p className="text-gray-600">
                  I believe every student learns at their own pace. I'm committed to 
                  providing a supportive environment where students feel comfortable 
                  asking questions and making mistakes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Clear Explanations
                </h3>
                <p className="text-gray-600">
                  Complex concepts become simple when broken down properly. I focus on 
                  building understanding step-by-step, using relatable examples and 
                  visual aids when helpful.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Student-Centred Approach
                </h3>
                <p className="text-gray-600">
                  I adapt my teaching style to match each student's learning preferences. 
                  Whether you're a visual learner or prefer hands-on practice, I'll 
                  tailor our sessions to your needs.
                </p>
              </CardContent>
            </Card>
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
            Let's work together to achieve your academic goals
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/book">
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
