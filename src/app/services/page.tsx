import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  Atom, 
  Cpu, 
  BookOpen,
  Clock,
  Users,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

const subjects = [
  {
    name: "Mathematics",
    icon: Calculator,
    levels: ["GCSE", "A-Level", "University"],
    description: "From basic algebra to advanced calculus, covering all mathematical concepts with clear explanations and practical examples.",
    topics: [
      "Algebra and Functions",
      "Calculus (Differentiation & Integration)",
      "Statistics and Probability",
      "Geometry and Trigonometry",
      "Linear Algebra",
      "Differential Equations"
    ]
  },
  {
    name: "Physics",
    icon: Atom,
    levels: ["GCSE", "A-Level", "University"],
    description: "Understanding the fundamental principles of physics through interactive explanations and real-world applications.",
    topics: [
      "Mechanics and Dynamics",
      "Electricity and Magnetism",
      "Thermodynamics",
      "Quantum Physics",
      "Optics and Waves",
      "Modern Physics"
    ]
  },
  {
    name: "Chemistry",
    icon: Atom,
    levels: ["GCSE", "A-Level"],
    description: "Master chemical concepts from atomic structure to organic chemistry with clear explanations and practical examples.",
    topics: [
      "Atomic Structure",
      "Bonding and Structure",
      "Organic Chemistry",
      "Physical Chemistry",
      "Analytical Chemistry",
      "Practical Skills"
    ]
  },
  {
    name: "Engineering",
    icon: Cpu,
    levels: ["A-Level", "University"],
    description: "Electrical and Electronic Engineering concepts, from circuit analysis to digital systems and control theory.",
    topics: [
      "Circuit Analysis",
      "Digital Electronics",
      "Control Systems",
      "Signal Processing",
      "Power Systems",
      "Microcontrollers"
    ]
  },
  {
    name: "Computer Science",
    icon: Cpu,
    levels: ["GCSE", "A-Level", "University"],
    description: "Programming, algorithms, and computer science theory with hands-on coding practice and exam preparation.",
    topics: [
      "Programming (Python, Java, C++)",
      "Algorithms and Data Structures",
      "Computer Systems",
      "Databases",
      "Software Engineering",
      "Theory of Computation"
    ]
  },
  {
    name: "English",
    icon: BookOpen,
    levels: ["GCSE", "A-Level"],
    description: "Literature analysis, creative writing, and language skills to excel in English exams and coursework.",
    topics: [
      "Literature Analysis",
      "Creative Writing",
      "Language and Structure",
      "Poetry and Prose",
      "Essay Writing",
      "Exam Techniques"
    ]
  }
];

const pricingPlans = [
  {
    name: "Trial Session",
    price: "£15",
    duration: "30 minutes",
    description: "Perfect for new students to experience our tutoring style",
    features: [
      "30-minute focused session",
      "Assessment of current level",
      "Feedback on student's needs",
      "No long-term commitment",
      "Perfect introduction to our approach"
    ],
    popular: false,
    buttonText: "Book Trial",
    highlight: "Great for trying us out!"
  },
  {
    name: "Standard Session",
    price: "£45",
    duration: "1 hour",
    description: "Regular one-on-one tutoring session for any subject",
    features: [
      "60 minutes of focused tutoring",
      "Coverage of chosen topics",
      "Homework help included",
      "Follow-up exercises provided",
      "Email support for 24 hours"
    ],
    popular: true,
    buttonText: "Book Session",
    highlight: "Most Popular"
  },
  {
    name: "Premium Package",
    price: "£200",
    duration: "5 sessions",
    originalPrice: "£225",
    description: "Best value for ongoing support and exam preparation",
    features: [
      "5 hours of tutoring (save £25)",
      "Flexible scheduling",
      "Progress tracking",
      "Comprehensive study materials",
      "Priority booking",
      "Unlimited email support"
    ],
    popular: false,
    buttonText: "Purchase Package",
    highlight: "Best Value"
  }
];

const benefits = [
  {
    icon: Users,
    title: "Personalised Approach",
    description: "Tailored lessons to match your learning style and pace"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule, including evenings and weekends"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Resources",
    description: "Access to study materials, practice problems, and revision guides"
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "Track record of helping students improve grades and build confidence"
  }
];

export const metadata = {
  title: "Subjects & Pricing - Louis Ellis STEM Tutoring",
  description: "Expert tutoring in Mathematics, Physics, and Engineering. Flexible pricing options from single sessions to comprehensive packages. Book your session today.",
};

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Subjects & Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Expert tutoring across key STEM subjects with flexible pricing options 
              to suit your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Subjects I Teach
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive coverage across all levels
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Card key={subject.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <subject.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">{subject.name}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {subject.levels.map((level) => (
                      <span
                        key={level}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                    <ul className="space-y-1">
                      {subject.topics.map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-secondary flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative hover:shadow-lg transition-shadow ${
                  plan.popular ? 'ring-2 ring-accent' : ''
                }`}
              >
                {(plan.popular || plan.highlight) && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {plan.highlight}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{plan.duration}</p>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                        : ''
                    }`}
                  >
                    <Link href="/book">
                      {plan.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              All sessions include personalised learning materials and email support
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Have Questions? Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900">
              Why Choose My Tutoring?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What sets my approach apart
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

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Book your first session today and experience the difference
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/book">
                Book Your Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
