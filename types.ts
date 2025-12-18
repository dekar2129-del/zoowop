import React from 'react';

export interface Service {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

export interface ServiceCardItem {
  iconName: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  highlight?: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BusinessType {
  iconName: string;
  title: string;
  description: string;
}

export interface FAQ {
  iconName: string;
  question: string;
  answer: string;
}

export interface MetroArea {
  name: string;
  image: string;
}

export interface BlogPost {
  title: string;
  image: string;
  author: string;
  year: string;
}

export interface Benefit {
  iconName: string;
  title: string;
  description: string;
}
