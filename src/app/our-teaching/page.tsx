import { Section } from "@/components/ui/section";
import { Feature } from "@/components/ui/feature";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  CheckCircle, 
  Target, 
  Users, 
  BookOpen, 
  Clock,
  ArrowRight,
  Heart,
  Lightbulb,
  Shield
} from "lucide-react";
import Link from "next/link";

const teachingMethods = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Personalised Learning",
    description: "Every lesson is tailored to your unique learning style, pace, and goals. We adapt our approach based on how you process information best."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Retrieval Practice",
    description: "We use evidence-based techniques like spaced repetition and active recall to help you retain information long-term."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Anxiety-Aware Approach",
    description: "Calm, supportive environment with techniques to manage exam stress and build confidence in your abilities."
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Visual & Verbal Learning",
    description: "Dual-coding explanations using diagrams, examples, and clear verbal explanations to reinforce understanding."
  }
];

const studyHabits = [
  "Spaced repetition for long-term retention",
  "Active recall techniques for exam preparation", 
  "Chunking complex topics into manageable pieces",
  "Regular progress check-ins and feedback",
  "Past paper practice with mark scheme analysis",
  "Flexible session structure with optional breaks"
];

const examCalm = [
  "Pre-exam anxiety management techniques",
  "Timed practice sessions to build confidence",
  "Calm scripts and breathing exercises",
  "Review checkpoints and progress tracking",
  "Positive reinforcement and encouragement",
  "Flexible scheduling around exam periods"
];

const faqs = [
  {
    question: "Do you work with students who have ADHD, dyslexia, or other learning differences?",
    answer: "Absolutely! I have personal experience with ADHD and close family members with dyslexia and dyscalculia. This informs my teaching approach, which focuses on adapting to different learning styles, using visual aids, and providing flexible session structures."
  },
  {
    question: "How do online lessons work?",
    answer: "Lessons are conducted via Zoom with screen sharing for visual explanations. I use digital whiteboards, diagrams, and interactive tools to make concepts clear. All sessions are recorded (with permission) for review."
  },
  {
    question: "Do you set homework?",
    answer: "Yes, but it's always purposeful and tailored to your needs. This might include practice problems, past paper questions, or review exercises. I provide feedback on all homework to track your progress."
  },
  {
    question: "What if I need to reschedule a lesson?",
    answer: "I understand that life happens! I offer flexible scheduling and require 24 hours notice for rescheduling. For urgent situations, I'll do my best to accommodate changes."
  },
  {
    question: "How do you track my progress?",
    answer: "I keep detailed notes on your strengths, areas for improvement, and progress over time. We'll have regular check-ins to discuss your goals and adjust our approach as needed."
  },
  {
    question: "Can parents be involved in the learning process?",
    answer: "Absolutely! I believe in strong parent-tutor partnerships. I provide regular updates on progress and am happy to discuss strategies for supporting learning at home."
  }
];

export default function OurTeaching() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section 
        bg="navy"
        title="Our Teaching Approach"
        subtitle="Evidence-based, neurodivergent-aware tutoring that adapts to how you learn best"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Brain className="h-8 w-8 text-gold-400" />
              <h2 className="font-heading text-2xl font-bold text-white">
                Every Brain Learns Differently
              </h2>
            </div>
            <p className="text-ink-100 text-lg leading-relaxed mb-6">
              My teaching philosophy is built on the understanding that every student has unique strengths, 
              challenges, and ways of processing information. Having been diagnosed with ADHD myself and 
              having close family with dyslexia and dyscalculia, I bring both professional expertise and 
              personal understanding to every session.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                ADHD-Aware
              </Badge>
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                Dyslexia-Friendly
              </Badge>
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                Anxiety-Supportive
              </Badge>
              <Badge variant="secondary" className="bg-gold-500/20 text-gold-300">
                Evidence-Based
              </Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* How We Personalise */}
      <Section 
        title="How We Personalise Learning"
        subtitle="Adapting our approach to match your unique learning style and needs"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {teachingMethods.map((method, index) => (
            <Feature
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
            />
          ))}
        </div>
      </Section>

      {/* Study Habits We Build */}
      <Section 
        bg="cream"
        title="Study Habits We Build"
        subtitle="Evidence-based techniques for long-term academic success"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink-900 mb-4">
                Core Learning Techniques
              </h3>
              <ul className="space-y-3">
                {studyHabits.map((habit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-ink-700">{habit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-gold-600" />
                <h4 className="font-heading text-lg font-semibold text-ink-900">
                  Retrieval Practice
                </h4>
              </div>
              <p className="text-ink-700 text-sm mb-4">
                We use scientifically-proven methods to help you remember information long-term:
              </p>
              <ul className="space-y-2 text-sm text-ink-700">
                <li>• Spaced repetition scheduling</li>
                <li>• Active recall exercises</li>
                <li>• Interleaving different topics</li>
                <li>• Elaborative interrogation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Exam Calm */}
      <Section 
        title="Exam Calm & Confidence"
        subtitle="Anxiety-aware techniques for exam success"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink-900 mb-4">
                Managing Exam Anxiety
              </h3>
              <p className="text-ink-700 mb-6">
                Exam stress is normal, but it doesn't have to hold you back. I provide practical 
                techniques to help you stay calm, focused, and confident during exams.
              </p>
              <ul className="space-y-3">
                {examCalm.map((technique, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-ink-700">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-gold-600" />
                <h4 className="font-heading text-lg font-semibold text-ink-900">
                  Calm Exam Strategies
                </h4>
              </div>
              <div className="space-y-3 text-sm text-ink-700">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>Timed practice builds confidence</span>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>Breathing exercises for focus</span>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>Positive self-talk techniques</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Parent Partnership */}
      <Section 
        bg="navy"
        title="Parent Partnership"
        subtitle="Working together to support your child's learning journey"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-gold-400" />
                <h3 className="font-heading text-lg font-semibold text-white">
                  Regular Communication
                </h3>
              </div>
              <ul className="space-y-2 text-ink-100 text-sm">
                <li>• Progress updates after each session</li>
                <li>• Monthly goal-setting discussions</li>
                <li>• Strategies for home support</li>
                <li>• Exam preparation planning</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-gold-400" />
                <h3 className="font-heading text-lg font-semibold text-white">
                  Holistic Support
                </h3>
              </div>
              <ul className="space-y-2 text-ink-100 text-sm">
                <li>• Understanding learning differences</li>
                <li>• Building confidence and self-esteem</li>
                <li>• Managing academic pressure</li>
                <li>• Celebrating progress and achievements</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section 
        title="Frequently Asked Questions"
        subtitle="Common questions about our teaching approach and methods"
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

      {/* CTA */}
      <Section 
        bg="cream"
        title="Ready to Experience Our Teaching?"
        subtitle="Book a trial session to see how our approach can help you succeed"
      >
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/#pricing">
                Book a Trial Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Ask a Question
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
