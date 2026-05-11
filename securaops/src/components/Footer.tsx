
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
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

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-neutral-900 text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <div className="[&_span]:!text-white">
              <Logo size="sm" withText variant="hybrid" />
            </div>
            <p className="mt-4 text-neutral-300 font-roboto text-sm sm:text-base leading-relaxed">
              {t('footer.company.description')}
            </p>
            <p className="mt-3 text-accent font-medium text-sm italic">
              {t('hero.title2')}
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/company/securaops05" 
                target='_blank' 
                className="text-neutral-300 hover:text-accent transition-all hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-accent transition-all hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-accent transition-all hover:scale-110 transform"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-secondary">{t('footer.links')}</h4>
            <ul className="space-y-2.5">
              <li><a href={createSectionLink('services')} className="text-neutral-300 hover:text-white hover:translate-x-1 inline-block transition-all font-roboto text-sm sm:text-base">{t('nav.services')}</a></li>
              <li><a href={createSectionLink('methodology')} className="text-neutral-300 hover:text-white hover:translate-x-1 inline-block transition-all font-roboto text-sm sm:text-base">{t('nav.methodology')}</a></li>
              <li><a href={createSectionLink('case-studies')} className="text-neutral-300 hover:text-white hover:translate-x-1 inline-block transition-all font-roboto text-sm sm:text-base">{t('nav.case-studies')}</a></li>
              <li><a href={createSectionLink('expertise')} className="text-neutral-300 hover:text-white hover:translate-x-1 inline-block transition-all font-roboto text-sm sm:text-base">{t('nav.expertise')}</a></li>
              <li><Link to="/blog" className="text-neutral-300 hover:text-white hover:translate-x-1 inline-block transition-all font-roboto text-sm sm:text-base">{t('blog.title')}</Link></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-secondary">{t('footer.legal')}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy" className="text-neutral-300 hover:text-white hover:translate-x-1 inline-block transition-all font-roboto text-sm sm:text-base">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-300 hover:text-white hover:translate-x-1 inline-block transition-all font-roboto text-sm sm:text-base">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-secondary">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 mt-0.5 text-secondary group-hover:text-accent transition-colors" />
                <span className="text-neutral-300 font-roboto text-sm sm:text-base">info@securaops.tech</span>
              </li>
              <li className="flex items-start group">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 mt-0.5 text-secondary group-hover:text-accent transition-colors" />
                <span className="text-neutral-300 font-roboto text-sm sm:text-base">+352 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-start group">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-3 mt-0.5 text-secondary group-hover:text-accent transition-colors" />
                <span className="text-neutral-300 font-roboto text-sm sm:text-base">France, Luxembourg</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-8 text-center">
          <p className="text-neutral-400 font-roboto text-xs sm:text-sm">
            © {currentYear} SecuraOps. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
