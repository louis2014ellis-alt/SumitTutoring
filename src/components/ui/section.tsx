import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  kicker?: string;
  subtitle?: string;
  children: ReactNode;
  bg?: 'default' | 'navy' | 'cream';
  id?: string;
  className?: string;
}

export function Section({ 
  title, 
  kicker, 
  subtitle, 
  children, 
  bg = 'default', 
  id,
  className 
}: SectionProps) {
  const bgClasses = {
    default: 'bg-white',
    navy: 'bg-navy-900 text-white',
    cream: 'bg-cream-50',
  };

  return (
    <section 
      id={id}
      className={cn(
        'section-padding',
        bgClasses[bg],
        className
      )}
    >
      <div className="section-container">
        {(title || kicker || subtitle) && (
          <div className="text-center mb-12">
            {kicker && (
              <p className="text-sm font-medium text-gold-600 uppercase tracking-wider mb-2">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink-900 mb-4 gold-divider">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-ink-700 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
