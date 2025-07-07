import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'Fortune 500 Technology Company',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'AppliedAI transformed our data science capabilities. Their approach to embedding ML into our existing workflows was seamless, and the results exceeded our expectations.',
      rating: 5,
      metric: '+40%',
      metricLabel: 'EFFICIENCY GAIN'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director of Innovation',
      company: 'Healthcare Systems Inc.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The fraud detection system they built saved us millions. More importantly, they ensured our team could maintain and improve it long after the project ended.',
      rating: 5,
      metric: '$2.5M',
      metricLabel: 'ANNUAL SAVINGS'
    },
    {
      name: 'Jessica Kim',
      role: 'Head of Digital Transformation',
      company: 'City Government',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'Their stakeholder alignment process was crucial to our success. They helped us navigate the complexity of implementing AI in a government setting.',
      rating: 5,
      metric: '95%',
      metricLabel: 'CITIZEN SATISFACTION'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-brand-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-4 uppercase tracking-wide">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-base md:text-lg font-roboto-flex text-white/80 max-w-3xl mx-auto">
            Trusted by{' '}
            <span className="text-brand-orange font-semibold hover:text-brand-blue transition-colors cursor-default">
              industry leaders
            </span>{' '}
            to deliver transformative AI solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-brand-orange/20">
            <div className="flex items-center justify-center mb-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`w-6 h-6 ${
                    index < testimonials[currentTestimonial].rating
                      ? 'text-brand-orange fill-current'
                      : 'text-brand-brown/30'
                  }`}
                />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-roboto-flex text-brand-brown text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="flex items-center justify-center gap-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-brand-orange"
              />
              <div className="text-center">
                <div className="font-oswald font-semibold text-brand-brown text-xl uppercase tracking-wide">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="font-roboto-flex text-base text-brand-brown/70">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="font-roboto-condensed font-light text-brand-brown/60 text-xs uppercase">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-oswald font-bold text-brand-orange uppercase">
                  {testimonials[currentTestimonial].metric}
                </div>
                <div className="font-roboto-condensed font-light text-brand-brown/60 text-xs uppercase">
                  {testimonials[currentTestimonial].metricLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-brand-orange/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-brand-orange/30 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-brand-orange/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-brand-orange/30 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-brand-orange' : 'bg-brand-brown/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-oswald font-bold text-brand-orange mb-2 uppercase">
              500+
            </div>
            <div className="font-roboto-condensed font-light text-white/80 uppercase tracking-wide">SATISFIED CLIENTS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-oswald font-bold text-brand-blue mb-2 uppercase">
              4.9/5
            </div>
            <div className="font-roboto-condensed font-light text-white/80 uppercase tracking-wide">AVERAGE RATING</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-oswald font-bold text-brand-orange mb-2 uppercase">
              98%
            </div>
            <div className="font-roboto-condensed font-light text-white/80 uppercase tracking-wide">WOULD RECOMMEND</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;