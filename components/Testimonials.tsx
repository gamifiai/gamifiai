import React from 'react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../constants';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Loved by Businesses Like Yours
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Don't just take our word for it. Here's what our partners are saying.
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-20">
            <h3 className="text-center text-lg font-semibold text-gray-300">
                Trusted by leading retail and restaurant brands
            </h3>
            <div className="mt-8 flow-root">
                <div className="-mt-4 -ml-8 flex flex-wrap justify-center lg:-ml-4">
                    {CLIENT_LOGOS.map((client) => (
                        <div key={client.name} className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                            <img className="h-12 filter invert opacity-70" src={client.logoUrl} alt={client.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;