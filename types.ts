import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Step {
  stepNumber: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}

export interface ClientLogo {
    name: string;
    logoUrl: string;
}