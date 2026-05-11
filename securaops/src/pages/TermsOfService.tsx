
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const termsContent = {
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated:',
    date: 'May 19, 2025',
    sections: [
      {
        title: 'Introduction',
        content: 'Welcome to SecuraOps. These Terms of Service govern your use of our website and the services we offer. By accessing our website, you agree to these terms and conditions in full. If you disagree with these terms and conditions or any part of them, you must not use our website.'
      },
      {
        title: 'Services',
        content: 'SecuraOps provides IT consulting services, specializing in DevOps, cloud infrastructure, and systems integration. The specifics of the services to be provided will be detailed in separate agreements or statements of work between SecuraOps and its clients.'
      },
      {
        title: 'Intellectual Property Rights',
        content: 'All intellectual property rights in and to our website and its content (including without limitation, text, images, software, design, and logos) are owned by SecuraOps or its licensors. Nothing in these terms and conditions transfers any such rights to you.'
      },
      {
        title: 'User Content',
        content: 'When you upload or post content to our website, you grant SecuraOps a non-exclusive, worldwide, royalty-free license to use, reproduce, adapt, publish, translate and distribute it in any media. We may remove any content at our discretion.'
      },
      {
        title: 'No Warranties',
        content: 'Our website is provided "as is" without any express or implied warranty of any kind. SecuraOps does not warrant that our website will be available at all times or that it will be secure, error-free or free from viruses.'
      },
      {
        title: 'Limitation of Liability',
        content: 'SecuraOps shall not be liable to you for any indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, revenue, or data, arising from your use of our website or services, even if we have been advised of the possibility of such damages.'
      },
      {
        title: 'Indemnification',
        content: 'You agree to indemnify and hold SecuraOps harmless from any claims, damages, liabilities, costs, and expenses (including attorney fees) arising from your violation of these Terms of Service or your use of our website.'
      },
      {
        title: 'Governing Law',
        content: 'These Terms of Service are governed by and construed in accordance with the laws of Luxembourg. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Luxembourg.'
      },
      {
        title: 'Changes to Terms',
        content: 'SecuraOps reserves the right to modify these Terms of Service at any time. We will provide notice of any significant changes. Your continued use of our website after such modifications will constitute your acknowledgment of the modified terms.'
      }
    ]
  },
  fr: {
    title: 'Conditions d\'Utilisation',
    lastUpdated: 'Dernière mise à jour:',
    date: '19 mai 2025',
    sections: [
      {
        title: 'Introduction',
        content: 'Bienvenue chez SecuraOps. Ces Conditions d\'Utilisation régissent votre utilisation de notre site web et des services que nous proposons. En accédant à notre site web, vous acceptez pleinement ces termes et conditions. Si vous n\'êtes pas d\'accord avec ces termes et conditions ou une partie d\'entre eux, vous ne devez pas utiliser notre site web.'
      },
      {
        title: 'Services',
        content: 'SecuraOps fournit des services de conseil en informatique, spécialisés dans DevOps, l\'infrastructure cloud et l\'intégration de systèmes. Les spécificités des services à fournir seront détaillées dans des accords séparés ou des énoncés de travail entre SecuraOps et ses clients.'
      },
      {
        title: 'Droits de Propriété Intellectuelle',
        content: 'Tous les droits de propriété intellectuelle sur et dans notre site web et son contenu (y compris, sans limitation, texte, images, logiciels, design et logos) appartiennent à SecuraOps ou à ses concédants. Rien dans ces termes et conditions ne transfère de tels droits à vous.'
      },
      {
        title: 'Contenu de l\'Utilisateur',
        content: 'Lorsque vous téléchargez ou publiez du contenu sur notre site web, vous accordez à SecuraOps une licence non exclusive, mondiale, libre de redevances pour utiliser, reproduire, adapter, publier, traduire et distribuer ce contenu dans n\'importe quel média. Nous pouvons supprimer tout contenu à notre discrétion.'
      },
      {
        title: 'Aucune Garantie',
        content: 'Notre site web est fourni "tel quel" sans aucune garantie expresse ou implicite de quelque nature que ce soit. SecuraOps ne garantit pas que notre site web sera disponible à tout moment ou qu\'il sera sécurisé, sans erreur ou exempt de virus.'
      },
      {
        title: 'Limitation de Responsabilité',
        content: 'SecuraOps ne sera pas responsable envers vous pour tout dommage indirect, consécutif, exemplaire, accessoire, spécial ou punitif, y compris la perte de profit, de revenus ou de données, résultant de votre utilisation de notre site web ou de nos services, même si nous avons été informés de la possibilité de tels dommages.'
      },
      {
        title: 'Indemnisation',
        content: 'Vous acceptez d\'indemniser et de dégager SecuraOps de toute réclamation, dommage, responsabilité, coût et dépense (y compris les frais d\'avocat) résultant de votre violation de ces Conditions d\'Utilisation ou de votre utilisation de notre site web.'
      },
      {
        title: 'Loi Applicable',
        content: 'Ces Conditions d\'Utilisation sont régies et interprétées conformément aux lois du Luxembourg. Tout litige relatif à ces termes et conditions sera soumis à la juridiction exclusive des tribunaux du Luxembourg.'
      },
      {
        title: 'Modifications des Conditions',
        content: 'SecuraOps se réserve le droit de modifier ces Conditions d\'Utilisation à tout moment. Nous vous informerons de toute modification significative. Votre utilisation continue de notre site web après de telles modifications constituera votre reconnaissance des termes modifiés.'
      }
    ]
  },
  de: {
    title: 'Nutzungsbedingungen',
    lastUpdated: 'Zuletzt aktualisiert:',
    date: '19. Mai 2025',
    sections: [
      {
        title: 'Einführung',
        content: 'Willkommen bei SecuraOps. Diese Nutzungsbedingungen regeln Ihre Nutzung unserer Website und der von uns angebotenen Dienstleistungen. Durch den Zugriff auf unsere Website stimmen Sie diesen Bedingungen vollständig zu. Wenn Sie mit diesen Bedingungen oder einem Teil davon nicht einverstanden sind, dürfen Sie unsere Website nicht nutzen.'
      },
      {
        title: 'Dienstleistungen',
        content: 'SecuraOps bietet IT-Beratungsdienstleistungen an, die sich auf DevOps, Cloud-Infrastruktur und Systemintegration spezialisieren. Die Einzelheiten der zu erbringenden Dienstleistungen werden in separaten Vereinbarungen oder Leistungsbeschreibungen zwischen SecuraOps und seinen Kunden festgelegt.'
      },
      {
        title: 'Rechte an geistigem Eigentum',
        content: 'Alle Rechte an geistigem Eigentum an und zu unserer Website und ihrem Inhalt (einschließlich, aber nicht beschränkt auf Text, Bilder, Software, Design und Logos) gehören SecuraOps oder seinen Lizenzgebern. Nichts in diesen Bedingungen überträgt irgendwelche solcher Rechte an Sie.'
      },
      {
        title: 'Benutzerinhalt',
        content: 'Wenn Sie Inhalte auf unsere Website hochladen oder posten, gewähren Sie SecuraOps eine nicht-exklusive, weltweite, gebührenfreie Lizenz zur Nutzung, Reproduktion, Anpassung, Veröffentlichung, Übersetzung und Verbreitung in allen Medien. Wir können jeden Inhalt nach unserem Ermessen entfernen.'
      },
      {
        title: 'Keine Garantien',
        content: 'Unsere Website wird "wie sie ist" ohne ausdrückliche oder stillschweigende Garantie jeglicher Art bereitgestellt. SecuraOps garantiert nicht, dass unsere Website jederzeit verfügbar oder sicher, fehlerfrei oder frei von Viren sein wird.'
      },
      {
        title: 'Haftungsbeschränkung',
        content: 'SecuraOps haftet Ihnen gegenüber nicht für indirekte, Folge-, exemplarische, zufällige, besondere oder Strafschäden, einschließlich entgangener Gewinne, Einnahmen oder Daten, die aus Ihrer Nutzung unserer Website oder Dienstleistungen entstehen, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden.'
      },
      {
        title: 'Freistellung',
        content: 'Sie erklären sich damit einverstanden, SecuraOps von allen Ansprüchen, Schäden, Verbindlichkeiten, Kosten und Ausgaben (einschließlich Anwaltskosten) freizustellen, die aus Ihrer Verletzung dieser Nutzungsbedingungen oder Ihrer Nutzung unserer Website entstehen.'
      },
      {
        title: 'Geltendes Recht',
        content: 'Diese Nutzungsbedingungen unterliegen dem Recht von Luxemburg und werden entsprechend ausgelegt. Alle Streitigkeiten im Zusammenhang mit diesen Bedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte von Luxemburg.'
      },
      {
        title: 'Änderungen der Bedingungen',
        content: 'SecuraOps behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Wir werden Sie über wesentliche Änderungen informieren. Ihre fortgesetzte Nutzung unserer Website nach solchen Änderungen stellt Ihre Bestätigung der geänderten Bedingungen dar.'
      }
    ]
  }
};

const TermsOfService = () => {
  const { language } = useLanguage();
  const content = termsContent[language as keyof typeof termsContent];

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

export default TermsOfService;
