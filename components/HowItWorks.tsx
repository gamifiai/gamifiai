import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import StepCard from './StepCard';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get Started in 3 Simple Steps
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Launching your gamification strategy has never been easier.
          </p>
        </div>
        <div className="mt-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 hidden lg:block" aria-hidden="true"></div>
            <div className="grid gap-12 md:grid-cols-3 relative">
                {HOW_IT_WORKS_STEPS.map((step, index) => (
                <StepCard key={index} step={step} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;