import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle,
  BookOpen,
  Star,
  Clock,
  Mail
} from "lucide-react";
import Link from "next/link";
import tutorsData from "../data/tutors.json";

const { activeTutors, comingSoon, stats } = tutorsData;

export default function Tutors() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="text-center">
              <p className="text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
                Our Team
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                Meet Our Tutors
              </h1>
              <p className="text-lg text-slate-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Summit Tutoring is more than one tutor. Today, our lead tutor offers expert support in Maths and Physics. 
                Soon, you'll be able to choose from a team of tutors—each with unique strengths, styles, and subjects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">{stats.activeTutors}</div>
                  <div className="text-sm text-slate-300">Active Tutors</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">{stats.comingSoon}</div>
                  <div className="text-sm text-slate-300">Coming Soon</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">{stats.totalStudents}</div>
                  <div className="text-sm text-slate-300">Students Helped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 opacity-50"></div>
      </section>

      {/* Active Tutors */}
      <Section 
        title="Current Tutors"
        subtitle="Expert educators available now"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 max-w-4xl mx-auto">
          {activeTutors.map((tutor) => (
            <div key={tutor.id} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-500/20 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-yellow-600" />
                  </div>
                  <Badge variant="default" className="bg-green-500 text-white">
                    Available Now
                  </Badge>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                      {tutor.name}
                    </h3>
                    {tutor.isFounder && (
                      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-700">
                        Founder
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg text-slate-600 mb-4">{tutor.title}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Qualifications</h4>
                      <p className="text-slate-700 text-sm">{tutor.qualifications}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Experience</h4>
                      <p className="text-slate-700 text-sm">{tutor.experience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {tutor.subjects.map((subject, index) => (
                          <span key={index} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {tutor.specialties.map((specialty, index) => (
                          <span key={index} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {tutor.bio}
                  </p>
                  
                  {tutor.personalNote && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                      <p className="text-slate-700 italic text-sm">
                        "{tutor.personalNote}"
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <Link href="/pricing">
                        Book a Session
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link href="/contact">
                        Ask a Question
                        <MessageCircle className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Coming Soon */}
      <Section 
        bg="yellow-50"
        title="More Tutors Coming Soon"
        subtitle="Expanding our team to serve more students and subjects"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-3" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                Growing Our Team
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We're carefully selecting additional tutors who share our mission of inclusive, 
                evidence-based teaching. Each new tutor brings unique expertise and teaching styles 
                to give you more options for finding the perfect match.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((tutor) => (
            <div key={tutor.id} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                  Coming {tutor.joinDate}
                </Badge>
              </div>
              
              <div className="text-center mb-4">
                <div className="bg-slate-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  {tutor.name}
                </h3>
                <p className="text-slate-600 text-sm">{tutor.title}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-slate-900 text-sm mb-1">Qualifications</h4>
                  <p className="text-slate-700 text-xs">{tutor.qualifications}</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm mb-1">Subjects</h4>
                  <div className="flex flex-wrap gap-1">
                    {tutor.subjects.map((subject, index) => (
                      <span key={index} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm mb-1">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {tutor.specialties.map((specialty, index) => (
                      <span key={index} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Multiple Tutors */}
      <Section 
        title="Why Multiple Tutors?"
        subtitle="Different styles, same high standards"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  Find Your Perfect Match
                </h3>
              </div>
              <p className="text-slate-700 text-sm mb-4">
                Every student learns differently. With multiple tutors, you can find someone whose 
                teaching style, personality, and approach matches your learning preferences.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Different communication styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Varied pacing and approaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Specialized subject expertise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-slate-900" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                  Consistent Quality
                </h3>
              </div>
              <p className="text-slate-700 text-sm mb-4">
                All our tutors share the same commitment to evidence-based teaching, 
                neurodivergent awareness, and student success. Quality is never compromised.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Rigorous selection process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Ongoing training and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Regular quality monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Student Waitlist */}
      <Section 
        bg="navy"
        title="Join the Waitlist"
        subtitle="Be the first to know when new tutors join our team"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                Early Access
              </h3>
            </div>
            <p className="text-slate-100 mb-6">
              Get notified when new tutors join our team and be among the first to book sessions 
              with our expanded team.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-yellow-500">
                  <option value="">Select subjects of interest</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="advanced-maths">Advanced Mathematics</option>
                  <option value="english">English & Humanities</option>
                  <option value="all">All subjects</option>
                </select>
              </div>
              <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-slate-200 text-xs mt-4">
              We'll only use your email to notify you about new tutors. No spam, ever.
            </p>
          </div>
        </div>
      </Section>

      {/* Tutor Application */}
      <Section 
        bg="cream"
        title="Want to Join Our Team?"
        subtitle="We're always looking for exceptional tutors who share our mission"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                What We Look For
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">First-Class or 2:1 degree in relevant subject</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Minimum 2 years tutoring experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Strong communication and patience skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Experience with GCSE/A-Level curriculum</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Commitment to neurodivergent-aware teaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Professional references and background check</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4" style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                Apply to Teach With Us
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="tutor-name" className="block text-sm font-medium text-slate-900 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="tutor-name"
                    name="name"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="tutor-email" className="block text-sm font-medium text-slate-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="tutor-email"
                    name="email"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subjects" className="block text-sm font-medium text-slate-900 mb-1">
                    Subjects You Teach
                  </label>
                  <input
                    type="text"
                    id="subjects"
                    name="subjects"
                    placeholder="e.g., GCSE Maths, A-Level Physics"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="intro" className="block text-sm font-medium text-slate-900 mb-1">
                    Brief Introduction
                  </label>
                  <textarea
                    id="intro"
                    name="intro"
                    rows={4}
                    placeholder="Tell us about your teaching experience, qualifications, and approach..."
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Application
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section 
        title="Questions About Our Team?"
        subtitle="Get in touch if you have questions about our tutors or want to apply"
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
              <Link href="/pricing">
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
