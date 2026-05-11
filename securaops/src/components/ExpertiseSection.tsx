
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CloudCog, Cog, Code, Database, Network, ChartBar, ShieldCheck, Lock } from 'lucide-react';

const ExpertiseSection: React.FC = () => {
  const { t } = useLanguage();

  const expertiseAreas = [
    {
      icon: CloudCog,
      name: t('expertise.cloud'),
      skills: ['AWS', 'Azure', 'GCP', 'Private Cloud'],
    },
    {
      icon: Cog,
      name: t('expertise.automation'),
      skills: ['Ansible', 'Terraform', 'Puppet', 'Chef'],
    },
    {
      icon: Code,
      name: t('expertise.cicd'),
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI'],
    },
    {
      icon: Database,
      name: t('expertise.containers'),
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Helm'],
    },
    {
      icon: Network,
      name: t('expertise.infrastructure'),
      skills: ['Terraform', 'CloudFormation', 'Pulumi', 'ARM Templates'],
    },
    {
      icon: ChartBar,
      name: t('expertise.monitoring'),
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
    },
    {
      icon: ShieldCheck,
      name: t('expertise.security'),
      skills: ['SAST/DAST', 'WAF', 'IAM', 'Compliance as Code'],
    },
    {
      icon: Lock,
      name: t('expertise.compliance'),
      skills: ['GDPR', 'HIPAA', 'PCI DSS', 'ISO 27001'],
    },
  ];

  return (
    <section id="expertise" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-roboto font-semibold text-sm">{t('expertise.title')}</span>
          </div>
          <h2 className="mb-4 text-primary">{t('expertise.title2')}</h2>
          <p className="text-xl text-neutral-600 font-roboto max-w-3xl mx-auto leading-relaxed">{t('expertise.subtitle2')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200 card-hover relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-2.5 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-secondary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="ml-3 text-lg font-bold text-primary group-hover:text-secondary transition-colors">{area.name}</h3>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {area.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-neutral-600 font-roboto flex items-center text-sm">
                          <span className="h-1.5 w-1.5 bg-secondary rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
