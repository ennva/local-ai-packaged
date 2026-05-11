
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'fr'
            ? 'bg-primary text-white font-medium'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => setLanguage('fr')}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'en'
            ? 'bg-primary text-white font-medium'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'de'
            ? 'bg-primary text-white font-medium'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => setLanguage('de')}
        aria-label="Switch to German"
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
