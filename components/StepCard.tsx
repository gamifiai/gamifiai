import React from 'react';
import type { Step } from '../types';

interface StepCardProps {
  step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <div className="text-center bg-slate-900 p-8 rounded-lg border border-slate-700">
        <div className="flex items-center justify-center mx-auto mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white font-bold text-2xl shadow-lg">
            {step.stepNumber}
        </div>
      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
      <p className="text-base text-gray-300">{step.description}</p>
    </div>
  );
};

export default StepCard;