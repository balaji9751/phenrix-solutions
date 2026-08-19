export type ServiceCategoryKey = 'it' | 'tally' | 'gst' | 'creative';

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables?: string[];
  categoryKey: ServiceCategoryKey;
  route: string;
}

export interface ServiceCategory {
  key: ServiceCategoryKey;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  route: string;
  iconName: string;
  color: string;
  services: ServiceDetail[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'it' | 'tally' | 'creative' | 'video';
  categoryLabel: string;
  clientIndustry: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budgetRange?: string;
  message: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  summary: string;
  description: string;
  iconName: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

