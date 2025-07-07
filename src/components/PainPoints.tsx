import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Target, Database, Users, Lightbulb, Shield } from 'lucide-react';

const PainPoints = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section ref={sectionRef} className="py-20 bg-white dots-pattern-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-brown mb-4 uppercase tracking-wide">
            WHY AI/ML{' '}
            <span className="text-red-600 relative">
              FAILS
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" fill="none">
                <path d="M2 10C20 2 40 2 60 6C80 10 90 4 98 6" stroke="#dc2626" strokeWidth="2" fill="none" className="animate-pulse"/>
              </svg>
            </span>{' '}
            TODAY
          </h2>
          <p className="text-xl font-roboto-flex text-brand-brown/80 max-w-3xl mx-auto">
            Most organizations struggle with the same{' '}
            <span className="text-red-600 font-semibold hover:text-red-700 transition-colors cursor-default">
              predictable challenges
            </span>{' '}
            when implementing AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="pain-card opacity-0 transform translate-y-8 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border-l-4 border-red-500"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`flex items-center justify-center w-16 h-16 bg-red-100 rounded-full group-hover:bg-red-200 transition-all duration-300 ${
                  hoveredCard === index ? 'scale-110 rotate-6' : ''
                }`}>
                  <point.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-oswald font-bold text-red-600 group-hover:scale-110 transition-transform uppercase">
                    {point.stat}
                  </div>
                  <div className="text-xs font-roboto-condensed font-light text-slate-500 uppercase">{point.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-oswald font-semibold text-brand-brown mb-4 group-hover:text-red-600 transition-colors uppercase tracking-wide">
                {point.title}
              </h3>
              <p className="font-roboto-flex text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                {point.description}
              </p>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-orange/20">
            <h3 className="text-2xl font-oswald font-bold text-brand-brown mb-4 uppercase tracking-wide">
              SOUND FAMILIAR?
            </h3>
            <p className="font-roboto-flex text-brand-brown/80 mb-6">
              We've helped hundreds of organizations overcome these exact challenges.
            </p>
            <button className="bg-brand-orange hover:bg-brand-orange/90 text-brand-brown font-oswald font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wide">
              LET'S FIX THIS TOGETHER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;