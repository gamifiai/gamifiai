import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
      <div className="p-8">
        <svg className="h-12 w-12 text-slate-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
        </svg>
        <blockquote className="mt-6 text-gray-300">
          <p className="text-lg font-medium">"{testimonial.quote}"</p>
        </blockquote>
      </div>
      <div className="px-8 py-4 bg-slate-900/50">
        <div className="flex items-center">
            <img className="h-12 w-12 rounded-full object-cover" src={testimonial.avatarUrl} alt={testimonial.author} />
            <div className="ml-4">
                <p className="text-base font-bold text-white">{testimonial.author}</p>
                <p className="text-sm font-medium text-gray-400">{testimonial.company}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;