import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-brand-orange" />
              <span className="text-2xl font-oswald font-bold uppercase tracking-wide">AppliedAI</span>
            </div>
            <p className="font-roboto-flex text-white/80 mb-6 max-w-md">
              We deliver{' '}
              <span className="text-brand-orange font-semibold">results-driven AI solutions</span>{' '}
              that integrate into your workflow—not just models.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-brand-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-orange transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-oswald font-semibold mb-4 uppercase tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="font-roboto-flex text-white/80 hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#approach" className="font-roboto-flex text-white/80 hover:text-brand-orange transition-colors">Approach</a></li>
              <li><a href="#case-studies" className="font-roboto-flex text-white/80 hover:text-brand-orange transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="font-roboto-flex text-white/80 hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-oswald font-semibold mb-4 uppercase tracking-wide">CONTACT INFO</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span className="font-roboto-flex text-white/80">risolab2025@gmail.com
</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue" />
                <span className="font-roboto-flex text-white/80">+256 7777 54234 </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span className="font-roboto-flex text-white/80">Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-oswald font-bold text-brand-orange mb-1 uppercase">500+</div>
              <div className="font-roboto-condensed font-light text-white/60 text-sm uppercase">PROJECTS DELIVERED</div>
            </div>
            <div>
              <div className="text-2xl font-oswald font-bold text-brand-blue mb-1 uppercase">95%</div>
              <div className="font-roboto-condensed font-light text-white/60 text-sm uppercase">SUCCESS RATE</div>
            </div>
            <div>
              <div className="text-2xl font-oswald font-bold text-brand-orange mb-1 uppercase">$50M+</div>
              <div className="font-roboto-condensed font-light text-white/60 text-sm uppercase">VALUE GENERATED</div>
            </div>
            <div>
              <div className="text-2xl font-oswald font-bold text-brand-blue mb-1 uppercase">24/7</div>
              <div className="font-roboto-condensed font-light text-white/60 text-sm uppercase">SUPPORT</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-roboto-flex text-white/60 text-center md:text-left">
              © 2025 AppliedAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-roboto-flex text-white/60 hover:text-brand-orange transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="font-roboto-flex text-white/60 hover:text-brand-orange transition-colors text-sm">Terms of Service</a>
              <a href="#" className="font-roboto-flex text-white/60 hover:text-brand-orange transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;