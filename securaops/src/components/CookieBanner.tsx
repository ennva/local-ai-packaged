
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Cookie, X } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';

const translations = {
  en: {
    title: 'Cookie Consent',
    description: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.',
    acceptAll: 'Accept All',
    decline: 'Decline',
    preferences: 'Preferences',
    preferencesTitle: 'Cookie Preferences',
    preferencesDescription: 'Manage your cookie preferences here. You can choose which types of cookies you allow on our website.',
    necessary: 'Necessary Cookies',
    necessaryDesc: 'Essential cookies for the website to function properly. These cannot be disabled.',
    analytics: 'Analytics Cookies',
    analyticsDesc: 'Help us understand how visitors interact with our website.',
    marketing: 'Marketing Cookies',
    marketingDesc: 'Used to track visitors across websites for marketing purposes.',
    save: 'Save Settings'
  },
  fr: {
    title: 'Consentement aux Cookies',
    description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. En cliquant sur "Tout accepter", vous consentez à notre utilisation de cookies.',
    acceptAll: 'Tout accepter',
    decline: 'Refuser',
    preferences: 'Préférences',
    preferencesTitle: 'Préférences de Cookies',
    preferencesDescription: 'Gérez vos préférences de cookies ici. Vous pouvez choisir quels types de cookies vous autorisez sur notre site.',
    necessary: 'Cookies Nécessaires',
    necessaryDesc: 'Cookies essentiels au bon fonctionnement du site. Ils ne peuvent pas être désactivés.',
    analytics: 'Cookies Analytiques',
    analyticsDesc: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site.',
    marketing: 'Cookies Marketing',
    marketingDesc: 'Utilisés pour suivre les visiteurs à travers les sites web à des fins marketing.',
    save: 'Enregistrer les paramètres'
  },
  de: {
    title: 'Cookie-Einwilligung',
    description: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, den Website-Verkehr zu analysieren und Inhalte zu personalisieren. Durch Klicken auf "Alle akzeptieren" stimmen Sie unserer Verwendung von Cookies zu.',
    acceptAll: 'Alle akzeptieren',
    decline: 'Ablehnen',
    preferences: 'Einstellungen',
    preferencesTitle: 'Cookie-Einstellungen',
    preferencesDescription: 'Verwalten Sie hier Ihre Cookie-Einstellungen. Sie können auswählen, welche Arten von Cookies Sie auf unserer Website zulassen.',
    necessary: 'Notwendige Cookies',
    necessaryDesc: 'Wesentliche Cookies für das ordnungsgemäße Funktionieren der Website. Diese können nicht deaktiviert werden.',
    analytics: 'Analyse-Cookies',
    analyticsDesc: 'Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
    marketing: 'Marketing-Cookies',
    marketingDesc: 'Werden verwendet, um Besucher über Websites hinweg zu verfolgen, zum Zweck des Marketings.',
    save: 'Einstellungen speichern'
  }
};

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [openPreferences, setOpenPreferences] = useState<boolean>(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });
  
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    // Check if user has already set cookie preferences
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a small delay to improve user experience
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        setCookiePreferences(JSON.parse(cookieConsent));
      } catch (e) {
        console.error('Error parsing cookie preferences', e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setCookiePreferences(allAccepted);
    setShowBanner(false);
    
    // Here you would typically initialize your analytics and marketing tools
    console.log('All cookies accepted, initializing tracking tools');
  };

  const handleDecline = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setCookiePreferences(onlyNecessary);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(cookiePreferences));
    setOpenPreferences(false);
    setShowBanner(false);
    
    // Here you would conditionally initialize tools based on preferences
    console.log('Cookie preferences saved:', cookiePreferences);
  };

  const handlePreferenceChange = (type: string) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-medium text-lg">{t.title}</h3>
                <p className="text-sm text-gray-600 mt-1 pr-4">{t.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setOpenPreferences(true)}
              >
                {t.preferences}
              </Button>
              <Button 
                variant="outline"
                size="sm" 
                onClick={handleDecline}
              >
                {t.decline}
              </Button>
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary/90"
                onClick={handleAcceptAll}
              >
                {t.acceptAll}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Dialog */}
      <Sheet open={openPreferences} onOpenChange={setOpenPreferences}>
        <SheetContent className="sm:max-w-lg w-full">
          <SheetHeader>
            <SheetTitle>{t.preferencesTitle}</SheetTitle>
            <SheetDescription>
              {t.preferencesDescription}
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6 space-y-6">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between pb-4 border-b">
              <div>
                <h4 className="font-medium">{t.necessary}</h4>
                <p className="text-sm text-gray-500 mt-1">{t.necessaryDesc}</p>
              </div>
              <div className="h-6 w-10 bg-primary/90 rounded-full flex items-center justify-end px-1">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
            
            {/* Analytics Cookies */}
            <div className="flex items-start justify-between pb-4 border-b">
              <div>
                <h4 className="font-medium">{t.analytics}</h4>
                <p className="text-sm text-gray-500 mt-1">{t.analyticsDesc}</p>
              </div>
              <div 
                className={`h-6 w-10 rounded-full flex items-center px-1 cursor-pointer transition-colors ${cookiePreferences.analytics ? 'bg-primary/90 justify-end' : 'bg-gray-300 justify-start'}`}
                onClick={() => handlePreferenceChange('analytics')}
              >
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
            
            {/* Marketing Cookies */}
            <div className="flex items-start justify-between pb-4 border-b">
              <div>
                <h4 className="font-medium">{t.marketing}</h4>
                <p className="text-sm text-gray-500 mt-1">{t.marketingDesc}</p>
              </div>
              <div 
                className={`h-6 w-10 rounded-full flex items-center px-1 cursor-pointer transition-colors ${cookiePreferences.marketing ? 'bg-primary/90 justify-end' : 'bg-gray-300 justify-start'}`}
                onClick={() => handlePreferenceChange('marketing')}
              >
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button onClick={handleSavePreferences}>
              {t.save}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CookieBanner;
