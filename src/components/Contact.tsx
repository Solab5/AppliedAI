import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white dots-pattern-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-brand-brown mb-4 uppercase tracking-wide">
            LET'S START YOUR AI JOURNEY
          </h2>
          <p className="text-base md:text-lg font-roboto-flex text-brand-brown/80 max-w-3xl mx-auto">
            Ready to transform your business with AI? In our discovery call, we'll ask the right questions to uncover your real goals, success criteria, and the value we can deliver together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-orange/20">
            <h3 className="text-xl font-oswald font-semibold text-brand-brown mb-6 uppercase tracking-wide">
              LET'S START WITH A 30-MINUTE DISCOVERY CALL
            </h3>
            
            <form action="https://formspree.io/f/xqabvkrn" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-oswald font-medium text-brand-brown mb-2 uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-blue/30 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors font-roboto-flex text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-oswald font-medium text-brand-brown mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-blue/30 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors font-roboto-flex text-base"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-oswald font-medium text-brand-brown mb-2 uppercase tracking-wide">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-blue/30 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors font-roboto-flex text-base"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-oswald font-medium text-brand-brown mb-2 uppercase tracking-wide">
                  Tell us about your AI/ML challenges *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-brand-blue/30 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors font-roboto-flex text-base"
                  placeholder="Describe your current challenges, goals, or specific use cases you'd like to explore..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-oswald font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm md:text-base"
              >
                <Send size={20} />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-blue/20">
              <h3 className="text-xl font-oswald font-semibold text-brand-brown mb-6 uppercase tracking-wide">
                GET IN TOUCH
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-oswald font-medium text-brand-brown uppercase tracking-wide text-sm">EMAIL</p>
                    <p className="font-roboto-flex text-brand-brown/70 text-base">risolab2025@gmail.com
</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-oswald font-medium text-brand-brown uppercase tracking-wide text-sm">PHONE</p>
                    <p className="font-roboto-flex text-brand-brown/70 text-base">+256 7777 54234</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-oswald font-medium text-brand-brown uppercase tracking-wide text-sm">LOCATION</p>
                    <p className="font-roboto-flex text-brand-brown/70 text-base">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-orange to-brand-blue rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-oswald font-semibold mb-4 uppercase tracking-wide">
                WHY CHOOSE APPLIEDAI?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-roboto-flex">Proven track record with Fortune 500 companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-roboto-flex">End-to-end AI solutions from strategy to implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-roboto-flex">Focus on business outcomes, not just technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-roboto-flex">Transparent, explainable AI systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;