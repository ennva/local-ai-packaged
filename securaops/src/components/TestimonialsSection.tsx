
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.client1.text'),
      name: t('testimonials.client1.name'),
      position: t('testimonials.client1.position'),
    },
    {
      text: t('testimonials.client2.text'),
      name: t('testimonials.client2.name'),
      position: t('testimonials.client2.position'),
    },
    {
      text: t('testimonials.client3.text'),
      name: t('testimonials.client3.name'),
      position: t('testimonials.client3.position'),
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-roboto font-semibold text-sm">{t('testimonials.title')}</span>
          </div>
          <h2 className="mb-4 text-primary">{t('testimonials.title2')}</h2>
          <p className="text-xl text-neutral-600 font-roboto max-w-3xl mx-auto leading-relaxed">{t('testimonials.subtitle2')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
