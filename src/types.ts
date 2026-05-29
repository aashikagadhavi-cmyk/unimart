export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface Product {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  category: string;
  badge: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  pricingPlans: {
    tier: string;
    rate: string;
    description: string;
  }[];
  apiSample: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  statValue: string;
  statLabel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  beforeVal: string;
  afterVal: string;
  metricName: string;
  roiText: string;
  quote: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  imageUrl?: string;
}
