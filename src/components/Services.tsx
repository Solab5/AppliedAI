import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Map, Zap, Settings, GraduationCap, Users2, ArrowRight } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
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
    <section id="services" ref={sectionRef} className="py-20 bg-white dots-pattern-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-brown mb-4 uppercase tracking-wide">
            OUR SERVICES
          </h2>
          <p className="text-xl font-roboto-flex text-brand-brown/80 max-w-3xl mx-auto">
            Comprehensive AI/ML solutions designed to deliver{' '}
            <span className="text-brand-orange font-semibold hover:text-brand-blue transition-colors cursor-default">
              real business value
            </span>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 transform translate-y-8 bg-brand-blue/5 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-brand-blue/10 hover:border-brand-orange/30"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center transform transition-all duration-300 ${
                    hoveredService === index ? 'scale-110 rotate-3' : ''
                  }`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-oswald font-semibold text-brand-brown group-hover:text-brand-orange transition-colors uppercase tracking-wide">
                    {service.title}
                  </h3>
                </div>
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="text-brand-brown/60 hover:text-brand-orange transition-all duration-300 transform hover:scale-110"
                >
                  {expandedService === index ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>
              
              <p className="font-roboto-flex text-brand-brown/70 mb-4 leading-relaxed group-hover:text-brand-brown transition-colors">
                {service.summary}
              </p>
              
              {expandedService === index && (
                <div className="mt-6 pt-6 border-t border-brand-blue/20 animate-fade-in">
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                        <span className="font-roboto-flex text-brand-brown/80 group-hover/item:text-brand-brown transition-colors">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-brand-blue/10">
                    <button className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-blue font-oswald font-medium transition-colors group/cta uppercase tracking-wide">
                      LEARN MORE
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-orange to-brand-blue rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-3xl font-oswald font-bold mb-4 uppercase tracking-wide">
              READY TO TRANSFORM YOUR BUSINESS?
            </h3>
            <p className="font-roboto-flex text-lg mb-6 opacity-90">
              Let's discuss how our services can drive real value for your organization.
            </p>
            <button className="bg-white text-brand-brown font-oswald font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
              START YOUR AI JOURNEY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;