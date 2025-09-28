import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, BookOpen } from "lucide-react";

// Mock blog post data - in a real app, this would come from a CMS
const blogPosts = {
  "top-5-tips-ace-maths-exam": {
    title: "Top 5 Tips to Ace Your Maths Exam",
    content: `
      <p>Mathematics exams can be daunting, but with the right preparation and mindset, you can achieve excellent results. As a First-Class Engineering graduate with years of tutoring experience, I've helped hundreds of students improve their exam performance. Here are my top 5 proven strategies:</p>

      <h2>1. Master the Fundamentals</h2>
      <p>Before tackling complex problems, ensure you have a solid understanding of basic concepts. Many students struggle with advanced topics because they haven't fully grasped the foundations.</p>
      <ul>
        <li>Review basic arithmetic operations</li>
        <li>Practice algebraic manipulation</li>
        <li>Understand key formulas and their applications</li>
        <li>Work through step-by-step solutions</li>
      </ul>

      <h2>2. Practice Past Papers Regularly</h2>
      <p>Past papers are your best friend when preparing for exams. They help you understand the exam format, question types, and time management requirements.</p>
      <p><strong>Pro tip:</strong> Start with older papers and work your way to the most recent ones. This helps you see how the syllabus has evolved and identify recurring themes.</p>

      <h2>3. Develop a Systematic Approach</h2>
      <p>Having a consistent method for approaching problems reduces anxiety and improves accuracy. Here's my recommended approach:</p>
      <ol>
        <li><strong>Read the question carefully</strong> - Identify what's being asked</li>
        <li><strong>Plan your solution</strong> - Break down complex problems into steps</li>
        <li><strong>Show your working</strong> - Even if you make a calculation error, you'll get partial credit</li>
        <li><strong>Check your answer</strong> - Does it make sense in the context?</li>
      </ol>

      <h2>4. Manage Your Time Effectively</h2>
      <p>Time management is crucial in mathematics exams. Practice allocating time based on marks available:</p>
      <ul>
        <li>1 mark = approximately 1 minute</li>
        <li>Leave time for checking at the end</li>
        <li>Don't spend too long on one question</li>
        <li>Move on if you're stuck and return later</li>
      </ul>

      <h2>5. Stay Calm and Confident</h2>
      <p>Exam anxiety can significantly impact performance. Build confidence through thorough preparation and positive self-talk.</p>
      <p><strong>Remember:</strong> You've prepared for this. Trust your knowledge and stay focused on the task at hand.</p>

      <h2>Final Thoughts</h2>
      <p>Success in mathematics exams comes from consistent practice, understanding concepts rather than memorising, and maintaining a positive mindset. Start your preparation early, seek help when needed, and remember that every mistake is a learning opportunity.</p>
    `,
    excerpt: "Discover proven strategies to boost your confidence and performance in mathematics exams, from effective revision techniques to managing exam stress.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Study Tips",
    author: "Louis Ellis"
  },
  "how-to-approach-personal-statement-engineering": {
    title: "How to Write a Standout Engineering Personal Statement",
    content: `
      <p>Your personal statement is your opportunity to showcase your passion for engineering and convince universities that you're the right candidate for their course. As someone who successfully applied to engineering programmes and now helps students with their applications, here's my comprehensive guide.</p>

      <h2>Understanding What Universities Want</h2>
      <p>Engineering admissions tutors look for several key qualities:</p>
      <ul>
        <li><strong>Academic ability</strong> - Strong performance in relevant subjects</li>
        <li><strong>Passion for engineering</strong> - Genuine interest in the field</li>
        <li><strong>Problem-solving skills</strong> - Ability to think analytically</li>
        <li><strong>Practical experience</strong> - Hands-on involvement in engineering projects</li>
        <li><strong>Communication skills</strong> - Ability to express ideas clearly</li>
      </ul>

      <h2>Structure Your Personal Statement</h2>
      <p>Your personal statement should follow a clear structure:</p>

      <h3>Opening Paragraph (Why Engineering?)</h3>
      <p>Start with a compelling hook that demonstrates your passion. Avoid clichés like "I've always been interested in engineering." Instead, share a specific moment or experience that sparked your interest.</p>

      <h3>Academic Achievements</h3>
      <p>Highlight relevant academic successes, but don't just list grades. Explain what you learned and how it relates to engineering.</p>

      <h3>Practical Experience</h3>
      <p>Discuss any engineering-related activities, projects, or work experience. This could include:</p>
      <ul>
        <li>School engineering projects</li>
        <li>Work experience placements</li>
        <li>Engineering competitions</li>
        <li>Personal projects or hobbies</li>
      </ul>

      <h3>Skills and Qualities</h3>
      <p>Demonstrate the skills that make you suitable for engineering study, such as problem-solving, teamwork, and analytical thinking.</p>

      <h3>Future Goals</h3>
      <p>Conclude by discussing your career aspirations and how the specific course will help you achieve them.</p>

      <h2>Top Tips for Success</h2>
      <ul>
        <li><strong>Be specific:</strong> Use concrete examples rather than vague statements</li>
        <li><strong>Show, don't tell:</strong> Demonstrate your qualities through examples</li>
        <li><strong>Be authentic:</strong> Write in your own voice and be genuine</li>
        <li><strong>Proofread carefully:</strong> Check for spelling, grammar, and clarity</li>
        <li><strong>Seek feedback:</strong> Ask teachers, tutors, or mentors to review your draft</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Generic statements that could apply to any subject</li>
        <li>Focusing too much on childhood interests</li>
        <li>Listing achievements without explaining their significance</li>
        <li>Using overly complex language</li>
        <li>Exceeding the word limit</li>
      </ul>

      <h2>Final Checklist</h2>
      <p>Before submitting your personal statement, ensure:</p>
      <ul>
        <li>It's within the word limit (4,000 characters)</li>
        <li>It's relevant to the specific course</li>
        <li>It demonstrates your passion for engineering</li>
        <li>It's free of spelling and grammar errors</li>
        <li>It flows logically from start to finish</li>
      </ul>
    `,
    excerpt: "Learn how to craft a compelling personal statement for engineering degrees that showcases your passion, skills, and academic potential.",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "University Applications",
    author: "Louis Ellis"
  }
};

const relatedPosts = [
  {
    slug: "gcse-to-a-level-transition-guide",
    title: "Making the Transition from GCSE to A-Level Maths",
    category: "Mathematics"
  },
  {
    slug: "effective-study-schedule-stem-subjects",
    title: "Creating an Effective Study Schedule for STEM Subjects",
    category: "Study Tips"
  },
  {
    slug: "understanding-physics-concepts-visual-learning",
    title: "Understanding Physics Through Visual Learning",
    category: "Physics"
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Louis Ellis Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Back Navigation */}
      <section className="bg-white py-8 border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <User className="h-4 w-4" />
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                    About Louis Ellis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Louis is a First-Class BEng (Hons) graduate in Electrical & Electronic Engineering 
                    with extensive tutoring experience. He helps students excel in STEM subjects through 
                    clear explanations, patient guidance, and proven teaching methods.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/about">Learn More About Louis</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3">
                    {relatedPost.title}
                  </h3>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
            Ready to Excel in STEM?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Put these tips into practice with personalised tutoring sessions
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/book">
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
