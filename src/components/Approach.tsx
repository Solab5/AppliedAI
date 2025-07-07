import React, { useEffect, useRef } from 'react';
import { Search, Workflow, Shield, TrendingUp } from 'lucide-react';

const Approach = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.approach-step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-fade-in-up');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      title: 'DISCOVER HIGH-VALUE OPPORTUNITIES',
      description: 'We identify AI use cases that align with your business goals and deliver measurable ROI.',
      color: 'from-brand-orange to-yellow-500'
    },
    {
      icon: Workflow,
      title: 'EMBED WITH EXISTING WORKFLOWS',
      description: 'Our solutions integrate seamlessly into your current processes without disruption.',
      color: 'from-brand-blue to-cyan-500'
    },
    {
      icon: Shield,
      title: 'BUILD TRUST-FIRST ML SYSTEMS',
      description: 'Transparent, explainable models that stakeholders can understand and trust.',
      color: 'from-emerald-500 to-brand-blue'
    },
    {
      icon: TrendingUp,
      title: 'ENSURE LONG-TERM SUCCESS',
      description: 'We focus on adoption, scaling, and continuous improvement for lasting value.',
      color: 'from-brand-orange to-red-500'
    }
  ];

  return (
    <section id="approach" ref={sectionRef} className="py-20 bg-brand-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-4 uppercase tracking-wide">
            OUR APPROACH
          </h2>
          <p className="text-base md:text-lg font-roboto-flex text-gray-300 max-w-3xl mx-auto mb-8">
            We don't just build models. We create{' '}
            <span className="text-brand-orange font-semibold hover:text-brand-blue transition-colors cursor-default">
              business outcomes
            </span>{' '}
            through a proven methodology.
          </p>
          <div className="bg-gradient-to-r from-brand-orange to-brand-blue text-brand-brown px-8 py-4 rounded-lg inline-block shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <p className="text-base font-oswald font-semibold italic uppercase tracking-wide">
              "WE DON'T JUST BUILD MODELS. WE CREATE BUSINESS OUTCOMES."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="approach-step opacity-0 transform translate-y-8 text-center group cursor-pointer"
            >
              <div className="relative mb-8">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-brown/80 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-orange font-oswald font-bold border-2 border-brand-orange">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-oswald font-semibold text-white mb-4 group-hover:text-brand-orange transition-colors uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="font-roboto-flex text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Process Flow */}
        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-orange opacity-30 transform -translate-y-1/2 hidden lg:block"></div>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-brand-orange/20">
              <h3 className="text-2xl font-oswald font-bold text-brand-orange mb-4 text-center uppercase tracking-wide">
                PROVEN METHODOLOGY
              </h3>
              <p className="font-roboto-flex text-base text-gray-300 text-center max-w-2xl">
                Our systematic approach has delivered success across{' '}
                <span className="text-brand-blue font-semibold">500+ projects</span>{' '}
                in diverse industries and organizational contexts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;