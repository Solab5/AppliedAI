import React, { useEffect, useRef } from 'react';
import { Map, Zap, Settings, GraduationCap, Users2 } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 150);
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

  const services = [
    {
      icon: Map,
      title: 'AI ROADMAPPING',
      summary: 'Strategic planning to identify high-impact AI opportunities aligned with business goals.',
      details: [
        'Comprehensive AI readiness assessment',
        'Business case development and ROI analysis',
        'Technology stack recommendations',
        'Implementation timeline and milestones',
        'Risk assessment and mitigation strategies'
      ],
      color: 'from-brand-orange to-yellow-500'
    },
    {
      icon: Zap,
      title: 'PREDICTIVE SYSTEMS & AUTOMATION',
      summary: 'Custom ML models and automation solutions that drive operational efficiency.',
      details: [
        'Predictive analytics and forecasting models',
        'Process automation and optimization',
        'Real-time decision support systems',
        'Anomaly detection and monitoring',
        'Custom AI applications for specific use cases'
      ],
      color: 'from-brand-blue to-cyan-500'
    },
    {
      icon: Settings,
      title: 'MLOPS & DEPLOYMENT',
      summary: 'End-to-end ML lifecycle management from development to production.',
      details: [
        'Model deployment and scaling infrastructure',
        'Continuous integration and deployment pipelines',
        'Model monitoring and performance tracking',
        'Data pipeline design and optimization',
        'Cloud architecture and platform selection'
      ],
      color: 'from-emerald-500 to-brand-blue'
    },
    {
      icon: GraduationCap,
      title: 'TALENT AUGMENTATION & TRAINING',
      summary: 'Empowering your team with AI/ML skills and best practices.',
      details: [
        'Hands-on training workshops and bootcamps',
        'Custom curriculum development',
        'Mentorship and knowledge transfer programs',
        'Technical team augmentation',
        'AI governance and best practices training'
      ],
      color: 'from-brand-orange to-red-500'
    },
    {
      icon: Users2,
      title: 'STAKEHOLDER ALIGNMENT & CHANGE MANAGEMENT',
      summary: 'Ensuring successful adoption across all organizational levels.',
      details: [
        'Executive briefings and strategy sessions',
        'Change management and adoption planning',
        'Cross-functional team coordination',
        'Communication strategy and training',
        'Success metrics and KPI development'
      ],
      color: 'from-purple-500 to-brand-blue'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 bg-white dots-pattern-subtle relative">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-oswald font-bold text-brand-brown mb-3 uppercase tracking-wide">
            Our Services
          </h2>
          <p className="text-sm md:text-base font-roboto-flex text-brand-brown/80 max-w-2xl mx-auto">
            We partner with you to solve real business pain, not just deliver code. Our outcome-driven approach means you get measurable results, with engagement options from targeted solutions to full accountability.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-orange via-brand-blue to-brand-orange opacity-30 z-0" style={{ minHeight: '100%' }} />

          <div className="w-full flex flex-col gap-12 z-10">
            {services.map((service, idx) => (
              <div key={idx} className="relative w-full flex flex-col sm:flex-row items-center sm:items-stretch group">
                {/* Timeline dot/icon: only show on sm and above */}
                <div className="hidden sm:flex flex-col items-center sm:items-start sm:justify-center sm:w-24 flex-shrink-0">
                  <div className="z-10 mb-3 sm:mb-0 sm:mt-0 mt-2">
                    <div className={`w-8 h-8 rounded-full bg-white border-3 border-brand-orange flex items-center justify-center shadow-md mx-auto`}>
                      <service.icon className="w-4 h-4 text-brand-orange" />
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="w-full max-w-xl mx-auto bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-6 sm:px-6 flex flex-col gap-2 transition-all duration-300 hover:border-brand-orange/60 hover:shadow-lg text-center sm:text-left">
                  <h3 className="text-lg font-oswald font-semibold text-brand-brown mb-2 uppercase tracking-wide flex items-center gap-2 justify-center sm:justify-start">
                    {service.title}
                  </h3>
                  <p className="font-roboto-flex text-sm text-slate-600 leading-relaxed mb-2">{service.summary}</p>
                  {service.details && (
                    <ul className="list-disc list-inside text-xs text-brand-brown/80 mt-2 space-y-1 text-left mx-auto sm:mx-0">
                      {service.details.map((detail, detailIdx) => (
                        <li key={detailIdx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;