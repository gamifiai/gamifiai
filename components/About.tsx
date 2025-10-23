import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <img 
              className="rounded-lg shadow-xl w-full" 
              src="https://images.pexels.com/photos/5431326/pexels-photo-5431326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Close-up of a classic arcade game joystick and buttons." 
            />
          </div>
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Supercharge Your Customer Experience
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              In today's competitive market, a generic approach isn't enough. GAMIFIA helps you build genuine relationships with your customers by making every interaction memorable and rewarding.
            </p>
            <p className="mt-4 text-lg text-gray-400">
             We provide a powerful service that combines the thrill of gaming with the intelligence of AI. From crafting personalized loyalty programs for your cafe to designing interactive product discovery games for your retail store, we provide the solutions and expertise to help you stand out and build a community of brand advocates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;