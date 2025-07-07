import React, { useEffect, useRef } from 'react';
import { AlertTriangle, Target, Database, Users, Lightbulb, Shield } from 'lucide-react';

const PainPoints = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pain-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const painPoints = [
    {
      icon: Target,
      title: 'NO AI STRATEGY',
      description: 'Organizations jump into AI without clear business objectives or success metrics.',
      stat: '73%',
      statLabel: 'of AI projects fail'
    },
    {
      icon: AlertTriangle,
      title: 'FAILED PILOTS',
      description: 'Proof of concepts that never make it to production or see real adoption.',
      stat: '85%',
      statLabel: 'never reach production'
    },
    {
      icon: Database,
      title: 'DATA NOT ML-READY',
      description: 'Poor data quality, incomplete datasets, and lack of proper data infrastructure.',
      stat: '60%',
      statLabel: 'of time spent on data prep'
    },
    {
      icon: Users,
      title: 'TALENT CHALLENGES',
      description: 'Difficulty hiring, retaining, and motivating skilled AI/ML professionals.',
      stat: '2.3x',
      statLabel: 'salary premium for AI talent'
    },
    {
      icon: Lightbulb,
      title: 'NO BUSINESS VALUE',
      description: 'Models built in isolation without clear connection to business outcomes.',
      stat: '$6.2T',
      statLabel: 'in unrealized AI value'
    },
    {
      icon: Shield,
      title: 'TRUST & EXPLAINABILITY',
      description: 'Black box models that stakeholders cannot understand or trust.',
      stat: '67%',
      statLabel: 'lack trust in AI decisions'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white dots-pattern-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-brand-brown mb-4 uppercase tracking-wide">
            Why AI/ML Initiatives Fail
          </h2>
          <p className="text-base md:text-lg font-roboto-flex text-brand-brown/80 max-w-2xl mx-auto">
            Most organizations face the same critical challenges. We help you overcome them with proven, outcome-focused strategies.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-orange via-brand-blue to-brand-orange opacity-30 z-0" style={{ minHeight: '100%' }} />

          <div className="w-full flex flex-col gap-16 z-10">
            {painPoints.map((point, idx) => (
              <div key={idx} className="relative w-full flex flex-col sm:flex-row items-center sm:items-stretch group">
                {/* Timeline dot/icon: only show on sm and above */}
                <div className="hidden sm:flex flex-col items-center sm:items-start sm:justify-center sm:w-32 flex-shrink-0">
                  <div className="z-10 mb-4 sm:mb-0 sm:mt-0 mt-2">
                    <div className="w-10 h-10 rounded-full bg-white border-4 border-brand-orange flex items-center justify-center shadow-md mx-auto">
                      <point.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="w-full max-w-xl mx-auto bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-8 sm:px-8 flex flex-col gap-2 transition-all duration-300 hover:border-brand-orange/60 hover:shadow-lg text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-4 mb-2">
                    <span className="text-2xl font-oswald font-bold text-brand-orange">{point.stat}</span>
                    <span className="text-xs font-roboto-condensed font-light text-slate-500 uppercase tracking-wide">{point.statLabel}</span>
                  </div>
                  <h3 className="text-lg font-oswald font-semibold text-brand-brown mb-1 uppercase tracking-wide">{point.title}</h3>
                  <p className="font-roboto-flex text-base text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-brand-orange via-brand-blue to-brand-orange rounded-2xl p-10 shadow-xl border-0">
            <h3 className="text-2xl md:text-3xl font-oswald font-bold text-white mb-4 uppercase tracking-wide drop-shadow">
              Sound Familiar?
            </h3>
            <p className="font-roboto-flex text-lg text-white/90 mb-8 max-w-xl mx-auto">
              We've helped hundreds of organizations overcome these exact challenges. Let's make your AI/ML initiative a success.
            </p>
            <button className="bg-white/90 hover:bg-white text-brand-brown font-oswald font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wide text-base md:text-lg shadow-md">
              Let's Fix This Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;