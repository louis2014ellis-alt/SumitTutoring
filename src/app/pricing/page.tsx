import { Section } from "@/components/ui/section";
import { PricingCard } from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Clock,
  Users,
  Target,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { getPricingData, formatDuration } from "../lib/pricing";

const pricingData = getPricingData();

const scenarios = [
  {
    title: "New to Tutoring?",
    description: "Start with our trial session to experience our teaching style and see if we're a good fit.",
    recommended: "trial",
    features: [
      "30-minute focused session",
      "Assessment of current level", 
      "No long-term commitment",
      "Perfect introduction"
    ]
  },
  {
    title: "Need Regular Support?",
    description: "Our standard sessions are perfect for ongoing help with specific topics or exam preparation.",
    recommended: "standard",
    features: [
      "60 minutes of focused tutoring",
      "Homework help included",
      "Email support for 24 hours",
      "Flexible scheduling"
    ]
  },
  {
    title: "Exam Preparation?",
    description: "Our premium package offers the best value for comprehensive exam preparation and long-term progress.",
    recommended: "premium",
    features: [
      "5 hours of tutoring (save £25)",
      "Progress tracking",
      "Priority booking",
      "Unlimited email support"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section 
        bg="navy"
        title="Pricing & Packages"
        subtitle="Transparent pricing that matches our Fiverr gig. Choose the plan that fits your learning goals."
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                Auto-Synced
              </Badge>
              <span className="text-ink-100 text-sm">
                Prices automatically sync with our Fiverr gig
              </span>
            </div>
            <p className="text-ink-100 text-lg leading-relaxed">
              All packages are designed to provide excellent value while meeting different learning needs. 
              Whether you're trying tutoring for the first time or need comprehensive exam preparation, 
              we have a plan that works for you.
            </p>
          </div>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section 
        title="Choose Your Package"
        subtitle="All packages include expert tutoring, flexible scheduling, and ongoing support"
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
          <p className="text-sm text-ink-600 mb-4">
            All prices are in British Pounds (GBP) and automatically sync with our Fiverr gig.
          </p>
          <Button asChild variant="outline">
            <Link href={pricingData.gigUrl} target="_blank" rel="noopener noreferrer">
              View on Fiverr
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Not Sure Which to Choose? */}
      <Section 
        bg="cream"
        title="Not Sure Which to Choose?"
        subtitle="Here are some common scenarios to help you decide"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {scenarios.map((scenario, index) => {
            const recommendedPlan = pricingData.plans.find(p => p.key === scenario.recommended);
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <div className="text-center mb-4">
                  <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-ink-700 text-sm mb-4">
                    {scenario.description}
                  </p>
                  {recommendedPlan && (
                    <Badge variant="default" className="mb-4">
                      Recommended: {recommendedPlan.name}
                    </Badge>
                  )}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {scenario.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {recommendedPlan && (
                  <Button asChild className="w-full">
                    <Link href={pricingData.gigUrl} target="_blank" rel="noopener noreferrer">
                      Choose {recommendedPlan.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* What's Included */}
      <Section 
        title="What's Included in Every Package"
        subtitle="All our tutoring packages come with these essential features"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-gold-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
              Expert Tutoring
            </h3>
            <p className="text-ink-700 text-sm">
              First-Class BEng graduate with proven teaching experience
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gold-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
              Flexible Scheduling
            </h3>
            <p className="text-ink-700 text-sm">
              Book sessions that fit your schedule and learning pace
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gold-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
              Exam Focus
            </h3>
            <p className="text-ink-700 text-sm">
              Past paper practice and exam technique mastery
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gold-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
              Ongoing Support
            </h3>
            <p className="text-ink-700 text-sm">
              Email support and progress tracking between sessions
            </p>
          </div>
        </div>
      </Section>

      {/* Custom Plans */}
      <Section 
        bg="navy"
        title="Need a Custom Plan?"
        subtitle="We can create a tailored package for your specific learning needs"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-ink-100 text-lg leading-relaxed mb-6">
              Don't see exactly what you need? We're happy to create custom packages for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <ul className="space-y-2 text-ink-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span>Group tutoring sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span>Intensive exam preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span>Multiple subject packages</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <ul className="space-y-2 text-ink-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span>Extended session lengths</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span>Specialized learning support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gold-400" />
                    <span>Parent consultation sessions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch
                  <MessageCircle className="ml-2 h-4 w-4" />
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
      </Section>

      {/* FAQ */}
      <Section 
        bg="cream"
        title="Pricing FAQ"
        subtitle="Common questions about our pricing and packages"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-3">
                Why do prices match Fiverr?
              </h3>
              <p className="text-ink-700 leading-relaxed">
                We maintain consistent pricing across all platforms to ensure transparency and fairness. 
                Our Fiverr gig serves as our primary booking platform, so all prices are synchronized to avoid confusion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-3">
                Can I pay directly instead of through Fiverr?
              </h3>
              <p className="text-ink-700 leading-relaxed">
                Currently, all bookings and payments are processed through Fiverr for security and convenience. 
                This ensures you have Fiverr's buyer protection and easy payment processing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-3">
                What if I need to cancel or reschedule?
              </h3>
              <p className="text-ink-700 leading-relaxed">
                We require 24 hours notice for rescheduling. For cancellations, we follow Fiverr's cancellation policy. 
                In case of emergencies, we'll do our best to accommodate changes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-ink-700 leading-relaxed">
                Refunds are handled through Fiverr's platform according to their terms of service. 
                We're committed to your satisfaction and will work with you to resolve any issues.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
