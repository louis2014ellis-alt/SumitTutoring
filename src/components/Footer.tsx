import Link from "next/link";
import { Mail, Linkedin, BookOpen } from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:louis@example.com",
      icon: Mail,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-primary mr-2" />
              <span className="font-heading text-xl font-bold text-primary">
                Louis Ellis
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              First-Class BEng graduate offering expert STEM tutoring in Maths, 
              Physics, and Engineering. Building confidence through clear explanations 
              and patient guidance.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Ready to excel in STEM?
              </p>
              <p className="text-sm text-gray-600">
                Book a session or send me a message.
              </p>
              <div className="pt-2">
                <Link
                  href="/book"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2025 Louis Ellis. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
