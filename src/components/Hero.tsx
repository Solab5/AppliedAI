import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  const typewriterText = useTypewriter({
    words: ['THE REAL WORLD', 'YOUR BUSINESS', 'PRODUCTION', 'EVERY INDUSTRY'],
    typeSpeed: 150,
    deleteSpeed: 100,
    delayBetweenWords: 2000,
    loop: true
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-brown pt-16 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-brown via-brand-brown/90 to-brand-brown/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FBB24B%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/50 to-transparent"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-oswald font-bold text-white mb-4 md:mb-6 leading-tight opacity-0 transform translate-y-8 animate-[fadeInUp_1s_ease-out_0.2s_forwards] uppercase tracking-wide">
          APPLIED AI/ML THAT WORKS IN{' '}
          <span className="text-brand-orange relative block mt-1 md:mt-2">
            <span className="typewriter-container">
              {typewriterText}
              <span className="typewriter-cursor text-brand-blue">|</span>
            </span>
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl font-roboto-flex text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto opacity-0 transform translate-y-8 animate-[fadeInUp_1s_ease-out_0.4s_forwards] px-2">
          We deliver{' '}
          <span className="text-brand-blue font-semibold hover:text-brand-orange transition-colors cursor-default">
            results-driven AI solutions
          </span>{' '}
          that integrate into your workflow—not just models.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center opacity-0 transform translate-y-8 animate-[fadeInUp_1s_ease-out_0.6s_forwards] px-4">
          <button className="group bg-brand-orange hover:bg-brand-orange/90 text-brand-brown font-oswald font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/25 flex items-center gap-2 relative overflow-hidden uppercase tracking-wide text-sm md:text-base w-full sm:w-auto">
            <span className="relative z-10">LET'S TALK</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="group border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-brown font-oswald font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 relative overflow-hidden uppercase tracking-wide text-sm md:text-base w-full sm:w-auto">
            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="group-hover:animate-pulse">SEE HOW WE WORK</span>
          </button>
        </div>

        {/* Interactive Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 opacity-0 transform translate-y-8 animate-[fadeInUp_1s_ease-out_0.8s_forwards] px-4">
          <div className="group cursor-pointer">
            <div className="text-2xl md:text-3xl lg:text-4xl font-oswald font-bold text-brand-orange mb-2 group-hover:scale-110 transition-transform uppercase">
              <span className="counter" data-target="500">500</span>+
            </div>
            <div className="text-gray-300 font-roboto-condensed font-light group-hover:text-white transition-colors uppercase tracking-wide text-xs md:text-sm">PROJECTS DELIVERED</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl md:text-3xl lg:text-4xl font-oswald font-bold text-brand-blue mb-2 group-hover:scale-110 transition-transform uppercase">
              <span className="counter" data-target="95">95</span>%
            </div>
            <div className="text-gray-300 font-roboto-condensed font-light group-hover:text-white transition-colors uppercase tracking-wide text-xs md:text-sm">SUCCESS RATE</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl md:text-3xl lg:text-4xl font-oswald font-bold text-brand-orange mb-2 group-hover:scale-110 transition-transform uppercase">
              $<span className="counter" data-target="50">50</span>M+
            </div>
            <div className="text-gray-300 font-roboto-condensed font-light group-hover:text-white transition-colors uppercase tracking-wide text-xs md:text-sm">VALUE GENERATED</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-brand-orange transition-colors cursor-pointer">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;