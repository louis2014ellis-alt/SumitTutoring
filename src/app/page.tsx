import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  CheckCircle, 
  Users, 
  Calculator, 
  Atom, 
  Brain,
  Target,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { getPricingData, formatDuration } from "./lib/pricing";

const pricingData = getPricingData();

const features = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "First-Class Graduate Tutors",
    description: "Expert educators with proven academic excellence and up-to-date teaching methods."
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Patient, Clear Explanations",
    description: "Step-by-step teaching with friendly pacing, visual aids, and verbal explanations."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Exam-Focused Learning",
    description: "Past paper practice, mark-scheme strategies, and exam technique mastery."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Proven Student Progress",
    description: "Measurable improvement and confidence building with track record of grade improvements."
  }
];

const subjects = [
  { name: "GCSE Maths", icon: <Calculator className="h-6 w-6" />, description: "Foundation to Higher tier mastery" },
  { name: "GCSE Physics", icon: <Atom className="h-6 w-6" />, description: "Core concepts and practical skills" },
  { name: "A-Level Maths", icon: <Calculator className="h-6 w-6" />, description: "Pure, mechanics, and statistics" },
  { name: "A-Level Physics", icon: <Atom className="h-6 w-6" />, description: "Advanced concepts and problem-solving" },
  { name: "Exam Prep & Revision", icon: <Target className="h-6 w-6" />, description: "Past papers and exam techniques" },
  { name: "Online Support", icon: <Users className="h-6 w-6" />, description: "Flexible scheduling and homework help" }
];

