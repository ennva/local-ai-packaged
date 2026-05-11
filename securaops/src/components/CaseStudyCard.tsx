
import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

interface CaseStudyCardProps {
  title: string;
  description: string;
  imageIndex: number;
  id: number;
}

// Use better placeholder images with tech-related visuals
const getPlaceholderImage = (index: number): string => {
  const images = [
    'photo-1488590528505-98d2b5aba04b',
    'photo-1518770660439-4636190af475',
    'photo-1461749280684-dccba630e2f6',
  ];
  const imageId = images[index % images.length];
  return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=800&q=80`;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, imageIndex, id }) => {
  const { t } = useLanguage();
  
  // Check if we're in a Router context by trying to access location
  // This is a workaround for development to prevent errors
  const isRouterAvailable = (() => {
    try {
      // This will throw if not in a Router context
      useLocation();
      return true;
    } catch (e) {
      console.error("Router context not available, using fallback for links");
      return false;
    }
  })();

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden card-hover border border-neutral-200 relative">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={getPlaceholderImage(imageIndex)} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4 bg-accent p-2 rounded-lg shadow-lg">
          <FileText className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-base text-neutral-600 font-roboto mb-4 leading-relaxed">{description}</p>
        {isRouterAvailable ? (
          <Link 
            to={`/case-study/${id}`} 
            className="inline-flex items-center text-secondary font-roboto font-semibold group-hover:text-accent transition-colors"
          >
            <span>{t('case-studies.viewcase')}</span>
            <ChevronRight className="ml-1 w-4 h-4 transition-transform transform group-hover:translate-x-2" />
          </Link>
        ) : (
          <a 
            href={`/case-study/${id}`} 
            className="inline-flex items-center text-secondary font-roboto font-semibold group-hover:text-accent transition-colors"
          >
            <span>{t('case-studies.viewcase')}</span>
            <ChevronRight className="ml-1 w-4 h-4 transition-transform transform group-hover:translate-x-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;
