
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MethodologySection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t('methodology.step1.title'),
      description: t('methodology.step1.description'),
    },
    {
      number: 2,
      title: t('methodology.step2.title'),
      description: t('methodology.step2.description'),
    },
    {
      number: 3,
      title: t('methodology.step3.title'),
      description: t('methodology.step3.description'),
    },
    {
      number: 4,
      title: t('methodology.step4.title'),
      description: t('methodology.step4.description'),
    },
    {
      number: 5,
      title: t('methodology.step5.title'),
      description: t('methodology.step5.description'),
    },
    {
      number: 6,
      title: t('methodology.step6.title'),
      description: t('methodology.step6.description'),
    },
  ];

  return (
    <section id="methodology" className="section-padding bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-roboto font-semibold text-sm">{t('methodology.title')}</span>
          </div>
          <h2 className="mb-4 text-primary">{t('methodology.title2')}</h2>
          <p className="text-xl text-neutral-600 font-roboto max-w-3xl mx-auto leading-relaxed">{t('methodology.subtitle2')}</p>
        </div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary transform -translate-x-1/2 opacity-30"></div>
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative md:flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center group`}
              >
                {/* Number circle for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-md hover:shadow-xl transition-all border border-neutral-200 relative group-hover:-translate-y-1">
                  {/* Number circle for mobile */}
                  <div className="md:hidden w-14 h-14 bg-gradient-to-br from-secondary to-accent text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Accent corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/10 to-transparent rounded-tr-2xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 md:text-center text-primary group-hover:text-secondary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 font-roboto md:text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer div for desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
