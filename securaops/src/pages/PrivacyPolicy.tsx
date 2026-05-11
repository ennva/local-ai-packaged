
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const privacyContent = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated:',
    date: 'May 19, 2025',
    sections: [
      {
        title: 'Introduction',
        content: 'At SecuraOps, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.'
      },
      {
        title: 'Data We Collect',
        content: 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.'
      },
      {
        title: 'How We Use Your Data',
        content: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our services, manage our relationship with you, administer and protect our business, and deliver relevant website content and advertisements to you.'
      },
      {
        title: 'Data Security',
        content: 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.'
      },
      {
        title: 'Data Retention',
        content: 'We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.'
      },
      {
        title: 'Your Legal Rights',
        content: 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and the right to withdraw consent.'
      },
      {
        title: 'Third-Party Links',
        content: 'This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.'
      },
      {
        title: 'Cookies',
        content: 'You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.'
      }
    ]
  },
  fr: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour:',
    date: '19 mai 2025',
    sections: [
      {
        title: 'Introduction',
        content: 'Chez SecuraOps, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera de la manière dont nous traitons vos données personnelles lorsque vous visitez notre site web et vous informera de vos droits en matière de confidentialité et de la manière dont la loi vous protège.'
      },
      {
        title: 'Données que nous collectons',
        content: 'Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant, que nous avons regroupées comme suit : Données d\'identité, Données de contact, Données techniques, Données d\'utilisation et Données de marketing et de communication.'
      },
      {
        title: 'Comment nous utilisons vos données',
        content: 'Nous n\'utiliserons vos données personnelles que lorsque la loi nous le permet. Le plus souvent, nous utiliserons vos données personnelles pour fournir nos services, gérer notre relation avec vous, administrer et protéger notre entreprise, et vous fournir du contenu et des publicités pertinents sur notre site web.'
      },
      {
        title: 'Sécurité des données',
        content: 'Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée, modifiées ou divulguées.'
      },
      {
        title: 'Conservation des données',
        content: 'Nous ne conserverons vos données personnelles que le temps nécessaire à la réalisation des finalités pour lesquelles nous les avons collectées, y compris pour satisfaire à toute exigence légale, comptable ou de déclaration.'
      },
      {
        title: 'Vos droits légaux',
        content: 'Dans certaines circonstances, vous disposez de droits en vertu des lois sur la protection des données concernant vos données personnelles, notamment le droit de demander l\'accès, la correction, l\'effacement, la restriction, le transfert, de s\'opposer au traitement, à la portabilité des données et le droit de retirer son consentement.'
      },
      {
        title: 'Liens vers des tiers',
        content: 'Ce site web peut inclure des liens vers des sites web, des plugins et des applications de tiers. Le fait de cliquer sur ces liens ou d\'activer ces connexions peut permettre à des tiers de collecter ou de partager des données vous concernant. Nous ne contrôlons pas ces sites web tiers et ne sommes pas responsables de leurs déclarations de confidentialité.'
      },
      {
        title: 'Cookies',
        content: 'Vous pouvez configurer votre navigateur pour qu\'il refuse tous les cookies ou une partie d\'entre eux, ou pour qu\'il vous avertisse lorsque des sites web installent ou accèdent à des cookies. Si vous désactivez ou refusez les cookies, veuillez noter que certaines parties de ce site web peuvent devenir inaccessibles ou ne pas fonctionner correctement.'
      }
    ]
  },
  de: {
    title: 'Datenschutzrichtlinie',
    lastUpdated: 'Zuletzt aktualisiert:',
    date: '19. Mai 2025',
    sections: [
      {
        title: 'Einleitung',
        content: 'Bei SecuraOps respektieren wir Ihre Privatsphäre und sind bestrebt, Ihre persönlichen Daten zu schützen. Diese Datenschutzrichtlinie informiert Sie darüber, wie wir mit Ihren persönlichen Daten umgehen, wenn Sie unsere Website besuchen, und klärt Sie über Ihre Datenschutzrechte und darüber auf, wie das Gesetz Sie schützt.'
      },
      {
        title: 'Daten, die wir sammeln',
        content: 'Wir können verschiedene Arten von personenbezogenen Daten über Sie sammeln, verwenden, speichern und übertragen, die wir wie folgt gruppiert haben: Identitätsdaten, Kontaktdaten, Technische Daten, Nutzungsdaten und Marketing- und Kommunikationsdaten.'
      },
      {
        title: 'Wie wir Ihre Daten verwenden',
        content: 'Wir werden Ihre personenbezogenen Daten nur dann verwenden, wenn das Gesetz es uns erlaubt. Am häufigsten werden wir Ihre personenbezogenen Daten verwenden, um unsere Dienstleistungen zu erbringen, unsere Beziehung zu Ihnen zu verwalten, unser Unternehmen zu verwalten und zu schützen und Ihnen relevante Website-Inhalte und Werbung zu liefern.'
      },
      {
        title: 'Datensicherheit',
        content: 'Wir haben angemessene Sicherheitsmaßnahmen getroffen, um zu verhindern, dass Ihre personenbezogenen Daten versehentlich verloren gehen, unbefugt verwendet oder abgerufen, verändert oder weitergegeben werden.'
      },
      {
        title: 'Aufbewahrung von Daten',
        content: 'Wir werden Ihre personenbezogenen Daten nur so lange aufbewahren, wie es für die Erfüllung der Zwecke, für die wir sie erhoben haben, erforderlich ist, einschließlich der Erfüllung gesetzlicher, buchhalterischer oder Berichtspflichten.'
      },
      {
        title: 'Ihre gesetzlichen Rechte',
        content: 'Unter bestimmten Umständen haben Sie nach den Datenschutzgesetzen Rechte in Bezug auf Ihre personenbezogenen Daten, einschließlich des Rechts, Zugang, Berichtigung, Löschung, Einschränkung, Übertragung, Widerspruch gegen die Verarbeitung, Übertragbarkeit von Daten und das Recht, Ihre Einwilligung zu widerrufen, zu verlangen.'
      },
      {
        title: 'Links zu Drittanbietern',
        content: 'Diese Website kann Links zu Websites, Plugins und Anwendungen Dritter enthalten. Wenn Sie auf diese Links klicken oder diese Verbindungen aktivieren, können Dritte Daten über Sie sammeln oder weitergeben. Wir kontrollieren diese Websites Dritter nicht und sind nicht für deren Datenschutzerklärungen verantwortlich.'
      },
      {
        title: 'Cookies',
        content: 'Sie können Ihren Browser so einstellen, dass er alle oder einige Browser-Cookies ablehnt oder Sie warnt, wenn Websites Cookies setzen oder darauf zugreifen. Wenn Sie Cookies deaktivieren oder ablehnen, beachten Sie bitte, dass einige Teile dieser Website möglicherweise unzugänglich werden oder nicht richtig funktionieren.'
      }
    ]
  }
};

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const content = privacyContent[language as keyof typeof privacyContent];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h1 className="text-3xl font-bold text-primary mb-4">{content.title}</h1>
            <p className="mb-8 text-gray-600">
              {content.lastUpdated} {content.date}
            </p>

            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold text-dark mb-3">{section.title}</h2>
                  <p className="text-gray-700">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
