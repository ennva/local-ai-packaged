
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-neutral-200 relative overflow-hidden">
      {/* Accent line on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-secondary group-hover:text-accent transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-base text-neutral-600 font-roboto leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
