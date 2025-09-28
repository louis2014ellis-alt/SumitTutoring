import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    slug: "top-5-tips-ace-maths-exam",
    title: "Top 5 Tips to Ace Your Maths Exam",
    excerpt: "Discover proven strategies to boost your confidence and performance in mathematics exams, from effective revision techniques to managing exam stress.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Study Tips",
    featured: true
  },
  {
    slug: "how-to-approach-personal-statement-engineering",
    title: "How to Write a Standout Engineering Personal Statement",
    excerpt: "Learn how to craft a compelling personal statement for engineering degrees that showcases your passion, skills, and academic potential.",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "University Applications",
    featured: false
  },
  {
    slug: "understanding-physics-concepts-visual-learning",
    title: "Understanding Physics Through Visual Learning",
    excerpt: "Explore how visual aids, diagrams, and interactive tools can help you grasp complex physics concepts more effectively.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Physics",
    featured: false
  },
  {
    slug: "gcse-to-a-level-transition-guide",
    title: "Making the Transition from GCSE to A-Level Maths",
    excerpt: "Navigate the jump from GCSE to A-Level mathematics with confidence. Learn what to expect and how to prepare for the increased difficulty.",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Mathematics",
    featured: false
  },
  {
    slug: "engineering-career-paths-explained",
    title: "Engineering Career Paths: What You Need to Know",
    excerpt: "Discover the diverse career opportunities available in engineering and how to choose the right path for your interests and skills.",
    date: "2024-12-20",
    readTime: "10 min read",
    category: "Career Guidance",
    featured: false
  },
  {
    slug: "effective-study-schedule-stem-subjects",
    title: "Creating an Effective Study Schedule for STEM Subjects",
    excerpt: "Learn how to create a balanced study schedule that maximises your learning potential while maintaining a healthy work-life balance.",
    date: "2024-12-15",
    readTime: "6 min read",
    category: "Study Tips",
    featured: false
  }
];

const categories = [
  "All Posts",
  "Study Tips",
  "Mathematics",
  "Physics",
  "Engineering",
  "University Applications",
  "Career Guidance"
];

export const metadata = {
  title: "Blog - STEM Study Tips & Educational Resources | Louis Ellis",
  description: "Expert study tips, exam strategies, and educational resources for STEM subjects. Learn how to excel in Mathematics, Physics, and Engineering.",
};

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              STEM Study Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Expert tips, study strategies, and educational resources to help you excel 
              in Mathematics, Physics, and Engineering. Learn from a First-Class graduate 
              with years of tutoring experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">
              Featured Article
            </h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                      <BookOpen className="h-24 w-24 text-primary/50" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
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
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href={`/blog/${post.slug}`}>
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">
              All Articles
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Posts" ? "default" : "outline"}
                  size="sm"
                  className={category === "All Posts" ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Get the latest study tips and educational resources delivered to your inbox
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/70">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
