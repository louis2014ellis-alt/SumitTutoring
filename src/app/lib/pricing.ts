import pricingData from '../data/pricing.json';

export interface PricingPlan {
  key: string;
  name: string;
  price: number;
  originalPrice?: number;
  durationMinutes: number;
  description: string;
  bullets: string[];
  cta: string;
  highlight?: string;
  popular: boolean;
}

export interface PricingData {
  lastSynced: string;
  gigUrl: string;
  currency: string;
  plans: PricingPlan[];
}

export function getPricingData(): PricingData {
  return pricingData as PricingData;
}

export function formatCurrency(amount: number, currency: string = 'GBP'): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} minutes`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}

export function getPlanByKey(key: string): PricingPlan | undefined {
  return pricingData.plans.find(plan => plan.key === key);
}

export function getPopularPlan(): PricingPlan | undefined {
  return pricingData.plans.find(plan => plan.popular);
}

export function getSavings(plan: PricingPlan): number | null {
  if (!plan.originalPrice) return null;
  return plan.originalPrice - plan.price;
}

export function getSavingsPercentage(plan: PricingPlan): number | null {
  if (!plan.originalPrice) return null;
  return Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100);
}
