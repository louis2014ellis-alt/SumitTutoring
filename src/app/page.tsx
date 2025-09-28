import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  Cpu, 
  Star, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const subjects = [
  { name: "Mathematics", icon: Calculator, description: "GCSE to University level" },
  { name: "Physics", icon: Atom, description: "A-Level and beyond" },
  { name: "Engineering", icon: Cpu, description: "Electrical & Electronic" },
];

const stats = [
  { label: "Students Taught", value: "100+" },
  { label: "Years Experience", value: "5+" },
  { label: "Degree Classification", value: "First-Class" },
];

const testimonials = [
  {
    quote: "Louis's clear explanations and patience helped me understand complex physics concepts that I'd been struggling with for months.",
    author: "Sarah M.",
    role: "A-Level Physics Student",
    rating: 5,
  },
  {
    quote: "My son's confidence in maths improved dramatically thanks to Louis's teaching approach. Highly recommended!",
    author: "David K.",
    role: "Parent of GCSE Student",
    rating: 5,
  },
  {
    quote: "Louis breaks down engineering concepts in a way that makes them accessible and interesting. Excellent tutor.",
    author: "Emma R.",
    role: "University Engineering Student",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Excel in STEM with{" "}
              <span className="text-primary">First-Class</span> Guidance
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Tutoring in Mathematics, Physics & Engineering by a First-Class BEng (Hons) graduate. 
              Building confidence through clear explanations and patient guidance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/book">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
                About Louis
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                I'm a Manchester-based First-Class Engineering graduate travelling the world 
                while tutoring students online. With a passion for simplifying complex concepts, 
                I help students build confidence and excel in STEM subjects.
              </p>
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Award className="h-4 w-4 text-primary" />
                  <span>First-Class BEng (Hons) Electrical & Electronic Engineering</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>International tutoring experience across USA, Colombia, and more</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/about">Read Full Story</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                Teaching Philosophy
              </h3>
              <p className="text-gray-600 mb-4">
                "Patience and clarity are at the heart of every lesson. I believe in fostering 
                confidence and curiosity in students, adapting my approach to each individual's 
                learning style."
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-gray-600">Clear, step-by-step explanations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-gray-600">Patient and encouraging approach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-gray-600">Adaptable to different learning styles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Subjects I Teach
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert tutoring across key STEM subjects
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {subjects.map((subject) => (
              <Card key={subject.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <subject.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-gray-600">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/services">View All Subjects & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              What Students Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from students and parents who've experienced success
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
            Ready to Excel in STEM?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Book a session today and start your journey to academic success
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/book">
                Book Your Session Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
