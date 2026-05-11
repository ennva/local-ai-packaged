
import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import MethodologySection from '../components/MethodologySection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ExpertiseSection from '../components/ExpertiseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import PartnersSection from '../components/PartnersSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <MethodologySection />
          <CaseStudiesSection />
          <ExpertiseSection />
          <TestimonialsSection />
          <BlogSection />
          <PartnersSection />
          <ContactSection />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
};

export default Index;
