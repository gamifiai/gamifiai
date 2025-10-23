import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-200 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;