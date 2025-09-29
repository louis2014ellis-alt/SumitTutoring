import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Eye, 
  Trash2, 
  Users, 
  Mail,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock
} from "lucide-react";
import Link from "next/link";

const dataTypes = [
  {
    category: "Personal Information",
    items: [
      "Name and contact details (email, phone)",
      "Age and educational level",
      "Parent/guardian information (for under-16s)",
      "Learning preferences and goals"
    ]
  },
  {
    category: "Learning Data",
    items: [
      "Session notes and progress tracking",
      "Practice question responses",
      "Learning patterns and difficulties",
      "Assessment results and feedback"
    ]
  },
  {
    category: "Technical Data",
    items: [
      "IP address and device information",
      "Website usage and interaction data",
      "Session recordings (with consent)",
      "Communication logs and support tickets"
    ]
  }
];

const dataUses = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Providing Tutoring Services",
    description: "To deliver personalized tutoring sessions and track your learning progress"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Communication",
    description: "To respond to your inquiries and send important updates about your sessions"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Service Improvement",
    description: "To analyze anonymized data and improve our teaching methods and platform"
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "AI Development",
    description: "To train AI models (with explicit consent) for future personalized learning features"
  }
];

const rights = [
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Right to Access",
    description: "Request a copy of all personal data we hold about you"
  },
  {
    icon: <Trash2 className="h-5 w-5" />,
    title: "Right to Delete",
    description: "Request deletion of your personal data (subject to legal requirements)"
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Right to Correct",
    description: "Request correction of inaccurate or incomplete personal data"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Right to Object",
    description: "Object to processing of your data for certain purposes"
  }
];

const childrenProtections = [
  "Explicit parental consent required for all data collection",
  "Special privacy settings and controls for under-16s",
  "Regular parental access to child's data and progress",
  "Enhanced data protection and limited data retention",
  "Clear, age-appropriate privacy notices",
  "Easy parental consent withdrawal mechanisms"
];

