import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle,
  Lock,
  Eye,
  Trash2,
  Users,
  Clock,
  Target,
  Mail
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Personalized Learning",
    description: "AI adapts to your learning style, pace, and knowledge gaps in real-time"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Availability",
    description: "Practice and get help whenever you need it, day or night"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Exam-Focused Practice",
    description: "Targeted practice questions and exam technique training"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Human + AI Support",
    description: "AI supplements human tutoring, never replaces the personal connection"
  }
];

const privacyFeatures = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Data Encryption",
    description: "All data is encrypted in transit and at rest"
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Anonymization",
    description: "Personal identifiers are removed from training data"
  },
  {
    icon: <Trash2 className="h-5 w-5" />,
    title: "Right to Delete",
    description: "You can request deletion of your data at any time"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Parental Consent",
    description: "Special protections for students under 16"
  }
];

const faqs = [
  {
    question: "How will the AI be trained?",
    answer: "The AI will be trained on anonymized, aggregated learning data from our tutoring sessions. We'll use techniques like federated learning to ensure individual student data never leaves their device. All training data will be stripped of personal identifiers and used only to improve the AI's teaching effectiveness."
  },
  {
    question: "Can I opt out of AI features?",
    answer: "Absolutely. AI features are completely optional. You can choose to use only human tutoring, only AI practice, or a combination of both. You can also opt out of data collection for AI training while still using the AI tutor for practice."
  },
  {
    question: "Will the AI replace my human tutor?",
    answer: "No, the AI is designed to supplement human tutoring, not replace it. Think of it as having a practice partner available 24/7. Your human tutor provides the personal connection, emotional support, and nuanced explanations that AI cannot replicate."
  },
  {
    question: "What data will be collected?",
    answer: "We may collect anonymized data about learning patterns, common mistakes, and effective teaching strategies. This could include session notes (with personal details removed), practice question responses, and learning progress metrics. All data collection is opt-in and transparent."
  },
  {
    question: "How do you ensure privacy for under-16s?",
    answer: "For students under 16, we require explicit parental consent for any AI data collection. Parents can review, modify, or revoke consent at any time. We follow strict COPPA and GDPR guidelines for protecting children's data."
  },
  {
    question: "When will the AI tutor be available?",
    answer: "We're currently in the research and development phase. The AI tutor is expected to launch in late 2025, starting with basic practice features and gradually expanding to more sophisticated personalized learning capabilities."
  }
];

export default function AITutor() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section 
        bg="navy"
        title="Summit AI Tutor"
        subtitle="In Research: The future of personalized learning with AI-powered practice and support"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                In Research
              </Badge>
              <h2 className="font-heading text-2xl font-bold text-white">
                AI-Powered Learning
              </h2>
            </div>
            <p className="text-ink-100 text-lg leading-relaxed mb-6">
              We're exploring an AI assistant trained on our teaching approach to give students 24/7, 
              highly personalized practice—always with consent and privacy at the core.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  For Students
                </h3>
                <p className="text-ink-100 text-sm">
                  Get instant feedback, practice questions, and personalized learning paths
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  For Parents
                </h3>
                <p className="text-ink-100 text-sm">
                  Transparent data practices and full control over your child's AI interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section 
        title="How AI Will Enhance Learning"
        subtitle="AI-powered features designed to complement human tutoring"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gold-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-gold-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-ink-700 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Privacy & Ethics */}
      <Section 
        bg="cream"
        title="Privacy & Ethics First"
        subtitle="Transparent data practices and ethical AI development"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink-900 mb-4">
                Our Privacy Commitments
              </h3>
              <ul className="space-y-4">
                {privacyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-gold-600 mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-ink-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-ink-700 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-gold-600" />
                <h3 className="font-heading text-lg font-semibold text-ink-900">
                  Ethical AI Principles
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>Transparent data collection and usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>User control over their data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>Bias detection and mitigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>Regular privacy audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>Human oversight of AI decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section 
        title="How AI Will Work"
        subtitle="A transparent look at our AI development approach"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-navy-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                  Data Collection (Opt-in)
                </h3>
                <p className="text-ink-700">
                  With your consent, we collect anonymized learning data from tutoring sessions, 
                  practice questions, and progress tracking. All personal information is removed 
                  before any data is used for AI training.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-navy-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                  AI Training & Development
                </h3>
                <p className="text-ink-700">
                  Our AI learns from aggregated, anonymized data to understand effective teaching 
                  patterns, common student mistakes, and successful learning strategies. We use 
                  federated learning to keep individual data private.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-navy-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                  Personalized Practice
                </h3>
                <p className="text-ink-700">
                  The AI provides personalized practice questions, instant feedback, and learning 
                  recommendations based on your progress and learning style. It adapts in real-time 
                  to help you improve.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-navy-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                  Human Oversight
                </h3>
                <p className="text-ink-700">
                  All AI recommendations are reviewed by human tutors. The AI supplements but never 
                  replaces the personal connection and nuanced understanding that human tutors provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Timeline */}
      <Section 
        bg="navy"
        title="Research & Development Timeline"
        subtitle="Our roadmap for ethical AI development"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gold-500 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                Q1
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  Q1 2025: Privacy Framework
                </h3>
                <p className="text-ink-100">
                  Developing comprehensive privacy policies, consent mechanisms, and data protection 
                  protocols for AI training and usage.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gold-500 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                Q2
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  Q2 2025: AI Model Development
                </h3>
                <p className="text-ink-100">
                  Building the core AI models with federated learning, bias detection, and 
                  human oversight mechanisms.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gold-500 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                Q3
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  Q3 2025: Beta Testing
                </h3>
                <p className="text-ink-100">
                  Limited beta testing with consenting students and parents to validate 
                  AI effectiveness and privacy protections.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gold-500 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                Q4
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  Q4 2025: Public Launch
                </h3>
                <p className="text-ink-100">
                  Full launch of AI tutor features with comprehensive privacy controls 
                  and human oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section 
        bg="cream"
        title="Frequently Asked Questions"
        subtitle="Common questions about our AI tutor development"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-ink-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Get Updates */}
      <Section 
        title="Stay Updated"
        subtitle="Get notified about AI tutor development and launch"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-cream-50 p-8 rounded-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-gold-600" />
              <h3 className="font-heading text-lg font-semibold text-ink-900">
                Get Updates
              </h3>
            </div>
            <p className="text-ink-700 mb-6">
              Be the first to know about AI tutor development progress, privacy updates, 
              and launch announcements.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-md border border-ink-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-600">
                <input type="checkbox" id="parent-consent" className="rounded" />
                <label htmlFor="parent-consent">
                  I am over 16 or have parental consent to receive updates
                </label>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Subscribe to Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-ink-600 text-xs mt-4">
              We'll only send relevant updates about AI development. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section 
        bg="navy"
        title="Questions About AI Development?"
        subtitle="We're committed to transparency and welcome your questions"
      >
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
              <Link href="/contact">
                Contact Us
                <MessageCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900">
              <Link href="/privacy">
                Read Privacy Policy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
