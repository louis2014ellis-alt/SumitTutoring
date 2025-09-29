import { cn } from '@/lib/utils';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  highlight?: string;
  className?: string;
}

export function PricingCard({
  name,
  price,
  originalPrice,
  duration,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  highlight,
  className
}: PricingCardProps) {
  const savings = originalPrice ? originalPrice - price : 0;
  const savingsPercentage = originalPrice ? Math.round((savings / originalPrice) * 100) : 0;

  return (
    <Card 
      className={cn(
        'relative card-hover',
        highlighted && 'ring-2 ring-gold-500 shadow-large',
        className
      )}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge variant="default" className="bg-gold-500 text-navy-900 font-medium">
            {highlight}
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-heading text-ink-900">
          {name}
        </CardTitle>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl font-bold text-ink-900">
              £{price}
            </span>
            {originalPrice && (
              <span className="text-lg text-ink-500 line-through">
                £{originalPrice}
              </span>
            )}
          </div>
          {savings > 0 && (
            <p className="text-sm text-gold-600 font-medium mt-1">
              Save £{savings} ({savingsPercentage}% off)
            </p>
          )}
          <p className="text-sm text-ink-600 mt-2">
            {duration}
          </p>
        </div>
        <p className="text-ink-700 text-sm mt-4">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-ink-700">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        <Button 
          asChild 
          className={cn(
            'w-full',
            highlighted 
              ? 'bg-gold-500 hover:bg-gold-600 text-navy-900' 
              : 'bg-navy-900 hover:bg-navy-700 text-white'
          )}
        >
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
