import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Approach', href: '/#approach' },
    { label: 'Case Studies', href: '/#case-studies' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Blog', href: '/blog' },
  ];

  // Determine active nav item based on location
  const getActiveIndex = () => {
    if (location.pathname === '/blog') return navItems.findIndex(i => i.href === '/blog');
    if (location.pathname === '/' && location.hash) {
      const idx = navItems.findIndex(i => i.href === location.hash);
      return idx !== -1 ? idx : 0;
    }
    if (location.pathname === '/') return 0; // Home
    return -1;
  };
  const activeIndex = getActiveIndex();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 bg-transparent ${
      isScrolled ? 'bg-brand-brown/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      {/* Left pill: Logo and text */}
      <div className="rounded-full border border-gray-200 bg-white shadow-sm px-4 sm:px-6 py-1.5 flex items-center gap-2">
        <Brain className="h-6 w-6 text-brand-orange" />
        <span className="text-sm sm:text-base font-oswald font-bold text-gray-800 uppercase tracking-wide">AppliedAI</span>
      </div>

      {/* Right pill: Nav links */}
      <div className="hidden md:flex items-center rounded-full border border-gray-200 bg-white shadow-sm px-3 py-1.5 gap-1">
        {navItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className={`px-4 py-1.5 text-sm font-roboto-flex text-gray-800 font-medium transition rounded-full cursor-pointer 
              ${activeIndex === idx ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 hover:text-brand-orange'}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 hover:text-brand-orange p-1.5"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 flex justify-end px-2 z-50">
          <div className="bg-white shadow-lg rounded-xl mt-2 w-full max-w-xs p-3 flex flex-col gap-1 border border-gray-200">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-3 py-2 text-sm font-roboto-flex text-gray-800 font-medium transition rounded-lg cursor-pointer 
                  ${activeIndex === idx ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 hover:text-brand-orange'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;