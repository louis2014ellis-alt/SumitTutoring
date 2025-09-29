import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  avatar?: ReactNode;
  className?: string;
}

export function Testimonial({ 
  quote, 
  name, 
  role, 
  rating = 5, 
  avatar, 
  className 
}: TestimonialProps) {
  return (
    <Card className={cn('card-hover', className)}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                'h-4 w-4',
                i < rating ? 'text-gold-500 fill-current' : 'text-ink-300'
              )} 
            />
          ))}
        </div>
        
        <blockquote className="text-ink-700 italic mb-4 leading-relaxed">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center gap-3">
          {avatar && (
            <div className="flex-shrink-0">
              {avatar}
            </div>
          )}
          <div>
            <div className="font-medium text-ink-900">
              {name}
            </div>
            <div className="text-sm text-ink-600">
              {role}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
