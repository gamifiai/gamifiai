import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-slate-900 rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Let's talk about your project.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                Fill out the form to schedule a personalized demo and discover how GAMIFIA can be tailored to your business needs.
              </p>
               <div className="mt-8 text-lg text-gray-300 space-y-4">
                    <p className="flex items-center">
                        <svg className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>demo@gamifia.com</span>
                    </p>
                    <p className="flex items-center">
                        <svg className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <span>+1 (555) 123-4567</span>
                    </p>
                </div>
            </div>
          </div>
          <div className="p-6 sm:p-10 lg:p-12 bg-slate-800">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="mt-2 text-lg text-gray-300">Your request has been sent. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company</label>
                  <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500 transition-all duration-300">
                    Send Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;