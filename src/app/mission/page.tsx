import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle,
  Lightbulb,
  Shield,
  Heart,
  BookOpen
} from "lucide-react";
import Link from "next/link";

const problems = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Outdated Teaching Methods",
    description: "Traditional education hasn't evolved with our understanding of how brains actually learn. One-size-fits-all approaches leave many students behind."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Poor Neurodivergent Support",
    description: "Students with ADHD, dyslexia, anxiety, or other learning differences often struggle in rigid classroom environments designed for neurotypical learners."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Exam Pressure Without Support",
    description: "High-stakes testing creates anxiety without teaching students how to manage stress or develop effective study strategies."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Limited Personalization",
    description: "Large class sizes and standardized curricula make it impossible to adapt to individual learning styles, pace, and interests."
  }
];

const solutions = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Modern Learning Science",
    description: "We use evidence-based techniques like spaced repetition, dual coding, and retrieval practice that actually work with how brains learn."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Inclusive by Design",
    description: "Every lesson is adapted for different learning styles. We celebrate neurodiversity and help every student find their unique path to success."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Anxiety-Aware Approach",
    description: "We teach stress management alongside academic content, preparing students for exams and the real-world challenges they'll face."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Truly Personalized",
    description: "One-on-one sessions allow us to adapt every aspect of learning to the individual student's needs, interests, and goals."
  }
];

const values = [
  {
    title: "No One is Smart or Dumb",
    description: "We all just think differently. Our job is to help every student discover their unique strengths and learning style."
  },
  {
    title: "Education Should Adapt to You",
    description: "Not the other way around. We believe learning should be flexible, supportive, and designed around the student."
  },
  {
    title: "Real-World Preparation",
    description: "We prepare students not just for exams, but for a future where remote work, flexible thinking, and continuous learning are the norm."
  },
  {
    title: "Evidence-Based Teaching",
    description: "We use proven methods from cognitive science and educational research, not outdated traditions or guesswork."
  }
];

export default function Mission() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="text-center">
              <p className="text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
                Our Mission
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                Fixing a Broken System
              </h1>
              <p className="text-lg text-slate-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                The current education system is outdated—teaching methods haven't kept pace with the real world, 
                and schools often struggle to support students with ADHD, dyslexia, or anxiety. Summit Tutoring 
                exists to change this.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
                <p className="text-xl text-slate-100 italic">
                  "We believe no one is smart or dumb—we all just think differently. 
                  Summit Tutoring helps every learner climb higher."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 opacity-50"></div>
      </section>

      {/* The Problem */}
      <Section 
        title="What's Wrong with Traditional Education?"
        subtitle="The system is failing too many students"
      >
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-3" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              The Reality
            </h3>
            <p className="text-red-800 leading-relaxed">
              Traditional education was designed for a different era. It assumes all students learn the same way, 
              at the same pace, with the same interests. This one-size-fits-all approach leaves many students 
              feeling lost, frustrated, or like they're "not smart enough" when the real problem is the system itself.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-start gap-3">
                <div className="text-red-600 mt-1">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                    {problem.title}
                  </h3>
                  <p className="text-slate-700 text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Solution */}
      <Section 
        bg="yellow-50"
        title="How Summit Tutoring is Different"
        subtitle="We're here to modernize tutoring. Every learner, every style, supported."
      >
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
              Our Approach
            </h3>
            <p className="text-green-800 leading-relaxed">
              We adapt lessons to every brain, preparing learners not just for exams, but for a future where 
              remote learning and flexible thinking are the norm. Our evidence-based methods work with how 
              brains actually learn, not against them.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-3">
                <div className="text-green-600 mt-1">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                    {solution.title}
                  </h3>
                  <p className="text-slate-700 text-sm">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Values */}
      <Section 
        title="What We Believe"
        subtitle="The principles that guide everything we do"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                      {value.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Neurodivergent Focus */}
      <Section 
        bg="navy"
        title="Neurodivergent-Aware Teaching"
        subtitle="Every brain is different, and that's something to celebrate"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                Why This Matters
              </h3>
              <p className="text-slate-100 mb-6 leading-relaxed">
                Traditional education often treats neurodivergent students as "problems to fix" rather than 
                unique learners with different strengths. We see ADHD, dyslexia, anxiety, and other differences 
                as variations in how brains work—not deficits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-100">Lessons adapted to focus style and pace</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-100">Visual and verbal learning combined</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-100">Anxiety-aware exam preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-100">Flexible session structure with breaks</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Brain className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                    Personal Experience
                  </h4>
                  <p className="text-slate-100 text-sm italic">
                    "Our founder was diagnosed with ADHD and has close family with dyslexia and dyscalculia. 
                    This personal experience shapes how we approach every student—with understanding, 
                    patience, and methods that actually work for different types of brains."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Future Vision */}
      <Section 
        bg="cream"
        title="The Future of Education"
        subtitle="Preparing students for a changing world"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  Remote-First Future
                </h3>
              </div>
              <p className="text-slate-700 text-sm">
                The world is moving toward remote work and flexible learning. We prepare students not just 
                for exams, but for a future where they'll need to learn independently, manage their own 
                time, and adapt to new technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  Lifelong Learning
                </h3>
              </div>
              <p className="text-slate-700 text-sm">
                We teach students how to learn, not just what to learn. By developing effective study habits, 
                critical thinking skills, and self-advocacy, we prepare them for continuous learning throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section 
        title="Ready to Experience Modern Tutoring?"
        subtitle="Join us in revolutionizing how students learn"
      >
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/tutors">
                Meet Our Tutors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get in Touch
                <MessageCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
