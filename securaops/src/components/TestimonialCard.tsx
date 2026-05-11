
import React from 'react';
import { UserRound } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  name: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, position }) => {
  return (
    <div className="group bg-white p-8 rounded-xl shadow-md border border-neutral-200 card-hover relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/10 to-transparent"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-6">
          {/* Quote icon */}
          <svg 
            className="h-10 w-10 text-secondary/40 group-hover:text-secondary/60 transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.5,10c-1.2,0-2.4,0.2-3.4,0.6c-0.3-0.8-0.4-1.6-0.4-2.3c0-3.1,2-5.9,4.8-7.2l0.5-0.3L8.7,2L8.2,2.3
              C4.7,3.9,3,7.5,3,10.8C3,14,4.7,17,7.5,17c1.7,0,3.2-1.4,3.2-3.5C10.6,11.6,8.8,10,6.5,10z M16.8,10c-1.2,0-2.4,0.2-3.4,0.6
              c-0.3-0.8-0.4-1.6-0.4-2.3c0-3.1,2-5.9,4.8-7.2l0.5-0.3L19,2l-0.5,0.3c-3.5,1.6-5.2,5.1-5.2,8.4c0,3.2,1.7,6.2,4.5,6.2
              c1.7,0,3.2-1.4,3.2-3.5C21,11.6,19.2,10,16.8,10z"/>
          </svg>
        </div>
        
        <p className="text-neutral-700 font-roboto italic mb-6 flex-grow leading-relaxed text-base">{text}</p>
        
        <div className="flex items-center mt-4 pt-4 border-t border-neutral-100">
          <div className="p-2.5 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full group-hover:scale-110 transition-transform">
            <UserRound className="h-6 w-6 text-secondary" />
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-primary">{name}</h4>
            <p className="text-neutral-600 font-roboto text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