export default function Privacy() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section 
        bg="navy"
        title="Privacy Policy"
        subtitle="Your privacy and data protection are fundamental to our tutoring services"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-gold-400" />
              <h2 className="font-heading text-2xl font-bold text-white">
                Privacy First
              </h2>
            </div>
            <p className="text-ink-100 text-lg leading-relaxed mb-6">
              We are committed to protecting your privacy and being transparent about how we collect, 
              use, and protect your personal information. This policy explains our practices in plain English.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                GDPR Compliant
              </Badge>
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                COPPA Compliant
              </Badge>
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                Data Minimization
              </Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Collect */}
      <Section 
        title="What Information We Collect"
        subtitle="We only collect data that is necessary to provide our tutoring services"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-ink-900 mb-4">
                  {type.category}
                </h3>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-ink-700">
                      <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How We Use Data */}
      <Section 
        bg="cream"
        title="How We Use Your Information"
        subtitle="We use your data only for legitimate educational purposes"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {dataUses.map((use, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-3">
                <div className="text-gold-600 mt-1">
                  {use.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
                    {use.title}
                  </h3>
                  <p className="text-ink-700 text-sm">
                    {use.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Data Sharing */}
      <Section 
        title="Data Sharing & Third Parties"
        subtitle="We do not sell your data and limit sharing to essential service providers"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <h3 className="font-heading text-lg font-semibold text-ink-900 mb-4">
              We Only Share Data With:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-ink-900">Fiverr (Payment Processing)</span>
                  <p className="text-ink-700 text-sm">For secure payment processing and booking management</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-ink-900">Zoom (Video Conferencing)</span>
                  <p className="text-ink-700 text-sm">For conducting online tutoring sessions</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-ink-900">Email Service Providers</span>
                  <p className="text-ink-700 text-sm">For sending important updates and communications</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-ink-900">Legal Requirements</span>
                  <p className="text-ink-700 text-sm">Only when required by law or to protect safety</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Your Rights */}
      <Section 
        bg="navy"
        title="Your Privacy Rights"
        subtitle="You have control over your personal data"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {rights.map((right, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="text-gold-400 mt-1">
                    {right.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {right.title}
                    </h3>
                    <p className="text-ink-100 text-sm">
                      {right.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-ink-100 mb-4">
              To exercise any of these rights, contact us using the information below.
            </p>
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
              <Link href="/contact">
                Contact Us About Privacy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Children's Privacy */}
      <Section 
        title="Children's Privacy Protection"
        subtitle="Special protections for students under 16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-cream-50 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-gold-600" />
              <h3 className="font-heading text-lg font-semibold text-ink-900">
                Enhanced Protection for Under-16s
              </h3>
            </div>
            <p className="text-ink-700 mb-6">
              We provide enhanced privacy protections for students under 16, in compliance with 
              COPPA and GDPR requirements. Parents have full control over their child's data.
            </p>
            <ul className="space-y-3">
              {childrenProtections.map((protection, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-ink-700">{protection}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Data Security */}
      <Section 
        bg="cream"
        title="Data Security"
        subtitle="We protect your data with industry-standard security measures"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-gold-600" />
                <h3 className="font-heading text-lg font-semibold text-ink-900">
                  Technical Safeguards
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-ink-700">
                <li>• SSL encryption for all data transmission</li>
                <li>• Encrypted data storage</li>
                <li>• Regular security audits</li>
                <li>• Access controls and authentication</li>
                <li>• Secure backup systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-gold-600" />
                <h3 className="font-heading text-lg font-semibold text-ink-900">
                  Operational Safeguards
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-ink-700">
                <li>• Staff training on data protection</li>
                <li>• Limited access to personal data</li>
                <li>• Regular privacy impact assessments</li>
                <li>• Incident response procedures</li>
                <li>• Data minimization practices</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Data Retention */}
      <Section 
        title="Data Retention"
        subtitle="We keep your data only as long as necessary"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-gold-600" />
              <h3 className="font-heading text-lg font-semibold text-ink-900">
                Retention Periods
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-ink-900 mb-2">Active Tutoring Data</h4>
                <p className="text-ink-700 text-sm">
                  Retained for the duration of your tutoring relationship plus 2 years for 
                  academic record purposes.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-ink-900 mb-2">Communication Records</h4>
                <p className="text-ink-700 text-sm">
                  Retained for 3 years for customer service and legal compliance purposes.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-ink-900 mb-2">Technical Logs</h4>
                <p className="text-ink-700 text-sm">
                  Retained for 1 year for security and performance monitoring.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-ink-900 mb-2">Marketing Data</h4>
                <p className="text-ink-700 text-sm">
                  Retained until you unsubscribe or request deletion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section 
        bg="navy"
        title="Contact Us About Privacy"
        subtitle="Questions about this policy or your data? We're here to help"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Privacy Contact Information
            </h3>
            <div className="space-y-4 text-ink-100">
              <p>
                <strong>Data Protection Officer:</strong> Summit Tutoring Privacy Team
              </p>
              <p>
                <strong>Email:</strong> privacy@summittutoring.com
              </p>
              <p>
                <strong>Response Time:</strong> We respond to privacy inquiries within 30 days
              </p>
            </div>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                <Link href="/contact">
                  Send Privacy Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Policy Updates */}
      <Section 
        bg="cream"
        title="Policy Updates"
        subtitle="We'll notify you of any significant changes to this policy"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <h3 className="font-heading text-lg font-semibold text-ink-900 mb-4">
              Last Updated: January 28, 2025
            </h3>
            <p className="text-ink-700 mb-4">
              We may update this privacy policy from time to time to reflect changes in our 
              practices or legal requirements. We will notify you of any significant changes by:
            </p>
            <ul className="space-y-2 text-ink-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Email notification to all active users</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Prominent notice on our website</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Updated version date at the top of this policy</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
