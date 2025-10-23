import React from 'react';
import type { NavLink, Feature, Step, Testimonial, ClientLogo } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Customer Engagement Games',
    description: 'Boost interaction with captivating mini-games, loyalty rewards, and challenges that keep customers coming back for more.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: 'AI-Powered Personalization',
    description: 'We use AI to analyze customer behavior to deliver personalized offers, game content, and recommendations, maximizing relevance and impact.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: 'Data & Analytics',
    description: 'We provide deep insights into customer preferences and campaign performance through detailed, actionable reports.',
  },
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    stepNumber: '01',
    title: 'Connect & Configure',
    description: 'We seamlessly integrate our solutions with your existing POS or CRM, and customize campaigns to fit your brand.',
  },
  {
    stepNumber: '02',
    title: 'Launch & Engage',
    description: 'We deploy gamified experiences across mobile and in-store channels to watch your customer engagement soar.',
  },
  {
    stepNumber: '03',
    title: 'Analyze & Optimize',
    description: 'We analyze real-time data to help you understand customer behavior, measure ROI, and refine your strategy for maximum growth.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "GAMIFIA transformed our customer loyalty program. We've seen a 40% increase in repeat visits since we launched their gamified rewards. It's fun, effective, and our customers love it.",
    author: 'Sarah Johnson',
    company: 'The Urban Bistro',
    avatarUrl: 'https://picsum.photos/id/1027/100/100',
  },
  {
    quote: "The insights from GAMIFIA are a game-changer. We finally have clear, actionable data that drives our sales. The AI personalization has made our marketing so much more effective.",
    author: 'David Chen',
    company: 'Fresh Threads Boutique',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
    { name: 'Gourmet Burger', logoUrl: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg' },
    { name: 'The Coffee Stop', logoUrl: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg' },
    { name: 'City Fashion', logoUrl: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg' },
    { name: 'Tech Gadgets', logoUrl: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg' },
    { name: 'Healthy Eats', logoUrl: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg' },
];