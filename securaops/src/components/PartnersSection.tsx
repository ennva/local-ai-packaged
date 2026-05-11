
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  // Tech stack logos (using placeholder for now)
  const technologies = [
    { name: 'AWS', color: '#FF9900', text: 'AWS' },
    { name: 'Azure', color: '#0089D6', text: 'Azure' },
    { name: 'GCP', color: '#4285F4', text: 'GCP' },
    { name: 'Docker', color: '#2496ED', text: 'Docker' },
    { name: 'Kubernetes', color: '#326CE5', text: 'K8s' },
    { name: 'Terraform', color: '#7B42BC', text: 'Terraform' },
    { name: 'Jenkins', color: '#D33833', text: 'Jenkins' },
    { name: 'GitHub', color: '#181717', text: 'GitHub' },
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-roboto font-semibold text-sm">{t('partners.title')}</span>
          </div>
          <h3 className="text-3xl font-bold mb-3 text-primary">{t('partners.title2')}</h3>
          <p className="text-neutral-600 font-roboto">{t('partners.subtitle')}</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex items-center justify-center h-24 w-36 bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              style={{ 
                minWidth: '120px'
              }}
            >
              <div 
                className="font-bold text-2xl group-hover:scale-110 transition-transform" 
                style={{ color: tech.color }}
              >
                {tech.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
