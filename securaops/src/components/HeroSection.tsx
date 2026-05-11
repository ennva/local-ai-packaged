
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary via-primary-light to-secondary text-white overflow-hidden"
    >
      {/* Fluid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fluid-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 30 Q30 20, 50 25 T80 30" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
              <path d="M10 60 Q30 50, 50 55 T90 60" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="25" cy="25" r="2" fill="white" opacity="0.4"/>
              <circle cx="75" cy="75" r="2" fill="white" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fluid-pattern)"/>
        </svg>
      </div>

      {/* Floating accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            {/**/}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-2">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-roboto font-medium">{t('hero.slogan')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.title2')}
            </h1>
            <p className="text-xl md:text-2xl font-roboto font-medium text-white/90 leading-relaxed">
              {t('hero.subtitle2')}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-roboto font-semibold rounded-lg hover:bg-accent-light transition-all transform hover:scale-105 hover:shadow-xl group"
              >
                <span>{t('hero.cta2')}</span>
                <ChevronRight className="transform transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-roboto font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                <span>{t('hero.contactButton')}</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Animated rings */}
              <div className="absolute w-72 h-72 rounded-full border-2 border-secondary/30 animate-ping"></div>
              <div className="absolute w-60 h-60 rounded-full bg-secondary/10 animate-pulse"></div>
              
              {/* Updated Logo SVG */}
              <div className="relative z-10 transform hover:scale-110 transition-transform duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300"
                  height="300"
                  viewBox="0 0 200 200"
                  className="drop-shadow-2xl"
                >
                  <defs>
                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00BFA6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FFD700" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(100 100)">
                    {/* Outer fluid shape */}
                    <path
                      d="M-60,-20 Q-40,-40, 0,-35 T60,-20 Q70,0, 60,30 T0,65 Q-40,70, -60,40 T-60,-20"
                      fill="url(#heroGradient)"
                      opacity="0.4"
                    />
                    {/* Middle layer */}
                    <path
                      d="M-45,-15 Q-30,-30, 0,-27 T45,-15 Q52,0, 45,22 T0,50 Q-30,53, -45,30 T-45,-15"
                      fill="#00BFA6"
                      opacity="0.6"
                    />
                    {/* Central shield */}
                    <path
                      d="M0,-35 L30,0 L0,40 L-30,0 Z"
                      fill="white"
                      opacity="0.95"
                    />
                    {/* Inner accent */}
                    <path
                      d="M0,-22 L18,0 L0,25 L-18,0 Z"
                      fill="#FFD700"
                    />
                    {/* Center dot */}
                    <circle cx="0" cy="2" r="6" fill="#0D3B66" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,0 Q300,80 600,40 T1200,0 L1200,120 L0,120 Z" fill="white" opacity="1"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
