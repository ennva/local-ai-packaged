
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, User, Target, Wrench, TrendingUp, Lightbulb, Compass, Phone } from 'lucide-react';
import { useLanguage, LanguageProvider } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Get placeholder images
const getPlaceholderImage = (index: number): string => {
  const images = [
    'photo-1488590528505-98d2b5aba04b',
    'photo-1518770660439-4636190af475',
    'photo-1461749280684-dccba630e2f6',
    'photo-1555949963-aa79dcee981c', // AI/ML related image
  ];
  const imageId = images[index % images.length];
  return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=1600&q=80`;
};

// Wrap the inner component with the language context
const CaseStudyContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const caseId = parseInt(id || '0');

  // Enhanced case study data with structured content
  const caseStudies = [
    {
      title: t('case-study.0.title'),
      objective: t('case-study.0.objective'),
      results: t('case-study.0.results'),
      sector: t('case-study.0.sector'),
      duration: t('case-study.0.duration'),
      context: t('case-study.0.context'),
      intervention: [
        t('case-study.0.intervention.1'),
        t('case-study.0.intervention.2'),
        t('case-study.0.intervention.3'),
        t('case-study.0.intervention.4'),
        t('case-study.0.intervention.5')
      ],
      resultsTable: [
        { metric: t('case-study.0.metric.1'), before: "100%", after: "60%", improvement: "-40%" },
        { metric: t('case-study.0.metric.2'), before: "~98%", after: ">99.95%", improvement: "+1.95 pts" },
        { metric: t('case-study.0.metric.3'), before: "7-10 jours", after: "<30 min", improvement: "-95%" },
        { metric: t('case-study.0.metric.4'), before: ">24h", after: "<2h", improvement: "-90%" }
      ],
      importance: t('case-study.0.importance'),
      applicability: t('case-study.0.applicability')
    },
    {
      title: t('case-study.1.title'),
      objective: t('case-study.1.objective'),
      results: t('case-study.1.results'),
      sector: t('case-study.1.sector'),
      duration: t('case-study.1.duration'),
      context: t('case-study.1.context'),
      intervention: [
        t('case-study.1.intervention.1'),
        t('case-study.1.intervention.2'),
        t('case-study.1.intervention.3'),
        t('case-study.1.intervention.4'),
        t('case-study.1.intervention.5')
      ],
      resultsTable: [
        { metric: t('case-study.1.metric.1'), before: "85%", after: "99.9%", improvement: "+14.9 pts" },
        { metric: t('case-study.1.metric.2'), before: "12/month", after: "0/month", improvement: "-100%" },
        { metric: t('case-study.1.metric.3'), before: "70%", after: "100%", improvement: "+30 pts" },
        { metric: t('case-study.1.metric.4'), before: "4 hours", after: "15 min", improvement: "-94%" }
      ],
      importance: t('case-study.1.importance'),
      applicability: t('case-study.1.applicability')
    },
    {
      title: t('case-study.2.title'),
      objective: t('case-study.2.objective'),
      results: t('case-study.2.results'),
      sector: t('case-study.2.sector'),
      duration: t('case-study.2.duration'),
      context: t('case-study.2.context'),
      intervention: [
        t('case-study.2.intervention.1'),
        t('case-study.2.intervention.2'),
        t('case-study.2.intervention.3'),
        t('case-study.2.intervention.4'),
        t('case-study.2.intervention.5')
      ],
      resultsTable: [
        { metric: t('case-study.2.metric.1'), before: "2 hours", after: "12 min", improvement: "+900%" },
        { metric: t('case-study.2.metric.2'), before: "20/release", after: "1/release", improvement: "-95%" },
        { metric: t('case-study.2.metric.3'), before: "100%", after: "180%", improvement: "+80%" },
        { metric: t('case-study.2.metric.4'), before: "95%", after: "99.8%", improvement: "+4.8 pts" }
      ],
      importance: t('case-study.2.importance'),
      applicability: t('case-study.2.applicability')
    },
    {
      title: t('case-study.3.title'),
      objective: t('case-study.3.objective'),
      results: t('case-study.3.results'),
      sector: t('case-study.3.sector'),
      duration: t('case-study.3.duration'),
      context: t('case-study.3.context'),
      intervention: [
        t('case-study.3.intervention.1'),
        t('case-study.3.intervention.2'),
        t('case-study.3.intervention.3'),
        t('case-study.3.intervention.4'),
        t('case-study.3.intervention.5')
      ],
      resultsTable: [
        { metric: t('case-study.3.metric.1'), before: "4-6 hours", after: "20 min", improvement: "-70%" },
        { metric: t('case-study.3.metric.2'), before: "95%", after: "99.5%", improvement: "+4.5 pts" },
        { metric: t('case-study.3.metric.3'), before: "2-4 hours", after: "5 min", improvement: "-95%" },
        { metric: t('case-study.3.metric.4'), before: "Manual", after: "100%", improvement: "Automated" }
      ],
      importance: t('case-study.3.importance'),
      applicability: t('case-study.3.applicability')
    }
  ];

  const caseStudy = caseStudies[caseId];

  React.useEffect(() => {
    toast({
      title: t('case-studies.loaded'),
      description: caseStudy.title,
    });
  }, [caseStudy.title, toast, t]);

  const scrollToContact = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container-custom py-6 md:py-8">
          <Breadcrumb className="mb-4 md:mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">{t('navigation.home')}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#case-studies">{t('navigation.case-studies')}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{caseStudy.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Link to="/#case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t('case-studies.back')}
          </Link>

          <article className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <header className="mb-8">
              <div className="h-64 md:h-96 overflow-hidden relative rounded-lg mb-8">
                <img 
                  src={getPlaceholderImage(caseId)} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary/80 p-3 rounded-md">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">{caseStudy.title}</h1>
              
              {/* Summary Card */}
              <Card className="mb-8 bg-gray-50 border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{t('case-study.summary')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t('case-study.objective')}</p>
                      <p className="text-gray-900">{caseStudy.objective}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t('case-study.results')}</p>
                      <p className="text-gray-900">{caseStudy.results}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t('case-study.sector')}</p>
                      <p className="text-gray-900">{caseStudy.sector}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t('case-study.duration')}</p>
                      <p className="text-gray-900">{caseStudy.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </header>

            {/* Context & Challenges */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">{t('case-study.context.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{caseStudy.context}</p>
            </section>

            {/* Our Intervention */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Wrench className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">{t('case-study.intervention.title')}</h2>
              </div>
              <ul className="space-y-3">
                {caseStudy.intervention.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Concrete Results */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">{t('case-study.results.title')}</h2>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('case-study.table.metric')}</TableHead>
                      <TableHead>{t('case-study.table.before')}</TableHead>
                      <TableHead>{t('case-study.table.after')}</TableHead>
                      <TableHead>{t('case-study.table.improvement')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {caseStudy.resultsTable.map((result, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{result.metric}</TableCell>
                        <TableCell>{result.before}</TableCell>
                        <TableCell>{result.after}</TableCell>
                        <TableCell className="text-green-600 font-semibold">{result.improvement}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            {/* Why It's Important */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">{t('case-study.importance.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{caseStudy.importance}</p>
            </section>

            {/* Applicability */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Compass className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">{t('case-study.applicability.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{caseStudy.applicability}</p>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center text-white">
              <Phone className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-4">{t('case-study.cta.title')}</h2>
              <p className="mb-6 text-lg opacity-90">
                {t('case-study.cta.description')}
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
              >
                {t('case-study.cta.button')}
              </Button>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Main component that wraps the content with LanguageProvider
const CaseStudy: React.FC = () => {
  return (
    <LanguageProvider>
      <CaseStudyContent />
    </LanguageProvider>
  );
};

export default CaseStudy;
