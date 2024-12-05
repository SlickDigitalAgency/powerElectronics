import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Product {
  name: string;
  description: string;
  image: string;
}

export interface Benefit {
  Icon: LucideIcon;
  title: string;
  text: string;
}