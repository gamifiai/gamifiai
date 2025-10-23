import React from 'react';
import type { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-300">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-700 mb-6">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-base text-gray-300">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;