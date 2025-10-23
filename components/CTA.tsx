import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to Boost Your Business?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-300">
          See how GAMIFIA can help you build lasting customer relationships and drive measurable growth.
        </p>
        <a
          href="#contact"
          className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 sm:w-auto transition-all duration-300"
        >
          Schedule a Free Demo
        </a>
      </div>
    </section>
  );
};

export default CTA;