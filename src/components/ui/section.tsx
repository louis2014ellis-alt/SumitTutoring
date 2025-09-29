import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  kicker?: string;
  subtitle?: string;
  children: ReactNode;
  bg?: 'default' | 'navy' | 'cream' | 'yellow-50';
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
    navy: 'bg-slate-900 text-white',
    cream: 'bg-yellow-50',
    'yellow-50': 'bg-yellow-50',
  };

  const textColorClasses = {
    default: 'text-slate-900',
    navy: 'text-white',
    cream: 'text-slate-900',
    'yellow-50': 'text-slate-900',
  };

  const kickerColorClasses = {
    default: 'text-yellow-600',
    navy: 'text-yellow-400',
    cream: 'text-yellow-600',
    'yellow-50': 'text-yellow-600',
  };

  const titleColorClasses = {
    default: 'text-slate-900',
    navy: 'text-white',
    cream: 'text-slate-900',
    'yellow-50': 'text-slate-900',
  };

  const subtitleColorClasses = {
    default: 'text-slate-700',
    navy: 'text-slate-100',
    cream: 'text-slate-700',
    'yellow-50': 'text-slate-700',
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        bgClasses[bg],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || kicker || subtitle) && (
          <div className="text-center mb-12">
            {kicker && (
              <p className={cn("text-sm font-medium uppercase tracking-wider mb-2", kickerColorClasses[bg])}>
                {kicker}
              </p>
            )}
            {title && (
              <h2 className={cn("text-3xl md:text-4xl font-bold mb-4 relative", titleColorClasses[bg])} style={{fontFamily: 'Poppins, Montserrat, sans-serif'}}>
                {title}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
              </h2>
            )}
            {subtitle && (
              <p className={cn("text-lg max-w-3xl mx-auto", subtitleColorClasses[bg])}>
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