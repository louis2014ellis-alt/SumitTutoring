import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Feature({ icon, title, description, className }: FeatureProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="bg-gold-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <div className="text-gold-600">
          {icon}
        </div>
      </div>
      <h3 className="font-heading text-lg font-semibold text-ink-900 mb-2">
        {title}
      </h3>
      <p className="text-ink-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
