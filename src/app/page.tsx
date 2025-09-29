import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Feature } from "@/components/ui/feature";
import { PricingCard } from "@/components/ui/pricing-card";
import { Testimonial } from "@/components/ui/testimonial";
import { Badge } from "@/components/ui/badge";
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
    title: "First-Class Graduate Tutor",
    description: "Strong subject expertise with up-to-date teaching methods and proven academic excellence."
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
    quote: "Louis's clear explanations and patience helped me understand complex physics concepts that I'd been struggling with for months.",
    name: "Sarah M.",
    role: "A-Level Physics Student",
    rating: 5
  },
  {
    quote: "My son's confidence in maths improved dramatically thanks to Louis's teaching approach. Highly recommended!",
    name: "David K.",
    role: "Parent of GCSE Student",
    rating: 5
  },
  {
    quote: "Louis breaks down engineering concepts in a way that makes them accessible and interesting. Excellent tutor.",
    name: "Emma R.",
    role: "University Engineering Student",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Section 
        bg="navy" 
        className="relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="text-center">
            <p className="text-sm font-medium text-gold-400 uppercase tracking-wider mb-4">
              GCSE & A-Level Maths & Physics
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Clear, patient tutoring that lifts grades and confidence
            </h1>
            <p className="text-lg text-ink-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              First-Class BEng graduate offering clear, patient online tutoring in GCSE & A-Level Maths and Physics. 
              Exam-focused and neurodivergent-aware—tailored to how <em>you</em> learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold">
                <Link href="#pricing">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900">
                <Link href={pricingData.gigUrl} target="_blank" rel="noopener noreferrer">
                  Message on Fiverr
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-700 to-navy-900 opacity-50"></div>
      </Section>

      {/* 2. Why Summit (USP) */}
      <Section 
        title="Our Difference"
        subtitle="Four key reasons why students and parents trust Summit Tutoring"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* 3. Neurodivergent-Aware Teaching */}
      <Section 
        bg="cream"
        kicker="Every brain learns differently"
        title="Personalized, inclusive support for ADHD, dyslexia, dyspraxia & anxiety"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-ink-700">
                    <strong>Lesson formats adapted</strong> to focus style and pace—short chunks, visuals, prompts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-ink-700">
                    <strong>Dual-coding explanations</strong> (visual + verbal) and retrieval practice.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-ink-700">
                    <strong>Anxiety-aware exam prep:</strong> calm scripts, timed drills, review checkpoints.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-ink-700">
                    <strong>Optional breaks</strong> and flexible flow to keep sessions productive.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-3">
                <Brain className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-ink-700 italic">
                    "Diagnosed ADHD myself and close family with dyslexia/dyscalculia—this experience shapes how I teach."
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
      </Section>

      {/* 4. Subjects & Services */}
      <Section 
        title="Subjects & Services"
        subtitle="Expert tutoring across key subjects and levels"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-soft card-hover border border-ink-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-gold-600">
                  {subject.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink-900">
                  {subject.name}
                </h3>
              </div>
              <p className="text-ink-700 text-sm">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Pricing */}
      <Section 
        id="pricing"
        bg="cream"
        title="Pricing"
        subtitle="All packages match our Fiverr gig. Choose the plan that fits your goals—trial options, one-off sessions, or bundled progress plans."
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingData.plans.map((plan) => (
            <PricingCard
              key={plan.key}
              name={plan.name}
              price={plan.price}
              originalPrice={plan.originalPrice}
              duration={formatDuration(plan.durationMinutes)}
              description={plan.description}
              features={plan.bullets}
              ctaLabel={plan.cta}
              ctaHref={pricingData.gigUrl}
              highlighted={plan.popular}
              highlight={plan.highlight}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-ink-600">
            Prices auto-synced with Fiverr. Need a custom plan?{" "}
            <Link href="/contact" className="text-gold-600 hover:text-gold-700 font-medium">
              Get in touch
            </Link>
          </p>
        </div>
      </Section>

      {/* 6. Testimonials */}
      <Section 
        title="What Students & Parents Say"
        subtitle="Real feedback from our tutoring sessions"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </Section>

      {/* 7. About the Tutor */}
      <Section 
        bg="navy"
        title="About the Tutor"
        subtitle="Meet your First-Class BEng graduate tutor"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  First-Class BEng Graduate
                </h3>
                <p className="text-ink-100 mb-6 leading-relaxed">
                  I'm passionate about making complex STEM concepts accessible and engaging. 
                  With a First-Class Honours degree in Electrical & Electronic Engineering, 
                  I bring both academic excellence and real-world understanding to every session.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-ink-100">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Online via Zoom</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink-100">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Homework help included</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink-100">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Past paper mastery</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink-100">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Flexible packages</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gold-500/20 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gold-400" />
                </div>
                <p className="text-ink-100 text-sm italic">
                  Professional photo coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Contact / Booking */}
      <Section 
        title="Get Started Today"
        subtitle="Ready to boost your grades and confidence? Get in touch to discuss your needs."
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-medium">
            <div className="text-center mb-6">
              <h3 className="font-heading text-xl font-semibold text-ink-900 mb-2">
                Contact Form
              </h3>
              <p className="text-ink-700 text-sm">
                Tell us about your learning goals and we'll get back to you within 24 hours.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-ink-900 mb-1">
                  Learner Level
                </label>
                <select
                  id="level"
                  name="level"
                  className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="">Select level</option>
                  <option value="gcse">GCSE</option>
                  <option value="alevel">A-Level</option>
                  <option value="university">University</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink-900 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="">Select subject</option>
                  <option value="maths">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="engineering">Engineering</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-900 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
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
            <p className="text-xs text-ink-600 text-center mt-4">
              We typically respond within 24 hours. For urgent inquiries, please use the Fiverr link above.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. Vision Teasers (Roadmap) */}
      <Section 
        bg="cream"
        title="Future Vision"
        subtitle="Exciting developments coming to Summit Tutoring"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">Coming Soon</Badge>
              <h3 className="font-heading text-lg font-semibold text-ink-900">
                Multi-Tutor Marketplace
              </h3>
            </div>
            <p className="text-ink-700 text-sm mb-4">
              Soon you'll be able to pick from multiple tutors—same high standards, different personalities and styles.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-ink-700">
                <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Curated network of expert tutors</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-700">
                <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
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
          
          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">In Research</Badge>
              <h3 className="font-heading text-lg font-semibold text-ink-900">
                Summit AI Tutor
              </h3>
            </div>
            <p className="text-ink-700 text-sm mb-4">
              We're exploring an AI assistant trained on our teaching approach to give students 24/7, highly personalized practice.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-ink-700">
                <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Always with consent and privacy at the core</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-700">
                <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
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
      </Section>

      {/* 10. Footer - handled by layout */}
    </div>
  );
}