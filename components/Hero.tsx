import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-slate-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-slate-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Turn Customers Into</span>{' '}
                <span className="block bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent xl:inline">Loyal Fans</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                GAMIFIA helps retail and restaurants create unforgettable customer experiences. Through our AI-driven gamification services, we boost loyalty and drive sales with personalized, fun interactions.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    Request a Demo
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-blue-500 text-base font-medium rounded-md text-blue-400 hover:bg-blue-500 hover:text-white md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="A vibrant arcade room filled with glowing classic game machines."
        />
      </div>
    </section>
  );
};

export default Hero;