const testimonials = [
  {
    quote: "The team's clear explanations and patience helped me understand complex physics concepts that I'd been struggling with for months.",
    name: "Sarah M.",
    role: "A-Level Physics Student",
    rating: 5
  },
  {
    quote: "My son's confidence in maths improved dramatically thanks to Summit's teaching approach. Highly recommended!",
    name: "David K.",
    role: "Parent of GCSE Student",
    rating: 5
  },
  {
    quote: "Summit breaks down engineering concepts in a way that makes them accessible and interesting. Excellent tutoring agency.",
    name: "Emma R.",
    role: "University Engineering Student",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="text-center">
              <p className="text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
                Professional Online Tutoring Agency
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                GCSE & A-Level Maths & Physics
              </h1>
              <p className="text-lg text-slate-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Clear, patient support tailored to every learner. We adapt lessons to every brain, 
                preparing students not just for exams, but for a future where remote learning and 
                flexible thinking are the norm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                  <Link href="/pricing">
                    View Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900">
                  <Link href="/tutors">
                    Meet Our Tutors
                    <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 opacity-50"></div>
      </section>

      {/* 2. Our Mission */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-yellow-600 uppercase tracking-wider mb-2">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Fixing a Broken System
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  The Problem
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Traditional education was designed for a different era. It assumes all students learn the same way, 
                  at the same pace, with the same interests. This one-size-fits-all approach leaves many students 
                  feeling lost, frustrated, or like they're "not smart enough."
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Outdated teaching methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Poor neurodivergent support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Limited personalization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-4" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  Our Solution
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  We adapt lessons to every brain, preparing learners not just for exams, but for a future where 
                  remote learning and flexible thinking are the norm.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-slate-700 italic text-sm">
                    "We believe no one is smart or dumb—we all just think differently. 
                    Summit Tutoring helps every learner climb higher."
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/mission">
                  Learn More About Our Mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Neurodivergent-Aware Learning */}
      <section className="py-16 bg-yellow-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-yellow-600 uppercase tracking-wider mb-2">
              Every brain learns differently
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Personalized, inclusive support for ADHD, dyslexia, dyspraxia & anxiety
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Lesson formats adapted</strong> to focus style and pace—short chunks, visuals, prompts.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Dual-coding explanations</strong> (visual + verbal) and retrieval practice.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Anxiety-aware exam prep:</strong> calm scripts, timed drills, review checkpoints.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Optional breaks</strong> and flexible flow to keep sessions productive.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                      Personal Experience
                    </h4>
                    <p className="text-sm text-slate-700 italic">
                      "Our founder was diagnosed with ADHD and has close family with dyslexia/dyscalculia—this 
                      experience shapes how we approach every student—with understanding, patience, and methods 
                      that actually work for different types of brains."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/our-teaching">
                  Learn how we teach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Subjects & Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Subjects & Services
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Expert tutoring across key subjects and levels
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-yellow-600">
                    {subject.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                    {subject.name}
                  </h3>
                </div>
                <p className="text-slate-700 text-sm">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tutors (Agency framing) */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Our Tutors
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
            <p className="text-lg text-slate-100 max-w-3xl mx-auto">
              Expert educators with a shared mission of inclusive, evidence-based teaching
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                    Current Team
                  </h3>
                  <p className="text-slate-100 mb-6 leading-relaxed">
                    Our lead tutor brings First-Class BEng credentials and personal experience with neurodivergent learning. 
                    More tutors with unique styles and specializations are joining our team soon.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-100">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">First-Class BEng Graduate</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-100">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">Neurodivergent-aware teaching</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-100">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">5+ years experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-100">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">More tutors coming soon</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500/20 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-yellow-400" />
                  </div>
                  <p className="text-slate-100 text-sm italic">
                    Professional photos coming soon
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                  <Link href="/tutors">
                    Meet Our Tutors
                    <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900">
                  <Link href="/tutors">
                    Join Waitlist for New Tutors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Summit */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-yellow-600 uppercase tracking-wider mb-2">
              Our Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Why Choose Summit
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Four key reasons why students and parents trust Summit Tutoring
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-yellow-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  {feature.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pricing */}
      <section id="pricing" className="py-16 bg-yellow-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Pricing
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              All packages match our Fiverr gig. Choose the plan that fits your goals—trial options, one-off sessions, or bundled progress plans.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingData.plans.map((plan) => (
              <div key={plan.key} className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                      {plan.highlight}
                    </span>
                  </div>
                )}
                
                <div className="text-center pb-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-slate-900">
                        £{plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-lg text-slate-500 line-through">
                          £{plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-2">
                      {formatDuration(plan.durationMinutes)}
                    </p>
                  </div>
                  <p className="text-slate-700 text-sm mt-4">
                    {plan.description}
                  </p>
                </div>
                
                <div className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.bullets.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className="w-full bg-slate-900 hover:bg-slate-700 text-white"
                  >
                    <a href={pricingData.gigUrl} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-slate-600">
              Prices auto-synced with Fiverr. Need a custom plan?{" "}
              <Link href="/contact" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 8. Roadmap teasers */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Future Vision
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Exciting developments coming to Summit Tutoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
                <h3 className="text-lg font-semibold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  Multi-Tutor Marketplace
                </h3>
              </div>
              <p className="text-slate-700 text-sm mb-4">
                Soon you'll be able to pick from multiple tutors—same high standards, different personalities and styles.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Curated network of expert tutors</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Match with your learning style</span>
                </li>
              </ul>
              <Button asChild variant="outline" size="sm">
                <Link href="/marketplace">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                  In Research
                </span>
                <h3 className="text-lg font-semibold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  Summit AI Tutor
                </h3>
              </div>
              <p className="text-slate-700 text-sm mb-4">
                We're exploring an AI assistant trained on our teaching approach to give students 24/7, highly personalized practice.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Always with consent and privacy at the core</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Supplementary to human tutoring</span>
                </li>
              </ul>
              <Button asChild variant="outline" size="sm">
                <Link href="/ai-tutor">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              What Students & Parents Say
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
            <p className="text-lg text-slate-100 max-w-3xl mx-auto">
              Real feedback from our tutoring sessions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-4 w-4 text-yellow-500 fill-current"
                    >
                      ★
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-slate-100 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact / Booking */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Get Started Today
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Ready to boost your grades and confidence? Get in touch to discuss your needs.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  Contact Form
                </h3>
                <p className="text-slate-700 text-sm">
                  Tell us about your learning goals and we'll get back to you within 24 hours.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-slate-900 mb-1">
                    Learner Level
                  </label>
                  <select
                    id="level"
                    name="level"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select level</option>
                    <option value="gcse">GCSE</option>
                    <option value="alevel">A-Level</option>
                    <option value="university">University</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select subject</option>
                    <option value="maths">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="engineering">Engineering</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tell us about your learning goals, current challenges, or any questions you have..."
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" className="flex-1">
                    Send Message
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={pricingData.gigUrl} target="_blank" rel="noopener noreferrer">
                      Message on Fiverr
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </form>
              <p className="text-xs text-slate-600 text-center mt-4">
                We typically respond within 24 hours. For urgent inquiries, please use the Fiverr link above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}