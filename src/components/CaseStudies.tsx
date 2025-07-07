import React, { useState, useEffect, useRef } from 'react';
import { X, Filter, TrendingUp, Shield, Zap, Building } from 'lucide-react';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.case-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 200);
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

  const filters = ['All', 'GovTech', 'AgTech', 'Health', 'Finance'];

  const caseStudies = [
    {
      id: 1,
      title: 'AGRICULTURAL YIELD OPTIMIZATION',
      domain: 'AgTech',
      icon: TrendingUp,
      summary: 'Increased crop yields by 40% through predictive analytics and precision farming.',
      challenge: 'A large agricultural company needed to optimize crop yields while reducing resource consumption and environmental impact.',
      solution: 'We developed a comprehensive ML system that analyzes soil conditions, weather patterns, and crop health data to provide actionable insights for farmers.',
      outcomes: [
        '40% increase in crop yields',
        '25% reduction in water usage',
        '30% decrease in fertilizer costs',
        'Improved sustainability metrics'
      ],
      technologies: ['Python', 'TensorFlow', 'IoT Sensors', 'Cloud Computing'],
      timeline: '6 months',
      value: '$2.5M',
      metric: '+40%'
    },
    {
      id: 2,
      title: 'HEALTHCARE FRAUD DETECTION',
      domain: 'Health',
      icon: Shield,
      summary: 'Reduced healthcare fraud by 60% with real-time anomaly detection.',
      challenge: 'A healthcare provider was losing millions annually to fraudulent claims and needed an automated detection system.',
      solution: 'We built a real-time fraud detection system using machine learning to identify suspicious patterns in claims data.',
      outcomes: [
        '60% reduction in fraudulent claims',
        '$2.5M annual savings',
        '80% faster claim processing',
        'Improved patient care quality'
      ],
      technologies: ['Python', 'Apache Kafka', 'Elasticsearch', 'AWS'],
      timeline: '4 months',
      value: '$2.5M',
      metric: '-60%'
    },
    {
      id: 3,
      title: 'GOVERNMENT SERVICE AUTOMATION',
      domain: 'GovTech',
      icon: Building,
      summary: 'Automated 80% of citizen service requests with AI-powered chatbots.',
      challenge: 'A government agency needed to improve citizen service efficiency while reducing operational costs.',
      solution: 'We developed an AI-powered citizen service platform that automates common requests and provides intelligent routing for complex issues.',
      outcomes: [
        '80% automation of service requests',
        '70% reduction in response time',
        '50% cost savings',
        '95% citizen satisfaction rate'
      ],
      technologies: ['Natural Language Processing', 'Azure Bot Service', 'Power Platform'],
      timeline: '8 months',
      value: '$1.8M',
      metric: '80%'
    }
  ];

  const filteredCases = selectedFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.domain === selectedFilter);

  return (
    <section id="case-studies" ref={sectionRef} className="py-20 bg-white dots-pattern-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-brand-brown mb-4 uppercase tracking-wide">
            CASE STUDIES
          </h2>
          <p className="text-base md:text-lg font-roboto-flex text-brand-brown/80 max-w-3xl mx-auto mb-8">
            Real-world success stories demonstrating the impact of our AI/ML solutions. We regularly share actionable insights and best practices to help organizations succeed with AI.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-full font-oswald font-medium transition-all duration-300 uppercase tracking-wide ${
                  selectedFilter === filter
                    ? 'bg-brand-orange text-white shadow-lg transform scale-105'
                    : 'bg-white text-brand-brown hover:bg-brand-blue/10 border border-brand-blue/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((study, index) => (
            <div
              key={study.id}
              className="case-card opacity-0 transform translate-y-8 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-l-4 border-brand-orange"
              onClick={() => setSelectedCase(study.id)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-oswald font-bold text-brand-orange uppercase">
                    {study.metric}
                  </div>
                  <span className="text-xs font-roboto-condensed font-light text-brand-brown/60 bg-brand-blue/10 px-3 py-1 rounded-full uppercase">
                    {study.domain}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-oswald font-semibold text-brand-brown mb-4 group-hover:text-brand-orange transition-colors uppercase tracking-wide">
                {study.title}
              </h3>
              <p className="font-roboto-flex text-base text-brand-brown/70 leading-relaxed mb-6 group-hover:text-brand-brown transition-colors">
                {study.summary}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm font-roboto-condensed font-light text-brand-brown/60 uppercase">
                  Value: <span className="text-brand-orange font-semibold">{study.value}</span>
                </div>
                <button className="text-brand-orange font-oswald font-medium hover:text-brand-blue transition-colors uppercase tracking-wide">
                  READ FULL CASE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {(() => {
                const study = caseStudies.find(s => s.id === selectedCase);
                if (!study) return null;
                
                return (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-blue rounded-lg flex items-center justify-center">
                          <study.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-oswald font-bold text-brand-brown uppercase tracking-wide">{study.title}</h3>
                          <span className="font-roboto-condensed text-brand-brown/60 uppercase">{study.domain}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedCase(null)}
                        className="text-brand-brown/60 hover:text-brand-brown transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-oswald font-semibold text-brand-brown mb-3 uppercase tracking-wide">CHALLENGE</h4>
                        <p className="font-roboto-flex text-brand-brown/80 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-oswald font-semibold text-brand-brown mb-3 uppercase tracking-wide">SOLUTION</h4>
                        <p className="font-roboto-flex text-brand-brown/80 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-oswald font-semibold text-brand-brown mb-3 uppercase tracking-wide">KEY OUTCOMES</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {study.outcomes.map((outcome, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                              <span className="font-roboto-flex text-brand-brown">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-oswald font-semibold text-brand-brown mb-3 uppercase tracking-wide">TECHNOLOGIES USED</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, index) => (
                              <span key={index} className="bg-brand-blue/10 text-brand-brown font-roboto-condensed px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-oswald font-semibold text-brand-brown mb-3 uppercase tracking-wide">TIMELINE</h4>
                          <p className="font-roboto-flex text-brand-brown/80">{study.timeline}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;