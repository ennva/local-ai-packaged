
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from './ServiceCard';
import { CloudCog, Cog, ShieldCheck, ChartBar, GitMerge, BrainCog } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: CloudCog,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
    },
    {
      icon: Cog,
      title: t('services.devops.title2'),
      description: t('services.devops.description2'),
    },
    {
      icon: ShieldCheck,
      title: t('services.security.title'),
      description: t('services.security.description'),
    },
    {
      icon: BrainCog,
      title: t('services.ia.title'),
      description: t('services.ia.description'),
    },
    {
      icon: GitMerge,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
    },
  ];

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-roboto font-semibold text-sm">{t('services.title')}</span>
          </div>
          <h2 className="mb-4 text-primary">{t('services.title2')}</h2>
          <p className="text-xl text-neutral-600 font-roboto max-w-3xl mx-auto leading-relaxed">{t('services.subtitle2')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
