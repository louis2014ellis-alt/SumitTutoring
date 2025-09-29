import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle,
  Target,
  Clock,
  Award,
  Send
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Diverse Teaching Styles",
    description: "Find tutors who match your learning preferences and personality"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Quality Assured",
    description: "All tutors are vetted and maintain our high standards"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Specialized Expertise",
    description: "Access tutors with specific subject knowledge and exam board experience"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Availability",
    description: "More tutors means more scheduling options to fit your needs"
  }
];

const tutorRequirements = [
  "First-Class or 2:1 degree in relevant subject",
  "Minimum 2 years tutoring experience",
  "Strong communication and patience skills",
  "Experience with GCSE/A-Level curriculum",
  "Commitment to neurodivergent-aware teaching",
  "Professional references and background check"
];

const commissionStructure = [
  "Platform retains 15% commission per session",
  "Tutors receive 85% of session fees",
  "Monthly payment processing",
  "Transparent fee structure with no hidden costs",
  "Support for marketing and student matching",
  "Access to teaching resources and training"
];

export default function Marketplace() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section 
        bg="navy"
        title="Multi-Tutor Marketplace"
        subtitle="Coming Soon: Build your perfect tutor match with our curated network of expert educators"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                Coming Soon
              </Badge>
              <h2 className="font-heading text-2xl font-bold text-white">
                The Future of Tutoring
              </h2>
            </div>
            <p className="text-ink-100 text-lg leading-relaxed mb-6">
              Soon you'll be able to pick from multiple tutors—same high standards, different personalities and styles. 
              Our marketplace will connect you with the perfect tutor match for your learning needs and preferences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  For Students
                </h3>
                <p className="text-ink-100 text-sm">
                  Find tutors who match your learning style, schedule, and subject needs
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  For Tutors
                </h3>
                <p className="text-ink-100 text-sm">
                  Join our network and reach students who need your expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section 
        title="Why Our Marketplace?"
        subtitle="A curated network of expert tutors with diverse teaching styles and specializations"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-gold-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-gold-600">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-ink-700 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section 
        bg="cream"
        title="How It Will Work"
        subtitle="Simple steps to find your perfect tutor match"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-navy-900 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                Browse & Filter
              </h3>
              <p className="text-ink-700 text-sm">
                Search tutors by subject, level, teaching style, and availability. 
                Read profiles and watch intro videos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-navy-900 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                Book a Trial
              </h3>
              <p className="text-ink-700 text-sm">
                Start with a trial session to see if the tutor is a good fit. 
                No commitment required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-navy-900 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                Start Learning
              </h3>
              <p className="text-ink-700 text-sm">
                Book regular sessions and track your progress. 
                Switch tutors anytime if your needs change.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Join as a Tutor */}
      <Section 
        title="Join as a Tutor"
        subtitle="Become part of our network of expert educators"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink-900 mb-4">
                Tutor Requirements
              </h3>
              <ul className="space-y-3 mb-6">
                {tutorRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-ink-700">{requirement}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="font-heading text-xl font-semibold text-ink-900 mb-4">
                Commission Structure
              </h3>
              <ul className="space-y-3">
                {commissionStructure.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-cream-50 p-6 rounded-2xl">
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-4">
                Apply to Join Our Network
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="tutor-name" className="block text-sm font-medium text-ink-900 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="tutor-name"
                    name="name"
                    className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="tutor-email" className="block text-sm font-medium text-ink-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="tutor-email"
                    name="email"
                    className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subjects" className="block text-sm font-medium text-ink-900 mb-1">
                    Subjects You Teach
                  </label>
                  <input
                    type="text"
                    id="subjects"
                    name="subjects"
                    placeholder="e.g., GCSE Maths, A-Level Physics"
                    className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-ink-900 mb-1">
                    Availability
                  </label>
                  <input
                    type="text"
                    id="availability"
                    name="availability"
                    placeholder="e.g., Weekdays 4-8pm, Weekends"
                    className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="hourly-range" className="block text-sm font-medium text-ink-900 mb-1">
                    Hourly Rate Range
                  </label>
                  <input
                    type="text"
                    id="hourly-range"
                    name="hourlyRange"
                    placeholder="e.g., £30-45 per hour"
                    className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="intro" className="block text-sm font-medium text-ink-900 mb-1">
                    Brief Introduction
                  </label>
                  <textarea
                    id="intro"
                    name="intro"
                    rows={4}
                    placeholder="Tell us about your teaching experience, qualifications, and approach..."
                    className="w-full px-3 py-2 border border-ink-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Application
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Student Waitlist */}
      <Section 
        bg="navy"
        title="Student Waitlist"
        subtitle="Be the first to know when our marketplace launches"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-6 w-6 text-gold-400" />
              <h3 className="font-heading text-lg font-semibold text-white">
                Early Access
              </h3>
            </div>
            <p className="text-ink-100 mb-6">
              Join our waitlist to get early access to the marketplace and exclusive launch offers.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-ink-200 text-xs mt-4">
              We'll only use your email to notify you about the marketplace launch. No spam, ever.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section 
        bg="cream"
        title="Launch Timeline"
        subtitle="Our roadmap for bringing the marketplace to life"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gold-500 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                Q1
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                  Q1 2025: Platform Development
                </h3>
                <p className="text-ink-700">
                  Building the core marketplace platform, tutor onboarding system, and student matching algorithms.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gold-500 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                Q2
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                  Q2 2025: Beta Testing
                </h3>
                <p className="text-ink-700">
                  Limited beta launch with select tutors and students to test the platform and gather feedback.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gold-500 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                Q3
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                  Q3 2025: Public Launch
                </h3>
                <p className="text-ink-700">
                  Full marketplace launch with comprehensive tutor network and student matching features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section 
        title="Questions About the Marketplace?"
        subtitle="Get in touch if you have questions about joining as a tutor or student"
      >
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us
                <MessageCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-teaching">
                Learn About Our Teaching
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
