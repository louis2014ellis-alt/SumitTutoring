import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Louis's clear explanations and patience helped me understand complex physics concepts that I'd been struggling with for months. His teaching style made everything click!",
    author: "Sarah M.",
    role: "A-Level Physics Student",
    location: "Manchester",
    rating: 5,
    subject: "Physics",
    grade: "A*"
  },
  {
    quote: "My son's confidence in maths improved dramatically thanks to Louis's teaching approach. He's patient, encouraging, and really knows how to break down difficult problems.",
    author: "David K.",
    role: "Parent of GCSE Student",
    location: "London",
    rating: 5,
    subject: "Mathematics",
    grade: "Grade 9"
  },
  {
    quote: "Louis breaks down engineering concepts in a way that makes them accessible and interesting. His real-world examples helped me understand the practical applications.",
    author: "Emma R.",
    role: "University Engineering Student",
    location: "Birmingham",
    rating: 5,
    subject: "Engineering",
    grade: "First Class"
  },
  {
    quote: "I was struggling with calculus until I started sessions with Louis. His step-by-step approach and willingness to explain things multiple ways really helped me succeed.",
    author: "James L.",
    role: "A-Level Mathematics Student",
    location: "Leeds",
    rating: 5,
    subject: "Mathematics",
    grade: "A"
  },
  {
    quote: "Louis is an excellent tutor who genuinely cares about his students' success. He's always well-prepared and adapts his teaching to match my learning style perfectly.",
    author: "Maya P.",
    role: "GCSE Student",
    location: "Bristol",
    rating: 5,
    subject: "Physics",
    grade: "Grade 8"
  },
  {
    quote: "The online sessions work brilliantly. Louis uses great visual aids and interactive tools that make learning engaging. My daughter looks forward to her maths sessions now!",
    author: "Rachel T.",
    role: "Parent of A-Level Student",
    location: "Edinburgh",
    rating: 5,
    subject: "Mathematics",
    grade: "A"
  },
  {
    quote: "Louis helped me prepare for my engineering exams and I couldn't have done it without him. His explanations of circuit analysis and control systems were spot on.",
    author: "Alex C.",
    role: "University Engineering Student",
    location: "Glasgow",
    rating: 5,
    subject: "Engineering",
    grade: "2:1"
  },
  {
    quote: "What I love about Louis is that he doesn't just give you the answer - he teaches you how to think through problems yourself. This has been invaluable for my studies.",
    author: "Sophie H.",
    role: "A-Level Physics Student",
    location: "Cardiff",
    rating: 5,
    subject: "Physics",
    grade: "A*"
  },
  {
    quote: "Louis is incredibly knowledgeable and patient. He helped me understand differential equations which I thought I'd never get. Highly recommend his tutoring services!",
    author: "Tom W.",
    role: "University Mathematics Student",
    location: "Newcastle",
    rating: 5,
    subject: "Mathematics",
    grade: "First Class"
  }
];

const stats = [
  { label: "Average Rating", value: "5.0", icon: Star },
  { label: "Students Helped", value: "100+", icon: "👥" },
  { label: "Success Rate", value: "95%", icon: "📈" },
  { label: "Satisfaction", value: "100%", icon: "😊" }
];

export const metadata = {
  title: "Testimonials - Student Reviews | Louis Ellis STEM Tutoring",
  description: "Read reviews from students and parents who have experienced success with Louis Ellis's STEM tutoring. See how students have improved their grades and confidence.",
};

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Student Testimonials
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Hear from students and parents who have experienced success with my tutoring. 
              Real stories of academic improvement and confidence building.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {typeof stat.icon === 'string' ? stat.icon : <stat.icon className="h-8 w-8 mx-auto" />}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-primary/30 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">{testimonial.subject}</div>
                        <div className="text-xs text-gray-500">Grade: {testimonial.grade}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Breakdown */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Success Across All Subjects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Students achieve excellent results in all areas I tutor
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Mathematics
              </h3>
              <p className="text-gray-600 mb-4">
                From GCSE to University level, students consistently improve their grades and confidence
              </p>
              <div className="text-sm text-gray-500">
                Average improvement: 2+ grades
              </div>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Physics
              </h3>
              <p className="text-gray-600 mb-4">
                Complex concepts made simple through clear explanations and practical examples
              </p>
              <div className="text-sm text-gray-500">
                95% achieve target grades
              </div>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Engineering
              </h3>
              <p className="text-gray-600 mb-4">
                Real-world applications and industry insights help students excel in their studies
              </p>
              <div className="text-sm text-gray-500">
                First-class results achieved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
            Ready to Join These Success Stories?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Book your session today and start your journey to academic excellence
          </p>
          <div className="mt-8">
            <a
              href="/book"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90 transition-colors"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
