import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function Stat({ value, label, icon, className }: StatProps) {
  return (
    <div className={cn('text-center', className)}>
      {icon && (
        <div className="bg-gold-500/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
          <div className="text-gold-600">
            {icon}
          </div>
        </div>
      )}
      <div className="text-3xl font-bold text-navy-900 mb-1">
        {value}
      </div>
      <div className="text-sm text-ink-700 font-medium">
        {label}
      </div>
    </div>
  );
}
