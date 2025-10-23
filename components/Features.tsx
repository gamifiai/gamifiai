import React from 'react';
import { FEATURES } from '../constants';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Our Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Everything You Need to Grow
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Our services are designed to attract, engage, and retain customers through powerful, proven strategies.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;