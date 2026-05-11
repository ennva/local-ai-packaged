
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import CaseStudyCard from './CaseStudyCard';

const CaseStudiesSection: React.FC = () => {
  const { t } = useLanguage();

  const caseStudies = [
    {
      title: t('case-study.0.title'),
      description: t('case-study.0.objective'),
    },
    {
      title: t('case-study.1.title'),
      description: t('case-study.1.objective'),
    },
    {
      title: t('case-study.2.title'),
      description: t('case-study.2.objective'),
    },
    {
      title: t('case-study.3.title'),
      description: t('case-study.3.objective'),
    },
  ];

  return (
    <section id="case-studies" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-roboto font-semibold text-sm">{t('case-studies.title')}</span>
          </div>
          <h2 className="mb-4 text-primary">{t('case-studies.subtitle')}</h2>
          <p className="text-xl text-neutral-600 font-roboto max-w-3xl mx-auto leading-relaxed">{t('case-studies.subtitle2')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              description={study.description}
              imageIndex={index}
              id={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
