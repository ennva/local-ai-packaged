
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to create proper links based on current location
  const createSectionLink = (section: string) => {
    // If we're already on the home page, use anchor links
    if (location.pathname === '/') {
      return `#${section}`;
    }
    // Otherwise, navigate back to home page with the section anchor
    return `/#${section}`;
  };

  const navItems = [
    { label: t('nav.home'), href: createSectionLink('home') },
    { label: t('nav.services'), href: createSectionLink('services') },
    { label: t('nav.methodology'), href: createSectionLink('methodology') },
    { label: t('nav.case-studies'), href: createSectionLink('case-studies') },
    { label: t('nav.expertise'), href: createSectionLink('expertise') },
    { label: t('nav.testimonials'), href: createSectionLink('testimonials') },
    { label: t('blog.title'), href: '/blog' },
    { label: t('nav.contact'), href: createSectionLink('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href={createSectionLink('home')} className="flex items-center z-50 transition-transform hover:scale-105">
          <Logo size="sm" withText variant="hybrid" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`font-roboto font-medium transition-all hover:text-secondary relative group ${
                    isScrolled ? 'text-neutral-700' : 'text-white'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden z-50 transition-colors ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary 
          flex flex-col justify-center items-center
          transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
        `}>
          <ul className="flex flex-col space-y-6 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white text-xl font-roboto font-medium hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher className="mt-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
