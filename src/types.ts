export type TabType = 'inicio' | 'como-funciona' | 'beneficios' | 'precios' | 'contacto';

export interface PlanInfo {
  id: string;
  name: string;
  badge?: string;
  tag: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  category: 'SALUD' | 'BELLEZA' | 'CONSULTORÍA' | 'DEPORTES';
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
  rating: number;
}
